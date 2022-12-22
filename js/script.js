const widthNum = document.getElementById("width-value");
const heightNum = document.getElementById("height-value");
const result = document.getElementById("result");
const resultPhone = document.getElementById("result-phone");
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

const male = document.getElementById("male");
const female = document.getElementById("female");

const mainPhoto = document.querySelector(".main-photo");
const mainPhotoPhone = document.querySelector(".main-photo-phone");

const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const m3 = document.querySelector(".m3");
const m4 = document.querySelector(".m4");
const m5 = document.querySelector(".m5");

widthNum.addEventListener("click", () => {
    widthNum.placeholder = "65";
    heightNum.placeholder = "184";
    widthNum.style.border = "0.5px solid black";
    heightNum.style.border = "0.5px solid black";
});

heightNum.addEventListener("click", () => {
    widthNum.placeholder = "65";
    heightNum.placeholder = "184";
    widthNum.style.border = "0.5px solid black";
    heightNum.style.border = "0.5px solid black";
});

function resetInputs() {
    widthNum.value = "";
    heightNum.value = "";
    result.innerHTML = "0.00";
    resultPhone.innerHTML = "0.00";
    widthNum.style.border = "0.5px solid black";
    heightNum.style.border = "0.5px solid black";
}

function calculateFunc() {
    if (widthNum.value == "" || heightNum.value == "") {
        widthNum.style.border = "2px solid red";
        widthNum.placeholder = "Please Enter Your Weight.";
        heightNum.style.border = "2px solid red";
        heightNum.placeholder = "Please Enter Your Height.";
    } else {
        const sonuc = (parseFloat(widthNum.value) / (parseFloat(heightNum.value / 100) * parseFloat(heightNum.value / 100))).toFixed(2);
        result.innerHTML = sonuc;
        resultPhone.innerHTML = sonuc;
        if (male.checked) {
            if (sonuc < 18.50) {
                mainPhoto.src = "./images/m1.png";
                mainPhotoPhone.src = "./images/m1.png";
            } else if (sonuc >= 18.50 && sonuc <= 24.90) {
                mainPhoto.src = "./images/m2.png";
                mainPhotoPhone.src = "./images/m2.png";
            } else if (sonuc >= 25 && sonuc <= 29.90) {
                mainPhoto.src = "./images/m3.png";
                mainPhotoPhone.src = "./images/m3.png";
            } else if (sonuc >= 30 && sonuc <= 39.90) {
                mainPhoto.src = "./images/m4.png";
                mainPhotoPhone.src = "./images/m4.png";
            } else {
                mainPhoto.src = "./images/m5.png";
                mainPhotoPhone.src = "./images/m5.png";
            }
        } else {
            if (sonuc < 18.50) {
                mainPhoto.src = "./images/w1.png";
                mainPhotoPhone.src = "./images/w1.png";
            } else if (sonuc >= 18.50 && sonuc <= 24.90) {
                mainPhoto.src = "./images/w2.png";
                mainPhotoPhone.src = "./images/w2.png";
            } else if (sonuc >= 25 && sonuc <= 29.90) {
                mainPhoto.src = "./images/w3.png";
                mainPhotoPhone.src = "./images/w3.png";
            } else if (sonuc >= 30 && sonuc <= 39.90) {
                mainPhoto.src = "./images/w4.png";
                mainPhotoPhone.src = "./images/w4.png";
            } else {
                mainPhoto.src = "./images/w5.png";
                mainPhotoPhone.src = "./images/w5.png";
            }
        }
    }
}

//The calculation takes place when the user presses the enter key.
function calculateEnter(event) {
    if(event.code === "Enter") {
        if (widthNum.value == "" || heightNum.value == "") {
            widthNum.style.border = "2px solid red";
            widthNum.placeholder = "Please Enter Your Weight.";
            heightNum.style.border = "2px solid red";
            heightNum.placeholder = "Please Enter Your Height.";
        } else {
            const sonuc = (parseFloat(widthNum.value) / (parseFloat(heightNum.value / 100) * parseFloat(heightNum.value / 100))).toFixed(2);
            result.innerHTML = sonuc; 
            resultPhone.innerHTML = sonuc; 

            if (male.checked) {
                if (sonuc < 18.50) {
                    mainPhoto.src = "./images/m1.png";
                    mainPhotoPhone.src = "./images/m1.png";
                } else if (sonuc >= 18.50 && sonuc <= 24.90) {
                    mainPhoto.src = "./images/m2.png";
                    mainPhotoPhone.src = "./images/m2.png";
                } else if (sonuc >= 25 && sonuc <= 29.90) {
                    mainPhoto.src = "./images/m3.png";
                    mainPhotoPhone.src = "./images/m3.png";
                } else if (sonuc >= 30 && sonuc <= 39.90) {
                    mainPhoto.src = "./images/m4.png";
                    mainPhotoPhone.src = "./images/m4.png";
                } else {
                    mainPhoto.src = "./images/m5.png";
                    mainPhotoPhone.src = "./images/m5.png";
                }
            } else {
                if (sonuc < 18.50) {
                    mainPhoto.src = "./images/w1.png";
                    mainPhotoPhone.src = "./images/w1.png";
                } else if (sonuc >= 18.50 && sonuc <= 24.90) {
                    mainPhoto.src = "./images/w2.png";
                    mainPhotoPhone.src = "./images/w2.png";
                } else if (sonuc >= 25 && sonuc <= 29.90) {
                    mainPhoto.src = "./images/w3.png";
                    mainPhotoPhone.src = "./images/w3.png";
                } else if (sonuc >= 30 && sonuc <= 39.90) {
                    mainPhoto.src = "./images/w4.png";
                    mainPhotoPhone.src = "./images/w4.png";
                } else {
                    mainPhoto.src = "./images/w5.png";
                    mainPhotoPhone.src = "./images/w5.png";
                }
            }
        }
    }
}

male.addEventListener("change", () => {
    m1.src = "./images/m1.png";
    m2.src = "./images/m2.png";
    m3.src = "./images/m3.png";
    m4.src = "./images/m4.png";
    m5.src = "./images/m5.png";
    mainPhoto.src = "./images/m1.png";
    mainPhotoPhone.src = "./images/m1.png";
    widthNum.placeholder = "65";
    heightNum.placeholder = "184";
    result.innerHTML = "0.00";
    resultPhone.innerHTML = "0.00";
    resetInputs();
});

female.addEventListener("change", () => {
    m1.src = "./images/w1.png";
    m2.src = "./images/w2.png";
    m3.src = "./images/w3.png";
    m4.src = "./images/w4.png";
    m5.src = "./images/w5.png";
    mainPhoto.src = "./images/w1.png";
    mainPhotoPhone.src = "./images/w1.png";
    widthNum.placeholder = "65";
    heightNum.placeholder = "184";
    result.innerHTML = "0.00";
    resultPhone.innerHTML = "0.00";
    resetInputs();
});

reset.addEventListener("click", resetInputs);

calculate.addEventListener("click", calculateFunc);

document.addEventListener("keyup", calculateEnter);

