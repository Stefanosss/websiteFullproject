$(function () {
  console.log("uploaded file is loaded");
});

$("#uploadForm").submit(function (e) {
  e.preventDefault();

  async function formUpload() {
    var file = document.getElementById("customFile").files[0];

    let object = {
      title: $("#titleRemix").val(),
      newFile: file,
    };
    let response = await fetch(
      "https://web2-backend-chaimaeben.herokuapp.com/remix/upload",
      {
        method: "POST",
        body: object,
      }
    )
      .then((response) => response)
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return await response;
  }

  window.onload = () => {
    async function run() {
      let data = await formUpload();
      console.log(data);
    }

    run();
  };
});
