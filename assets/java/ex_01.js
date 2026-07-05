//Exercise 01 - border
let image =document.querySelector("#img_01")

image.addEventListener("click", function(){
    if (image.classList.contains("img-border")){
    image.classList.remove("img-border"), image.src = ("./assets/images/img_01.jpg")
    }else{
        image.classList.add("img-border"), image.src = "./assets/images/img_02.jpg"
    }

})



