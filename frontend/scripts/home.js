async function getAllFunc() {
    let response = await fetch(
      "https://fullproject-backend.herokuapp.com/remix/getAll",
      { mode: "cors" }
    );
    return await response.json();
  }
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