##Connecting To Data Base
from connectdb import db
users=db.users
usersinfo=db.usersinfo

##Importing Backend FrameWork Flask 
from flask import Blueprint
register=Blueprint(__name__,"register")
from flask import request

@register.route("/")
def func():
    userid = request.headers['userid']
    password = request.headers['password']
    #check if user is already exists or not
    if(users.find_one({"userid":userid})!=None):
        return {"response":"user already exists"}
    

    #creating a new user account
    id=users.insert_one({
        "userid":userid,
        "password":password
        }).inserted_id
    

    #generating user default info in database
    usersinfo.insert_one({
        "userid":id,
        "maincolor":"#7163d9",
        "username":"",
        "namecolor":"#ffffff",
        "profession":"",
        "professioncolor":"#ffffff",
        "description":"",
        "descriptioncolor":"#ffffff",
        "cvlink":"",
        "cvcolor":"#00ff88",
        "mainimage":"https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062624/avtars/cd4ihz1spsjg2jpwejqi.png",
        "mainimagecolor":"#9f91fd",
        "contactbackgroundcolor":"#ffffff",
        "contactcolor":"#7163f9",
        "location":"",
        "email":"",
        "github":"",
        "telegram":"",
        "insta":"",
        "leetcode":"",
        "yt":"",
        "ldin":""
    })
    return {"response":str(id)}