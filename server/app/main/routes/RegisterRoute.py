from flask import Blueprint
from flask import request
from ..models.UsersModel import Users
from .. import db
import json


register = Blueprint('register', __name__)

@register.route('/native', methods = ['POST', 'GET'])
def nativeRegister():
    try:
        data = request.get_json()

        duplicate = Users.query.filter(Users.email == data['email']).first()

        if duplicate:
            return {
                "status":"failure",
                "message":"user already exists"
            }

        user = Users(name=data['name'], email=data['email'], password=data['password'])
        db.session.add(user)
        db.session.commit()

        return {
            "status":"success",
            "message":"registration successfull"
        }
    except:
        return {
            "status":"failure",
            "message":"registration unsuccessfull"
        }


