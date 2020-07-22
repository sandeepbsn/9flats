from flask import Flask
from config import app_config
from app.main import *
from app.main.models import *
from flask_migrate import Migrate


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')

    db.init_app(app)
    migrate = Migrate(app, db)

    return app
