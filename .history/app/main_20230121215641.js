const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");
const qrIMG = container.querySelector(".qr__img img");


inputQr.addEventListener("keyup", ()=>{
    const inputValue = inputQr.value;
    if(inputValue.trim() != 0){
        Btn.classList.remove("disable");
    }else{
        Btn.classList.add("disable");
    }
})

Btn.addEventListener("click", ()=>{
    const inputValue = inputQr.value;
    if(!inputValue) return;
    qrIMG.src = `L https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example `
    container.classList.add("active");
})