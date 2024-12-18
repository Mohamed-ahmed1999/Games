export class Ui {
    displayDataGame(data) {
       let boxesGames = ``;
       for (let i = 0; i < data.length; i++) {
         
          boxesGames += `    
          <div class="col">
          <div data-id="${data[i].id}"  class="card h-100  bg-transparent" role="button" ">
             <div  class="card-body">
                <div class="position-relative">
                   <img class="card-img-top  h-100 object-fit-cover" src="${data[i].thumbnail}" />
                
                </div>
    
                <div>   
    
                   <div class=" d-flex pt-3 justify-content-between">
                      <h3 class=" text1">${data[i].title}</h3>
                      <div class="badge badge-secondary text-bg-primary p-2">Free</div>
                   </div>
    
                   <p class=" text-center text-5">
                      ${data[i].short_description.split(" ", 8)}
                   </p>
    
                </div>
             </div>
    
             <footer class="card-footer fs-6 d-flex justify-content-between">
    
                <div class="badge text-2 ">${data[i].genre}</div>
                <div class="badge text-2">${data[i].platform}</div>
    
             </footer>
          </div>
       </div>
          `;
       }
 
       document.getElementById("datagames").innerHTML = boxesGames;
    }
 
    detailsGames(data) {
       const content = `
       <div class="col-md-4 ">
       <img src="${data.thumbnail}" class="w-100" alt="image data1" />
    </div>
    <div class="col-md-8 ">
    
       <h3>Title: ${data.title}</h3>
       <div class="d-flex">
       <p >Category: <div class="badge text-bg-info h-25  "> ${data.genre}</div> </p> </div>
              <div class="d-flex">

       <p>Platform: <div class="badge text-bg-info h-25"> ${data.platform}</div> </p></div>
              <div class="d-flex">

       <p>Status: <div class="badge text-bg-info h-25"> ${data.status}</div> </p> </div>
       <p class="small">${data.description}</p>
       <a class="btn btn-outline-warning"  href="${data.game_url}">Show Game</a>
    </div>
       
       `;
 
       document.getElementById("searchGames").innerHTML = content;
    }
 }
 
