const { render } = require("ejs");
var express = require("express");
const remixRouter = express.Router();
var firebase = require("firebase");
global.XMLHttpRequest = require("xhr2");
require("firebase/storage");
const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
URL = require("url");

//random

//discover

//newest

//upload remix

//download based on id

remixRouter
  .route("/upload")
  .get((req, res) => {
    res.render("uploadfile.html");
  })
  .post((req, res) => {

  //download sa marche
  var userId = firebase.auth().currentUser.uid;
  console.log(userId);
  const storageRef = firebase.storage().ref();
  var file =req.body.customfile;

  console.log('here is the file '+file)
  //get id from url
  //get name query with id
  
  storageRef
    .child(`remixes/audio_file/${userId}/${file}`).put(file)
    .then((snapshot) => {
      console.log('Uploaded a blob or file!' +snapshot);
    });
});

remixRouter.get("/download", (req, res) => {
  //download sa marche
  const baseUrl =
    "https://firebasestorage.googleapis.com/v0/b/fullproject-2e12b.appspot.com/o/";

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
module.exports = remixRouter;
