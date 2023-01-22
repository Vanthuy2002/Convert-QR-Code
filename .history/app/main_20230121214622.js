const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");
const inputValue = inputQr.value;

inputQr.addEventListener("keypress", ()=>{
    if(inputValue.trim() != 0){
        Btn.classList.remove("disable");
    }
    Btn.classList.add("disable");
})

Btn.addEventListener("click", ()=>{
    console.log(inputValue);
    container.classList.add("active");
})