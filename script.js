//отримання даниз з форми select та присвоєння цін 



const priseRaincoatAction = 1490;
const priseRaincoat = 2090;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');
const Photor = document.createElement('div');


document.getElementById("val").addEventListener('click', () => {


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
        Photo.src = '/img/png.jpg';
    }


    if (valueColor == 2) {
        PriseColor.innerHTML = 1490;
        Photo.src = '/img/blue.jpg';

        /*  Photo.forEach(item => {
             item.style.backroundImage = 'url("/img/blue.jpg")';
             //item.style.backroundImage = "yellow";

         }); */

        Photo.innerHTML = '< div class = "img__raincoat" > < img src = "/img/png.jpg" > < /div>';




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
        finalPriseShoes.innerHTML = 1490;

    } else if (valueFirstItemShoes == 2) {
        finalPriseShoes.innerHTML = 2090 * 2;

    } else if (valueFirstItemShoes == 3) {
        finalPriseShoes.innerHTML = 2090 * 3;

    }
})