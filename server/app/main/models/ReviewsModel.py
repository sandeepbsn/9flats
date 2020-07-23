from .. import db
import datetime

class Reviews(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable = False)
    review = db.Column(db.Text, nullable = False)
    star_rating = db.Column(db.Integer, nullable = False)
    reviewed_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, default=datetime.datetime.now())
   
  