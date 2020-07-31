from .. import db


class Room(db.Model):
    __tablename__ = 'rooms'
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable = False)
    room_type = db.Column(db.String(50), nullable = False)
    quantity = db.Column(db.Integer, nullable = False)
    capacity = db.Column(db.Integer, nullable = False)
    description = db.Column(db.Text, nullable = True)
    price = db.Column(db.Integer, nullable = False)
