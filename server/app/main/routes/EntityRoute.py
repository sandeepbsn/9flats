from flask import Blueprint
from flask import request
from ..services.EntityService import getPropertyDetails, getAmenityDetails, getRoomDetails, fetchRecommendations, getReviewsDetails, fetchBlockedDates, getOrderId, getPaymentValidation, fetchRoomAvailability, sendUserOtp, verifiyUserOtp
import json

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





