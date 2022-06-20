//отримання даниз з форми select та присвоєння цін 
//const photo = document.querySelector('.img__raincoat');
const photo = document.querySelector('.img__raincoat').addEventListener('click', () => {
    photo.style.backgroundImage = 'url("/img/blue.jpg")';
});
document.getElementById("val").addEventListener('click', () => {
    // let photo = document.querySelector('.img__raincoat');

    const valueFirstItem = document.getElementById('val').value;
    console.log(valueFirstItem);
    let finalPrise = document.querySelector('.total-price');
    finalPrise.innerHTML = valueFirstItem;
    if (valueFirstItem == 1) {
        finalPrise.innerHTML = 1490;

        //photo.style.backgroundImage = 'url("img/blue.jpg")';
        //photo.setAttribute('src', './img/blue.jpg');
        /* const photo = document.querySelector('.img__raincoat').addEventListener('click', () => {
            photo.style.backgroundImage = 'url("/img/blue.jpg")';
        }); */


    } else if (valueFirstItem == 2) {
        finalPrise.innerHTML = 2090 * 2;

    } else if (valueFirstItem == 3) {
        finalPrise.innerHTML = 2090 * 3;

    }
})
document.getElementById("valColor").addEventListener('click', () => {
    const valueColor = document.getElementById('valColor').value;
    console.log(valueColor);
    let photo = document.querySelector('raincoat');


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