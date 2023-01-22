const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");


inputQr.addEventListener("keypress", ()=>{
    const inputValue = inputQr.value;
    if(inputValue.trim() != 0){
        Btn.classList.remove("disable");
    }else{
        
    }
    Btn.classList.add("disable");
})

Btn.addEventListener("click", ()=>{
    console.log(inputValue);
    container.classList.add("active");
})