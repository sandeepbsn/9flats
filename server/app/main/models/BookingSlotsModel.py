from .. import db

class BookingSlots(db.Model):
    __tablename__ = 'booking_slots'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable = False)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    room_type = db.Column(db.String(50), nullable=False)

