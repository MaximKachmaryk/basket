//отримання даниз з форми select та присвоєння цін 


//const photo = document.querySelector('.img__raincoat').addEventListener('click', () => {
//  photo.style.backgroundImage = 'url("/img/blue.jpg")';
//});
const priseRaincoatAction = 1490;
const priseRaincoat = 2090;
const PriseColor = document.querySelector(".first_prise");

//const priseRaincoatAction = 4180;
document.getElementById("val").addEventListener('click', () => {
    // let photo = document.querySelector('.img__raincoat');

    const valueFirstItem = document.getElementById('val').value;
    console.log(valueFirstItem);
    const finalPrise = document.querySelector('.total-price');
    finalPrise.innerHTML = valueFirstItem;
    if (valueFirstItem == 1) {
        finalPrise.innerHTML = priseRaincoatAction;

    } else if (valueFirstItem == 2) {
        finalPrise.innerHTML = priseRaincoat * 2;

    } else if (valueFirstItem == 3) {
        finalPrise.innerHTML = priseRaincoat * 3;
    }
})

document.getElementById("valColor").addEventListener('click', () => {
    const valueColor = document.getElementById('valColor').value;
    console.log(valueColor);
    if (valueColor == 1) {
        PriseColor.innerHTML = 2490;
    }


    if (valueColor == 2) {
        PriseColor.innerHTML = 1490;


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
        finalPriseShoes.innerHTML = 1490 + finalPrise;

    } else if (valueFirstItemShoes == 2) {
        finalPriseShoes.innerHTML = 2090 * 2;

    } else if (valueFirstItemShoes == 3) {
        finalPriseShoes.innerHTML = 2090 * 3;

    }
})