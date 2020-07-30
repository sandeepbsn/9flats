from .. import db


class Otp(db.Model):
    __tablename__ = "otp"
    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(20), nullable = False)
    otp = db.Column(db.Integer, nullable=False)