const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");
const inputValue = inputQr.value;

if(!(inputValue.trim())){
    Btn.classList.add{}
}

Btn.addEventListener("click", ()=>{
    console.log(inputValue);
    container.classList.add("active");
})