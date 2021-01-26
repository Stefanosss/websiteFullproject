
async function isLoggedUpload() {
  let response = await fetch(`http://localhost:8080/remix/checkLoggedInUpload`,{mode: 'cors'});
  return await response.json();
}

async function uploadFile() {
  let data = await isLoggedUpload();
  console.log(data)
  console.log("UPLOAD-FILE called!");
  var storageReference = firebase.storage().ref();
  var file = document.getElementById("customFile").files[0];

  storageReference
    .child("remixes/audio_file/" + file.name)
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
