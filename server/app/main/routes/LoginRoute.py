from flask import Blueprint
from flask import request
from ..services.GoogleLoginService import getUserDetails, googleUserDetails
from ..services.FacebookLoginService import *
from ..services.LoginService import *
import json


login = Blueprint('login', __name__)

@login.route('/native', methods = ['POST', 'GET'])
def nativeLogin():
    data = request.get_json()

    response = nativeUserDetails(data)

    return response

@login.route('/google', methods = ['POST', 'GET'])
def googleLogin():
    data = request.get_json()

    response = getUserDetails(data)

    return response

@login.route('/facebook', methods = ['POST', 'GET'])
def fbLogin():
    data = request.get_json()

    response = fbUserDetails(data)

    return response

@login.route('/validation', methods = ['POST', 'GET'])
def validateToken():
    data = request.get_json()

    response = tokenValidation(data['token'])

    return response
    