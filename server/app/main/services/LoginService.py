from flask import request
from ..models.UsersModel import Users
from ..models.AuthModel import Auth
from .. import db
from instance.config import SECRET_KEY 
import jwt
import json


def nativeUserDetails(user_info):
    user_data = Users.query.filter(Users.email == user_info['email']).first()

    if user_data:
        if user_data.password == user_info['password']:
            payload = {
                "name": user_data.name,
                "email": user_data.email
            }

            token = jwt.encode(payload, SECRET_KEY)
            
            return {
                "logged_in": True,
                "token": token.decode()
            }
        else:
            return {
                "logged_in":False,
                "message":"Incorrect password"
            }

    else:
        return {
            "logged_in": False,
            "message":"Username is invalid"
        }

def tokenValidation(token):
    decoded = jwt.decode(token, SECRET_KEY)

    return json.dumps(decoded)