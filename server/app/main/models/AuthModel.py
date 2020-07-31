from .. import db

class Auth(db.Model):
    __tablename__ = 'oauth'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_uuid = db.Column(db.String(100), nullable = False)
    provider = db.Column(db.String(50), nullable=False)
    email_verified = db.Column(db.Boolean, nullable = False, default=False)
