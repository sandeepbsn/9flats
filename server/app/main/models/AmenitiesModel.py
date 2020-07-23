from .. import db

class Amenities(db.Model):
    __tablename__ = 'amenities'
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable = False)
    wifi = db.Column(db.Boolean, nullable = False, default = False)
    ac = db.Column(db.Boolean, nullable = False, default = False)
    kitchen = db.Column(db.Boolean, nullable = False, default = False)
    breakfast = db.Column(db.Boolean, nullable = False, default = False)
    pool = db.Column(db.Boolean, nullable = False, default = False)
    heater = db.Column(db.Boolean, nullable = False, default = False)
    frontdesk = db.Column(db.Boolean, nullable = False, default = False)