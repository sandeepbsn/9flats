from .. import db
from sqlalchemy.sql import func
import datetime

class Property(db.Model):
    __tablename__ = 'properties'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable = False)
    city = db.Column(db.String(50), nullable = False)
    state = db.Column(db.String(50), nullable = False)
    country = db.Column(db.String(50), nullable = False)
    created_at = db.Column(db.DateTime(timezone=True),nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),nullable=False,onupdate=func.now())
    type=db.Column(db.String(50), nullable = False)
    price=db.Column(db.Integer, nullable = False)