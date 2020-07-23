# listing page api

from flask import request
from ..models.PropertyModel import Property
from .. import db
import json

def getAllListings(params):
    page = params.get('page', 1)
    per_page = params.get('per_page',10)
    search_query = params.get('search_query', 'India')

    category = params.get('category')
    amenities = params.get('amenities')
    price = params.get('price')
    

    # getting the results bases on basic search query
    search_query = tuple(search_query.split(",")) if "," in search_query else (search_query, 'None')

    raw_data = db.session.execute('''SELECT pp.name, pp.city, pp.state, pp.country,pp.type,pp.price, aa.wifi,aa.ac,aa.kitchen,aa.breakfast,aa.pool,aa.heater,aa.frontdesk, ii.image_url FROM properties as pp JOIN amenities as aa ON pp.id = aa.property_id JOIN images as ii ON pp.id = ii.property_id WHERE pp.name IN %s OR pp.city IN %s OR pp.state IN %s OR pp.country IN %s;'''%(search_query, search_query, search_query, search_query))

    # appending the results to an array
    initial_results = []
    for data in raw_data:
        temp_dict = {}
        temp_dict['name'] = data['name']
        temp_dict['city'] = data['city']
        temp_dict['state'] = data['state']
        temp_dict['country'] = data['country']
        temp_dict['type'] = data['type']
        temp_dict['price'] = data['price']
        temp_dict['wifi'] = data['wifi']
        temp_dict['ac'] = data['ac']
        temp_dict['kitchen'] = data['kitchen']
        temp_dict['breakfast'] = data['breakfast']
        temp_dict['pool'] = data['pool']
        temp_dict['heater'] = data['heater']
        temp_dict['frontdesk'] = data['frontdesk']
        temp_dict['image_url'] = json.loads(data['image_url'])
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
    low = (int(page) - 1) * int(per_page)
    high = int(page) * int(per_page)
    
    if len(initial_results) <= int(per_page):
        return json.dumps(initial_results[low:])
    else:
        return json.dumps(initial_results[low:high])        
        

    


