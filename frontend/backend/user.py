##Connecting To Data Base
from connectdb import db
usersinfo=db.usersinfo

##importing type convertors
import json
from bson.objectid import ObjectId


##Importing Backend FrameWork Flask 
from flask import request ,Blueprint
user=Blueprint(__name__,"user")


@user.route("/<id>")
def func(id): 
    data = usersinfo.find_one({"userid":ObjectId(id)},{"_id":0,"userid":0})
    if(data==None):
        return {"response":"no data found"}
    return data
