const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");

console.log(Btn);

Btn.addEventListener("click", ()=>{
    container.classList.add("active");
})