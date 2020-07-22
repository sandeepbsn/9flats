from app import create_app
from flask_cors import CORS 

config_name = 'development'

app = create_app(config_name)
CORS(app)

@app.route('/', methods = ['POST', 'GET'])
def home():
    return "Welcome home"


if __name__=='main':
    app.run()





