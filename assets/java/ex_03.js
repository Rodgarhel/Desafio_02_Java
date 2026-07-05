// Exercise 03 - 
    //pass 01
const pass1a = "9";
const pass1b = "1";
const pass1c = "1";
    //pass 02
const pass2a = "7";
const pass2b = "1";
const pass2c = "4";

let lock1 = document.querySelector("#lock1");
let lock2 = document.querySelector("#lock2");
let lock3 = document.querySelector("#lock3");

const checkButton = document.querySelector("#check");



checkButton.addEventListener("click", function(){
    const lockText = document.querySelector("#lock-text")
    if(lock1.value == pass1a && lock2.value == pass1b && lock3.value == pass1c){
        lockText.textContent = "Password 01 correct!"
    }else if(lock1.value == pass2a && lock2.value == pass2b && lock3.value == pass2c){
        lockText.textContent = "Password 02 correct!"
    } else {lockText.textContent ="Incorrect Password!"}

})