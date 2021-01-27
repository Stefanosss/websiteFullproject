$(function () {
  console.log("uploaded file is loaded");
});

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

$("#uploadForm").submit(function (e) {

  console.log('form was submitted')
  e.preventDefault();
  var uid =uuidv4();

    console.log("UPLOAD-FILE called!");
    var storageReference = firebase.storage().ref();
    var file = document.getElementById("customFile").files[0];
  
    storageReference
      .child(`remixes/${uid}/`+ file.name)
      .put(file)
      .then(result => {
        console.log("Image uploaded!");
        alert("File uploaded!");
      })
      .catch(error => {
        console.log("Error ==== ", error);
        alert("Something went wrong!");
      });

      $('input[name="uid"]').val(uid);



    
});


