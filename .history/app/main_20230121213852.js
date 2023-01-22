const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");


Btn.addEventListener("click", ()=>{
    const inputValue = inputQr.value;
    console.log();
    container.classList.add("active");
})