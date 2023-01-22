const container = document.querySelector(".container");
const Btn = container.querySelector(".btn__submit");
const inputQr = container.querySelector("input");
const qrIMG = container.querySelector(".qr__img img");
const toast = document.querySelector("#toast");


inputQr.addEventListener("keyup", ()=>{
    const inputValue = inputQr.value;
    if(inputValue.trim() != 0){
        Btn.classList.remove("disable");
    }else{
        Btn.classList.add("disable");
        container.classList.remove("active");
    }
})
//Nếu chưa nhập value thì ko bấm được nút

Btn.addEventListener("click", ()=>{
    const inputValue = inputQr.value;
    Btn.innerText = "Generating QR Code....";
    if(!inputValue) return;
    // goi API
    qrIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`;
    qrIMG.addEventListener("load", ()=>{
        container.classList.add("active");
        Btn.innerText = "Generating QR Code";
    });
    setTimeout(()=>{
        toast.style.display = "block";
    } , 1000);
});

//Nghe sự kiện click để chuyển đổi và sử lý toast
