//отримання даниз з форми select та присвоєння цін 

const valueColoredit = document.getElementById('valColor').value;
const priseShoes = 3790;
const priseRaincoatAction = 1490;
const priseRaincoat = 2090;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');

const finalPrise = document.querySelector('.total-price');

document.getElementById("val").addEventListener('click', () => {


    const valueFirstItem = document.getElementById('val').value;
    console.log(valueFirstItem);
    const finalPrise = document.querySelector('.total-price');
    finalPrise.innerHTML = valueFirstItem;
    if (valueFirstItem == 1) {
        finalPrise.innerHTML = priseRaincoat;

    } else if (valueFirstItem == 2) {
        finalPrise.innerHTML = priseRaincoat * 2;

    } else if (valueFirstItem == 3) {
        finalPrise.innerHTML = priseRaincoat * 3;
    }
    /* else if (valueFirstItem === 1 || valueColoredit === 2) {
           finalPrise.innerHTML = priseRaincoatAction;
       } else if (valueFirstItem === 2 || valueColoredit === 2) {
           finalPrise.innerHTML = priseRaincoatAction * 2;
       } else if (valueFirstItem === 3 || valueColoredit === 2) {
           finalPrise.innerHTML = priseRaincoatAction * 3;
       } */
})

document.getElementById("valColor").addEventListener('click', () => {
    const valueColor = document.getElementById('valColor').value;
    console.log(valueColor);
    if (valueColor == 1) {
        PriseColor.innerHTML = priseRaincoat;
        Photo.src = '/img/png.jpg';
    }


    if (valueColor == 2) {
        PriseColor.innerHTML = priseRaincoatAction;
        Photo.src = '/img/blue.jpg';





    }



})

//отримання данних з select взуття


//
document.getElementById("shoes").addEventListener('click', () => {
    const valueFirstItemShoes = document.getElementById('shoes').value;
    console.log(valueFirstItemShoes);

    let finalPriseShoes = document.querySelector('.total-price');
    finalPriseShoes.innerHTML = valueFirstItemShoes;
    if (valueFirstItemShoes == 1) {
        finalPriseShoes.innerHTML = priseShoes;

    } else if (valueFirstItemShoes == 2) {
        finalPriseShoes.innerHTML = priseShoes * 2;

    } else if (valueFirstItemShoes == 3) {
        finalPriseShoes.innerHTML = priseShoes * 3;

    }
})
console.log("color", valueColoredit);
let sel = document.getElementById('val').dataset.prise;

function getPriseRC(valueColor) {
    if (valueColor == 1) {
        finalPrise.innerHTML = priseRaincoat;
        Photo.src = '/img/png.jpg';
    }


    if (valueColor == 2) {
        finalPrise.innerHTML = priseRaincoatAction;
        Photo.src = '/img/blue.jpg';





    }
}