const { render } = require("ejs");
var firebase = require("firebase");

var express = require("express");
const remixRouter = express.Router();
global.XMLHttpRequest = require("xhr2");
require("firebase/storage");
const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
URL = require("url");
const formidable = require('formidable')

//random

//discover

//newest

//upload remix

//download based on id

remixRouter.get("/download", (req, res) => {
  //download sa marche

  const storageRef = firebase.storage().ref();

  //get id from url
  //get name query with id
  storageRef
    .child("samples/67536Y/schu_143_2.mid")
    .getDownloadURL()
    .then((url) => {
      res.redirect(url);
    })
    .catch((error) => {
      console.log(error);
    });
});

remixRouter
  .route("/upload")
  .get((req, res) => {
    var userId = firebase.auth().currentUser.uid;
if(userId)
   { 
     res.render("uploadfile.html",{id:userId});
    }
    else{
      res.render("uploadfile.html",{error:"you need to be logged in"});
    }
  })

module.exports = remixRouter;
