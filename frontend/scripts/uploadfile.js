
async function uploadFile() {

  console.log("UPLOAD-FILE called!");
  var storageReference = firebase.storage().ref();
  var file = document.getElementById("customFile").files[0];

  storageReference
    .child("remixes/" + file.name)
    .put(file)
    .then(result => {
      console.log("Image uploaded!");
      alert("File uploaded!");
    })
    .catch(error => {
      console.log("Error ==== ", error);
      alert("Something went wrong!");
    });
}

