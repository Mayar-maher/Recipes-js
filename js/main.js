const rowBox=document.getElementById('rowBox')
let meals=[]
let btns = document.querySelectorAll(".nav-link");

async function getMeal(id) {
  let data = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${id ? id : "pasta"}`
  );
  let res=await data.json();

  meals=res.recipes;
  display()
console.log(meals);
  
}
getMeal()

function display(){
  let blackBox=''
  for(let i=0;i<meals.length;i++){
    blackBox += ` <div class="col-md-3">
          <div class="card my-3">
            <img class="w-100" src="${meals[i].image_url}" alt="img" />
            <h3>${meals[i].publisher} </h3>
            <h6>Title: ${meals[i].title}</h6>
            <p>ID: ${meals[i].recipe_id}</p>
            <button type="button" class="btn btn-warning">Show The Recipe <i class="fa-solid fa-heart text-danger"></i></button>
          </div>
        </div>`;
  }
  rowBox.innerHTML=blackBox;
}

btns.forEach(function(btn){
btn.addEventListener('click',function(){
  getMeal(btn.innerHTML)
})
})