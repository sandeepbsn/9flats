from flask import request
from ..models.UsersModel import Users
from ..models.AuthModel import Auth
from .. import db
from instance.config import SECRET_KEY 
import jwt

def fbUserDetails(userInfo):
    
    # if user email available 
    if userInfo.get('email') != None:
        user_data = Users.query.fiter(Users.email == userInfo['email']).first()

        if user_data:
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
            response = checkOauth(userInfo)
            return response
    else:
        response = checkOauth(userInfo)
        return response

def checkOauth(userInfo):
    print("***********************", userInfo)
    oauth_data = Auth.query.filter(Auth.user_uuid == userInfo['user_uuid']).first()

    if oauth_data:
        user_data = Users.query.filter(Users.id == oauth_data.user_id).first()
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
        user = Users(name=userInfo['name'], email=userInfo.get('email', userInfo['user_uuid']), password='password')
        db.session.add(user)
        db.session.commit()

        # entering the oauth info of new user into database
        user_oauth = Users.query.filter(Users.email == userInfo.get('email',userInfo['user_uuid'])).first() 
        
        auth = Auth(user_id=user_oauth.id, provider='facebook', user_uuid=userInfo['user_uuid'])

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

    
        

