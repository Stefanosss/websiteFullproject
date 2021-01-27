const { render } = require("ejs");
var firebase = require("firebase");

var express = require("express");
const remixRouter = express.Router();
global.XMLHttpRequest = require("xhr2");
require("firebase/storage");
const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
URL = require("url");

//random

//discover

//newest


remixRouter
  .route("/checkLoggedInUpload")
  .get((req, res) => {
    var userId = firebase.auth().currentUser.uid;
if(userId)
   { 
     res.send(userId);
    }
    else{
      res.send("you need to be logged in to upload")
    }
  });


  remixRouter
  .route("/getRemixById")
  .get((req, res) => {
    //get the detail information of the remix by remix id
    console.log('id here: '+  req.query.id);
    const cityRef = db.collection('remixes').doc(req.query.id);
    const doc = await cityRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      res.send(doc.data())
    }
  })

remixRouter
  .route("/checkLoggedInUpload")
  .get((req, res) => {
    var userId = firebase.auth().currentUser.uid;
if(userId)
   { 
     res.send(userId);
    }
    else{
      res.send("you need to be logged in to upload")
    }
  });

module.exports = remixRouter;
