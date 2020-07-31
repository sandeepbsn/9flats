from flask import Flask
from config import app_config
from app.main import *
from app.main.models import *
from flask_migrate import Migrate
from .main.routes.LoginRoute import login as login_blueprint
from .main.routes.RegisterRoute import register as register_blueprint
from .main.routes.ListingRoute import listing as listing_blueprint
from .main.routes.EntityRoute import entity as entity_blueprint



def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')

    db.init_app(app)
    migrate = Migrate(app, db)
    

    app.register_blueprint(login_blueprint, url_prefix='/login')
    app.register_blueprint(register_blueprint, url_prefix='/register')
    app.register_blueprint(listing_blueprint, url_prefix='/listing')
    app.register_blueprint(entity_blueprint, url_prefix='/entity')

    return app
