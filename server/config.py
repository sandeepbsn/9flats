class Config(object):
    pass

class DevelpmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_ECHO = True

class ProductionConfig(Config):
    DEBUG = False

app_config = {
    'development' : DevelpmentConfig,
    'production' : ProductionConfig
}