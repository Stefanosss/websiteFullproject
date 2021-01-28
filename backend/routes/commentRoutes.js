const { render } = require("ejs");
var firebase = require("firebase");

var express = require("express");
const commentRouter = express.Router();
global.XMLHttpRequest = require("xhr2");
require("firebase/storage");
const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
URL = require("url");




  
commentRouter.route("/getAllById").get((req, res) => {
    //get the detail information of the remix by remix id
    const ref = firebase.firestore().collection("comments").where('remixId', '==', req.query.id).get();
  
    ref
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        res.send(data);
      })
      .catch(function (error) {
        console.error("Error displaying documents: ", error);
      });
  });



  commentRouter.route("/Add").post((req, res) => {

    firebase.firestore().collection("remixes").doc().set({
      comment: req.body.comment,
     // userId: firebase.auth().currentUser.uid,
      date:new Date()
    })
    .then(function (doc) {
      console.log(doc)
      res.send(doc)
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  });
  


  module.exports = commentRouter;