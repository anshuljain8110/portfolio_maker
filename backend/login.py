##Connecting To Data Base
from connectdb import db
users=db.users


##Importing Backend FrameWork Flask 
from flask import Blueprint
login=Blueprint(__name__,"login")
from flask import request

@login.route("/")
def func():
    userid = request.headers['userid']
    password = request.headers['password']
    user = users.find_one({"userid":userid,"password":password},{"_id":1})
    if (user==None):
        return {"response":"no user found"}
    print(user["_id"])
    return {"response":str(user["_id"])}