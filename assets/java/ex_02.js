// Exercise 02 - 
const sticker01 = document.querySelector("#sticker01_input");
const sticker02 = document.querySelector("#sticker02_input");
const sticker03 = document.querySelector("#sticker03_input");

const warning = document.querySelector("#warning");


sticker01.addEventListener("input", function() {
    const total = Number(sticker01.value) + Number(sticker02.value) + Number(sticker03.value);
    
    if (total > 10) {
        warning.textContent = "You can only order a maximum of 10 stickers."
    } else {
        warning.textContent = `You have ${total} Stickers.`
    }
    
})
sticker02.addEventListener("input", function() {
    const total = Number(sticker01.value) + Number(sticker02.value) + Number(sticker03.value);
    
    if (total > 10) {
        warning.textContent = "You can only order a maximum of 10 stickers."
    } else {
        warning.textContent = `You have ${total} Stickers.`
    }
    
});
sticker03.addEventListener("input", function() {
    const total = Number(sticker01.value) + Number(sticker02.value) + Number(sticker03.value);
    
    if (total > 10) {
        warning.textContent = "You can only order a maximum of 10 stickers."
    } else {
        warning.textContent = `You have ${total} Stickers.`
    }
    
});