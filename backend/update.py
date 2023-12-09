##Connecting To Data Base
from connectdb import db
usersinfo=db.usersinfo

##importing type convertors
import json
from bson.objectid import ObjectId

##Importing Backend FrameWork Flask 
from flask import request ,Blueprint
update=Blueprint(__name__,"update")


@update.route("/<id>")
def func(id): 
    data = request.headers["data"]
    usersinfo.update_one({"userid":ObjectId(id)},{"$set": json.loads(data)})
    return {"response":"successfull"}