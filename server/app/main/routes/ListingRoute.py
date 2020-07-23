from flask import Blueprint
from flask import request
from ..services.ListingService import *
import json

listing = Blueprint('listing', __name__)

@listing.route('/display', methods = ['POST', 'GET'])
def getListings():
    params = request.args

    print("params are*********", params)

    response = getAllListings(params)

    return response