from .. import db

class Bookings(db.Model):
    __tablename__='bookings'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), nullable = False)
    phone = db.Column(db.String(20), nullable = False)
    order_id = db.Column(db.String(500), nullable = False)
    payment_id = db.Column(db.String(500))
    booking_cost = db.Column(db.Integer, nullable = False)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
