const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputValue = container.querySelector("input");


Btn.addEventListener("click", ()=>{
    container.classList.add("active");
})