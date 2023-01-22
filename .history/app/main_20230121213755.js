const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputValue = container.querySelector("")
console.log(Btn);

Btn.addEventListener("click", ()=>{
    container.classList.add("active");
})