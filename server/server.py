from app import create_app
from flask_cors import CORS 
from google.oauth2 import id_token
from google.auth.transport import requests
from flask import request


app = create_app('development')
CORS(app)

@app.route('/', methods = ['POST', 'GET'])
def home():
    return "Welcome home"


if __name__=='main':
    app.run()





