const wrapper = document.querySelector(".contenedor-qr"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
descarga = document.querySelector("#descarga"),
img = document.querySelector("img");
let preValue;

generateBtn.addEventListener("click", () => {

    let qrInput = "animal: " + `${document.getElementById("animal").value}`+ " " + " pet's name: " + `${document.getElementById("nombre").value}` + " " + " owner's name: " + `${document.getElementById("dueño").value}` + " " +" phone: " + `${document.getElementById("telefono").value}`;

    let qrValue = qrInput;
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generando Codigo QR";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});



descarga.addEventListener("click", ()=>{

    let imgPath = img.getAttribute("src");
    let nombreArchivo = getFileName(imgPath);
    saveAs(imgPath, nombreArchivo);
})

function getFileName(str){
    return str.substr(str.lastIndexOf('/') + 1)
}