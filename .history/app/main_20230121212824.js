const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");

Btn.addEventListener("click", ()=>{
    container.classList.add("active");
})