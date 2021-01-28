async function getAllFunc() {
    let response = await fetch(
      "https://fullproject-backend.herokuapp.com/remix/getAll",
      { mode: "cors" }
    );
    return await response.json();
  }

  async function getUserInfo(id) {
    let response = await fetch(
      "https://fullproject-backend.herokuapp.com/authentication/getById/"+id,
      { mode: "cors" }
    );
    return await response.json();
  }

  /*
  window.onload = () => {
  async function run() {

    const [getAll] = await Promise.all([
        getAllFunc(),
      ]);
       
      for (let i = 0; i <getAll.length; i++) {
        $(".getAll").append(`
        <div class="card">
           <a href="https://web2-frontend-chaimaeben.herokuapp.com/src/detailpage.html?id=${
             Object.values(getAll[i].id)
           }>
           
           <div class="image">
        
          <img src="${Object.values(explore[i].book[0].image_url)}"/>
          </div>
          <div class="title">
           ${Object.values(explore[i].book[0].title)}
           </div>
           
           </a>
          </div>
          `);
      }
  }

  run();
}
*/

window.onload = () => {

  
  console.log("href " + window.location.search);
  var url = window.location.search;
  url = url.replace("?id=", "");
  console.log(url);

  async function runAll(url){
  if (url) {
    const [user] = await Promise.all([
      getUserInfo(url),
 
    ]);

    $(".user-nav").append(`
    <a href="https://fullproject-frontend.herokuapp.com/views/home.html" class="user-nav__link">Home</a>
    <a href="sampleGenerator.html" class="user-nav__link">Generate sample</a>
    <div class="user-nav__user">
        <p class="user-nav__user-name">${user.firstname} ${user.lastname}</p>
        
        <img src="img/userPicture.jpg" alt="user picture" class="user-nav__user-photo">
    </div>`)
  }else{
    $(".user-nav").append(`
    <a href="https://fullproject-frontend.herokuapp.com/views/home.html" class="user-nav__link">Home</a>
    <a href="sampleGenerator.html" class="user-nav__link">Generate sample</a>
    <div class="user-nav__user">
        <a href="https://fullproject-frontend.herokuapp.com/views/login.html" class="user-nav__user-name">Login</a> <span></span>
        <a  href="https://fullproject-frontend.herokuapp.com/views/signup.html" class="user-nav__user-name">Sign up</a>

    </div>`)
  }
}
runAll();
  }