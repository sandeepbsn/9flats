# listing page api

from flask import request
from ..models.PropertyModel import Property
from ..models.ReviewsModel import Reviews
from .. import db
import json
import datetime
from datetime import timedelta


def getAllListings(params):
    page = params.get('page', 1)
    per_page = params.get('per_page',10)
    search_query = params.get('search_query', 'India').encode()
    category = params.get('category')
    amenities = params.get('amenities')
    price = params.get('price')
    start_date = params.get('start_date', datetime.date.today().strftime("%Y-%m-%d"))
    end_date = params.get('end_date', (datetime.date.today() + timedelta(1)).strftime("%Y-%m-%d"))
    
    print("******", search_query)
    # getting the results bases on basic search query
    if "," in search_query.decode():
        search_query = search_query.decode()
        search_query = tuple(search_query.split(","))
    else:
        search_query = None

    raw_data = db.session.execute('''SELECT pp.id, pp.name, pp.city, pp.state, pp.country,pp.type,pp.price, pp.rooms,pp.lat,pp.lng, aa.wifi,aa.ac,aa.kitchen,aa.breakfast,aa.pool,aa.heater,aa.frontdesk, pp.images FROM properties as pp JOIN amenities as aa ON pp.id = aa.property_id WHERE pp.name IN %s OR pp.city IN %s OR pp.state IN %s OR pp.country IN %s;'''%(search_query, search_query, search_query, search_query))

    # appending the results to an array
    initial_results = []
    for data in raw_data:
        query1 = ('''SELECT AVG(star_rating) as average FROM reviews WHERE property_id = %d'''%(data.id))
        avg_review = round(db.session.execute(query1).fetchone()[0],2) if db.session.execute(query1).fetchone()[0] != None else 0 
        
        query2 = ('''SELECT COUNT(*) as booked FROM booking_slots WHERE date BETWEEN CAST('%s' as date) AND CAST('%s' as date) AND property_id = %d GROUP BY date,property_id'''%(start_date, end_date, data.id))
        booked_query = db.session.execute(query2).fetchall()
        print("***///////****", booked_query)
        
        status = 'available'
        if booked_query:
            for room in booked_query:
                if int(room[0]) >= data['rooms']:
                    status = "booked"


        temp_dict = {}
        temp_dict['id'] = data['id']
        temp_dict['name'] = data['name']
        temp_dict['city'] = data['city']
        temp_dict['state'] = data['state']
        temp_dict['country'] = data['country']
        temp_dict['type'] = data['type']
        temp_dict['price'] = data['price']
        temp_dict['rooms'] = data['rooms']
        temp_dict['lat'] = data['lat']
        temp_dict['lng'] = data['lng']
        temp_dict['wifi'] = data['wifi']
        temp_dict['ac'] = data['ac']
        temp_dict['kitchen'] = data['kitchen']
        temp_dict['breakfast'] = data['breakfast']
        temp_dict['pool'] = data['pool']
        temp_dict['heater'] = data['heater']
        temp_dict['frontdesk'] = data['frontdesk']
        temp_dict['images'] = json.loads(data['images'])
        temp_dict['avg_review'] = avg_review
        temp_dict['status'] = status
        initial_results.append(temp_dict)
        

    # filtering the results based on category
    if category:
        category = tuple(category.split(",")) if "," in category else (category, "None")
        def checkCat(item):
            if item['type'] in category:
                return True
            else:
                return False
        initial_results = list(filter(checkCat, initial_results))

    # filtering the results based on amenities
    if amenities:
        amenities = tuple(amenities.split(",")) if "," in amenities else (amenities, "None")
        for amenity in amenities:
            if amenity == 'None':
                continue
            def checkAmenity(item):
                if item[amenity] == 1:
                    return True
                else:
                    return False
            initial_results = list(filter(checkAmenity, initial_results))

    # filtering the results based on price range
    if price:
        price = list(price.split(","))
        price_result  = []
        for i in range(len(price)):
            price[i]=tuple(price[i].split("-"))
            def checkPrice(item):
                if item['price'] >= int(price[i][0]) and item['price'] <= int(price[i][1]):
                    return True
                else:
                    return False

            price_result.extend(list(filter(checkPrice, initial_results)))

        initial_results.clear()
        initial_results.extend(price_result)

    # getting data required for the particular page
    if page == 'undefined' or page == '':
        page = "1"
    if per_page == 'undefined' or per_page == '':
        per_page ='10'
    
    low = (int(page) - 1) * int(per_page)
    high = int(page) * int(per_page)
    
    if len(initial_results) <= int(per_page):
        return json.dumps({
            "data":initial_results[low:],
            "totalCount":len(initial_results)
        }, default=str)
    else:
        return json.dumps({
            "data":initial_results[low:high],
            "totalCount":len(initial_results)
        }, default=str)        
        

    


