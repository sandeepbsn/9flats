from flask import Blueprint
from flask import request
from ..services.EntityService import getPropertyDetails, getAmenityDetails, getRoomDetails, fetchRecommendations, getReviewsDetails, fetchBlockedDates, getOrderId, getPaymentValidation, fetchRoomAvailability, sendUserOtp, verifiyUserOtp, sendMailUser
import json
from .. import db
from ..models.PropertyModel import Property





entity = Blueprint('entity', __name__)

@entity.route('/property/<entity_id>', methods = ['POST', 'GET'])
def getBasicDetails(entity_id):
    response = getPropertyDetails(entity_id)

    return response

@entity.route('/amenity/<entity_id>', methods = ['POST', 'GET'])
def getFacilityDetails(entity_id):
    response = getAmenityDetails(entity_id)

    return response

@entity.route('/rooms/<entity_id>', methods = ['POST', 'GET'])
def getRoomTypeDetails(entity_id):
    response = getRoomDetails(entity_id)

    return response

@entity.route('/reviews/<entity_id>', methods = ['POST', 'GET'])
def getReviews(entity_id):
    response = getReviewsDetails(entity_id)

    return response

@entity.route('/blockeddates/<entity_id>', methods = ['POST', 'GET'])
def getBlockedDates(entity_id):
    response = fetchBlockedDates(entity_id)

    return response

@entity.route('/roomavailability/<entity_id>', methods = ['GET', 'POST'])
def getRoomAvailability(entity_id):
    params = request.args
    response = fetchRoomAvailability(params,entity_id)

    return response
    


@entity.route('/recommendations/<entity_id>', methods = ['POST', 'GET'])
def getRecommendations(entity_id):
    raw_data = json.loads(getPropertyDetails(entity_id))
    
    city = raw_data['basic_details']['city']
    price = raw_data['basic_details']['price']
    raw_ame = json.loads(getAmenityDetails(entity_id))
    amenities = raw_ame['amenities']

    response = fetchRecommendations(entity_id,city,price,amenities)

    return response


@entity.route('/payment', methods = ['POST'])
def makePayment():
    data = request.get_json()

    response = getOrderId(data)

    return response

@entity.route('/paymentvalidation', methods = ['POST'])
def validatePayment():
    data = request.get_json()

    response = getPaymentValidation(data)

    return response

@entity.route('/sendotp', methods = ['GET', 'POST'])
def sendOtp():
    data = request.get_json()
    response = sendUserOtp(data)

    return response

@entity.route('/verifyotp', methods = ['GET', 'POST'])
def verifyOtp():
    data = request.get_json()
    response = verifiyUserOtp(data)

    return response

@entity.route('/mail', methods = ['POST'])
def sendMail():
    data = request.get_json()

    response = sendMailUser(data)

    return response



@entity.route('/location', methods = ['POST','GET'])
def enterLocations():
    locations = [
        {
            "lat":"12.969828",
            "lng":"77.747808"
        },
        {
            "lat":"12.976044",
            "lng":"77.605704"
        },
        {
            "lat":"12.985813",
            "lng":"77.606633" 
        },
        {
            "lat":"12.986158",
            "lng":"77.607041" 
        },
        {
            "lat":"12.988890",
            "lng":" 77.615125" 
        },
        {
            "lat":"12.996123",
            "lng":"77.614440" 
        },
        {
            "lat":"12.999081",
            "lng":"77.616768"
        },
        {
            "lat":"12.994816",
            "lng":"77.609140"
        },
        {
            "lat":"13.005275",
            "lng":"77.617072"
        },
        {
            "lat":"13.005136",
            "lng":"77.611821"
        },
        {
            "lat":"13.003373",
            "lng":"77.621360"
        },
        {
            "lat":"13.005819",
            "lng":"77.626242"
        }

    ]

    bangalore = Property.query.filter(Property.city == 'Bengaluru').all()
    index = 0
    for location in bangalore:
        if location.id == 16:continue
        one = locations[index]['lat']
        two = locations[index]['lng']
        print("************", index, location, location.id)
        query = '''UPDATE properties SET lat = '%s', lng = '%s' WHERE id = %d;'''%(one,two,location.id)
        db.session.execute(query)
        db.session.commit()
        index = index + 1

    return "done"





