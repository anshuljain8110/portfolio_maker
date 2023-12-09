from flask import Flask
from flask_cors import CORS
from register import register
from login import login
from user import user
from update import update
app = Flask(__name__)
CORS(app)

app.register_blueprint(register,url_prefix="/register")
app.register_blueprint(login,url_prefix="/login")
app.register_blueprint(user,url_prefix="/user")
app.register_blueprint(update,url_prefix="/update")

app.run(debug=True, port=5000)