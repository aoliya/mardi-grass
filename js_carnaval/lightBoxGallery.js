$.fn.lightBox = function(){

    createLightBox();
    

    $(".light_box").on("click", function(){
        closeLightBox();
    })

    $("img").on("click", function(){
        let imgSrc = $(this).attr("src");
        showLightBox(imgSrc);
    })
}

const showLightBox = (_img)=>{
    $(".light_box .light_img").attr("src", _img);

    $(".light_box").fadeIn(700);
    $(".light_box").css("display", "flex");
}

const closeLightBox = () =>{
    $(".light_box").fadeOut(700);
  
}




const createLightBox = () =>{
$("body").prepend(`
<div class="light_box">
<div class="light_inside">
  <img class="light_img" src="" style="width:600px">
</div>
</div>
`
    

)

    let lightCss = {
        position: "fixed",
    display: "none",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: "999",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    padding: "8px"
    }
    $(".light_box").css(lightCss);

    let insideCss = {
        
        width: "60%",
        // minHeight: "200px",
        
        
       
      }
      $(".light_inside").css(insideCss);

    let imgCss = {
        width:"100%",
    
        
    }
    $(".light_img").css(imgCss);
}