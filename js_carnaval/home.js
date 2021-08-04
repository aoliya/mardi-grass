window.onload = () => {
  createAddEventsViews();
}

const createAddEventsViews = () =>{
    let btn = document.querySelector("#moreBtn");
    let moreArticle = document.querySelector("#more");
    btn.addEventListener("click", function(){
        if(moreArticle.className == "d-none"){
            moreArticle.className = "";
            btn.innerHTML = "READ LESS";
            
        }
        else{
            moreArticle.className = "d-none";
            btn.innerHTML = `READ MORE ` + `<i class="fas fa-angle-double-right btn-arrow"></i>`;
           
        }
       

    })
}