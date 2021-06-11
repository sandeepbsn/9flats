from google.oauth2 import id_token
from google.auth.transport import requests
from flask import request
from ..models.UsersModel import Users
from ..models.AuthModel import Auth
from .. import db 
from instance.config import SECRET_KEY
import jwt

# getting the user details through google login
def getUserDetails(data):
    data = request.get_json()
    CLIENT_ID = '471977914473-cn7u1rs5sopnfdh3a3u6bt17ecpp50t3.apps.googleusercontent.com'
    tokenResponse = id_token.verify_oauth2_token(data['token'], requests.Request(), CLIENT_ID)

    userDetails = {
        "name": tokenResponse['name'],
        "email": tokenResponse['email'],
        "user_uuid": tokenResponse['sub'],
        "email_verified": tokenResponse['email_verified']
    }

    response = googleUserDetails(userDetails)

    return response


def googleUserDetails(userInfo):    
    data_raw = Users.query.filter(Users.email == userInfo['email']).first()

    # checking whether the user details are already present in the database
    if data_raw:
        payload = {
            "name": data_raw.name,
            "email": data_raw.email
        }

        token = jwt.encode(payload, SECRET_KEY)
        
        return {
            "logged_in": True,
            "token": token.decode()
        }
        
    # if user details are not present in users table, checking in the oAuth table to match the providerId
    else:
        print("fail****************")
        oauth_data = Auth.query.filter(Auth.user_uuid == userInfo['user_uuid']).first()

        # authenticating user with information from oauth table
        if oauth_data:
            users_data = Users.query.filter(Users.id == oauth_data['user_id']).first()
            payload = {
            "name": users_data.name,
            "email": users_data.email
            }

            token = jwt.encode(payload, SECRET_KEY)
            
            return {
                "logged_in": True,
                "token": token.decode()
            }
        # creating a user account if the user details are not present in users and oauth table
        else:
            # entering the general info of user into database
            user = Users(name=userInfo['name'], email=userInfo['email'], password='password')
            db.session.add(user)
            db.session.commit()

            # entering the oauth info of new user into database
            user_oauth = Users.query.filter(Users.email == userInfo['email']).first() 
            
            auth = Auth(user_id=user_oauth.id, provider='google', user_uuid=userInfo['user_uuid'], email_verified=userInfo['email_verified'])

            db.session.add(auth)
            db.session.commit()

            payload = {
                "name": user_oauth.name,
                "email": user_oauth.email
            }
            token = jwt.encode(payload, SECRET_KEY)
            
            return {
                "logged_in": True,
                "token": token.decode()
            }





        
        
    
    
