from .. import db
from ..models.PropertyModel import Property
from ..models.AmenitiesModel import Amenities
from ..models.RoomModel import Room
from ..models.ReviewsModel import Reviews
from ..models.BookingSlotsModel import BookingSlots
from ..models.BookingsModel import Bookings
from ..models.OtpModel import Otp
import json
import math
import datetime
from datetime import timedelta
from datetime import datetime
from datetime import date
import razorpay
import hmac,hashlib
import uuid
from twilio.rest import Client
import pyotp
import boto3
from botocore.exceptions import ClientError
import os



def getPropertyDetails(entity_id):
    property_data = Property.query.filter(Property.id == int(entity_id)).first()

    query = ('''SELECT AVG(star_rating) as average FROM reviews WHERE property_id = %d'''%(int(entity_id)))

    avg_review = round(db.session.execute(query).fetchone()[0],2) if db.session.execute(query).fetchone()[0] else "NA"

    final_detail = {}
    
    basic_details = {}
    basic_details['name'] = property_data.name
    basic_details['city'] = property_data.city
    basic_details['state'] = property_data.state
    basic_details['country'] = property_data.country
    basic_details['type'] = property_data.type
    basic_details['images'] = property_data.images
    basic_details['description'] = property_data.description
    basic_details['rooms'] = property_data.rooms
    basic_details['price'] = property_data.price
    basic_details['lat'] = property_data.lat
    basic_details['lng'] = property_data.lng
    basic_details['review'] = avg_review
    final_detail['basic_details'] = basic_details

    return json.dumps(final_detail, default = str)

def getAmenityDetails(entity_id):
    final_detail = {}

    amenities = Amenities.query.filter(Amenities.property_id == int(entity_id)).first()
    
    ame_dict = amenities.__dict__
    ame_list = ame_dict.keys()
    
    def add_ame(item):
        if item == 'property_id' or item == 'id':
            return False
        if ame_dict[item] == 1:
            return True
        else:
            return False

    final_detail['amenities'] = list(filter(add_ame, ame_list))

    # print("***************************", final_detail['amenities'])

    return json.dumps(final_detail)

def getRoomDetails(entity_id):
    final_detail = {}

    rooms = Room.query.filter(Room.property_id == int(entity_id)).all()

    room_details = []
    for room in rooms:
        temp_dict = {}
        temp_dict['room_type'] = room.room_type
        temp_dict['capacity'] = room.capacity
        temp_dict['description'] = room.description
        temp_dict['price'] = room.price
        room_details.append(temp_dict)

    final_detail['room_details'] = room_details

    return json.dumps(final_detail, default=str)


def getReviewsDetails(entity_id):
    reviews_data = Reviews.query.filter(Reviews.property_id == int(entity_id)).all()

    result = []
    for review in reviews_data:
        temp_dict = {}
        temp_dict['review'] = review.review
        temp_dict['star_rating'] = review.star_rating
        temp_dict['reviewed_at'] = review.reviewed_at.strftime('%d-%m-%Y '' %H:%M:%S')
        result.append(temp_dict)
    
    return json.dumps(result, default=str)


def fetchBlockedDates(entity_id):
    for_max_room = Property.query.filter(Property.id == int(entity_id)).first()
    max_room = for_max_room.rooms

    start_date = date.today().strftime("%Y-%m-%d")
    end_date = (date.today() + timedelta(60)).strftime("%Y-%m-%d")

    query1 = '''SELECT date, COUNT(*) as booked FROM booking_slots WHERE date BETWEEN CAST('%s' as date) AND CAST('%s' as date) AND property_id = %d GROUP BY date, property_id;'''%(start_date,end_date,int(entity_id))

    all_dates = db.session.execute(query1).fetchall()

    date_result = []

    for result in all_dates:
        if int(result[1]) >= max_room:
            date_result.append(result[0].strftime('%d-%m-%Y'))

    return json.dumps(date_result)

def fetchRoomAvailability(params, entity_id):
    start_date = params.get('start_date')
    end_date = params.get('end_date')

    rooms = Room.query.filter(Room.property_id == int(entity_id)).all()

    room_types = {}

    for room in rooms:
        room_types[room.room_type] = int(room.quantity)
        
    print("room types**********", room_types)


    query1 = '''SELECT room_type,date, COUNT(*) as booked FROM booking_slots WHERE date BETWEEN CAST('%s' as date) AND CAST('%s' as date) AND property_id = %d GROUP BY date, property_id, room_type;'''%(start_date,end_date,int(entity_id))

    all_bookings = db.session.execute(query1).fetchall()

    room_availability = {}


    for booking in all_bookings:
        if room_types.get(booking[0]):
            if int(booking[2]) >= room_types.get(booking[0]):
                room_availability[booking[0]] = "booked"
            elif int(booking[2]) < room_types.get(booking[0]):
                remaining = room_types.get(booking[0]) - booking[2]
                if room_availability.get(booking[0]):
                    if room_availability.get(booking[0]) != 'booked':
                        room_availability[booking[0]] = remaining if remaining > room_availability.get(booking[0]) else room_availability.get(booking[0])
                else:
                    room_availability[booking[0]] = remaining = room_types.get(booking[0]) - booking[2]

    for keys in room_types:
        if room_availability.get(keys):
            continue
        else:
            room_availability[keys] = room_types[keys]
    

    return json.dumps(room_availability)


def fetchRecommendations(entity_id,city,price,amenities):
    query = '''SELECT pp.id, pp.name, pp.city, pp.state, pp.country,pp.type,pp.price, aa.wifi,aa.ac,aa.kitchen,aa.breakfast,aa.pool,aa.heater,aa.frontdesk, pp.images FROM properties as pp JOIN amenities as aa ON pp.id = aa.property_id WHERE pp.city = '%s';'''%(city)

    raw_property = db.session.execute(query)

    price = int(price)
    lower = price - 500 if price - 500 > 0 else 0 
    upper = price + 500


    final_results = []
    # getting properties from database based on cities
    for data in raw_property:
        if data.id == int(entity_id):
            continue
        temp_dict = {}
        temp_dict = {}
        temp_dict['id'] = data.id
        temp_dict['name'] = data.name
        temp_dict['city'] = data.city
        temp_dict['state'] = data.state
        temp_dict['country'] = data.country
        temp_dict['type'] = data.type
        temp_dict['price'] = data.price
        temp_dict['wifi'] = data.wifi
        temp_dict['ac'] = data.ac
        temp_dict['kitchen'] = data.kitchen
        temp_dict['breakfast'] = data.breakfast
        temp_dict['pool'] = data.pool
        temp_dict['heater'] = data.heater
        temp_dict['frontdesk'] = data.frontdesk
        temp_dict['image_url'] = json.loads(data.images)
        final_results.append(temp_dict)

    for result in final_results:
        def ame_filter(item):
            if result[item] == 1:
                return True
            else:
                return False
        # getting the list of amenities related to specific property
        ame_list = list(filter(ame_filter, result.keys()))
        
        match = 0

        # calculating match to rank the recommendations
        for ame in ame_list:
            if ame in amenities:
                match = match + 1
        
        if result['price'] >= lower and result['price'] <= upper:
            match = match + 1

        result['match'] = match

    final_results = sorted(final_results, key = lambda i:i['match'], reverse = True)
        
    return json.dumps(final_results)

def getOrderId(booking_info):
    booking_data = {
        "amount":int(booking_info['price']) * int(booking_info['days']) * 100,
        "currency":"INR",
        "receipt": uuid.uuid1().hex,
        "payment_capture":"1"
    }
    
    
    client = razorpay.Client(auth=("rzp_test_lskMJcJY6Yjp9c", "mhBmpOTiVYb0oyARYw36nF86"))

    response = client.order.create(data=booking_data)

    return json.dumps(response)

def getPaymentValidation(booking_info):
    secret = "mhBmpOTiVYb0oyARYw36nF86"
    print("********/", booking_info)

    booking_cost = int(booking_info['price']) * int(booking_info['days'])
    name = booking_info['firstname'] + " " + booking_info['lastname']

    key = bytes(secret, 'utf-8')
    msg = bytes(booking_info['razorpay_order_id'] + "|" + booking_info['razorpay_payment_id'], 'utf-8')
    dig = hmac.new(key=key,msg=msg,digestmod=hashlib.sha256)
    generated_signature = dig.hexdigest()

    if generated_signature == booking_info['razorpay_signature']:
        start = datetime.strptime(booking_info['start_date'], '%Y-%m-%d')
        end = datetime.strptime(booking_info['end_date'], '%Y-%m-%d')
        
        while start <= end:
            booking = BookingSlots(date=start, property_id=booking_info['property_id'], room_type=booking_info['room_type'])
            db.session.add(booking)
            db.session.commit()
            start = start + timedelta(1)

        store_confirmation = Bookings(name=name, email = booking_info['email'], phone = booking_info['mobile'], order_id = booking_info['razorpay_order_id'], booking_cost = booking_cost, property_id = booking_info['property_id'], payment_id=booking_info['razorpay_payment_id'])

        db.session.add(store_confirmation)
        db.session.commit()  
        

        return json.dumps({
            "status":"success",
            "message":"payment successfull",
            "bookingInfo":booking_info
        })
    else:
        return json.dumps({
            "status":"failure",
            "message":"payment unsuccessfull"
        })
    
        
def sendUserOtp(data):
    # Your Account SID from twilio.com/console
    account_sid = "AC1cf44ddfc739394e43fc9cb3b2c93224"
    # Your Auth Token from twilio.com/console
    auth_token  = os.getenv("TWILIO_TOKEN")

    client = Client(account_sid, auth_token)
    totp = pyotp.TOTP('base32secret3232')
    otp = totp.now()

    phone = "+91"+data['phone']
    message = client.messages.create(
        to=phone, 
        from_="+17153095409",
        body="please verify your otp from 9flats " + otp)

    phone = "+91"+data['phone']
    print("phone**********", phone)
    user_otp = Otp(phone=phone, otp=int(otp))
    db.session.add(user_otp)
    db.session.commit()
    print(message.sid)

    return json.dumps({"message":"otp sent successfully"})


def verifiyUserOtp(data):
    phone = "+91"+data['phone']
    verify_otp = Otp.query.filter(Otp.phone == phone).first()

    if int(verify_otp.otp) == int(data['user_input']):
        query1 = '''DELETE FROM otp WHERE phone=%s;'''%(phone)
        db.session.execute(query1)
        db.session.commit()
        return json.dumps({
            "error":False,
            "number":"mobile number verified"
        })
    else:
        return json.dumps({
            "error":True,
            "message":"invalid otp"
        })

def onCloseOtp(data):
    query1 = '''DELETE FROM otp WHERE phone=%s;'''%(data['phone'])
    db.session.execute(query1)
    db.session.commit()

    return json.dumps({"message":"otp cleared"})

def sendMailUser(booking_info):
    data = booking_info['bookingInfo']
    name = data['firstname'] + " " + data['lastname']
    SENDER = "contact@sandeepbabu.tech"
    RECIPIENT = "sandeep.bsn@gmail.com"
    AWS_REGION = "ap-south-1"
    SUBJECT = "Booking Confirmation from 9flats"
    BODY_TEXT = ("Hello email testing friday")
    CHARSET = "UTF-8"
    client = boto3.client('ses',region_name=AWS_REGION)
    BODY_HTML = """<html>
    <head>
        
    </head>
    <body>
        <div style="display:flex;">
            <div style="margin:auto; text-align:center">
                <h1 style="color:green;">Booking confirmation from</h1>
            </div>
        </div>
        <div style="margin:auto;">
            <table style="width:450px;font-size:24px; margin: auto;">
                <tr style="height:70px;">
                    <td style="width:100px;">
                        Name
                    </td>
                    <td style="width:100px;">
                        %s
                    </td>
                </tr>
                <tr style="height:70px;">
                    <td style="width:100px;">
                        Email
                    </td>
                    <td style="width:100px;">
                        %s
                    </td>
                </tr>
                <tr style="height:70px;">
                    <td style="width:100px;">
                        Order ID
                    </td>
                    <td style="width:100px;">
                        %s
                    </td>
                </tr>
                <tr style="height:70px;">
                    <td style="width:100px;">
                        Payment Id
                    </td>
                    <td style="width:100px;">
                        %s
                    </td>
                </tr>
                <tr style="height:70px;">
                    <td style="width:100px;">
                        Check -in & check out
                    </td>
                    <td style="width:100px;">
                        %s - %s
                    </td>
                </tr>
            </table>
        </div>
        <div style="text-align: center;">
            <h2>Thank you for booking with us! Do visit us more to see accommodations that suits your need</h2>
        </div>
    </body>
</html>
        """%(name,data['email'], data['razorpay_order_id'], data['razorpay_payment_id'], data['start_date'], data['end_date'] )
    try:
        #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
            # If you are not using a configuration set, comment or delete the
            # following line
            # ConfigurationSetName=CONFIGURATION_SET,
        )
        return json.dumps({"message":"email delivered successfully"})
    # Display an error if something goes wrong.	
    except ClientError as e:
        print(e.response['Error']['Message'])
        return e.response['Error']['Message']
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId']) 
        return response['MessageId'] 

    return json.dumps({"message":"email delivered successfully"})







    

    
