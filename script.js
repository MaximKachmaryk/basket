//отримання даниз з форми select та присвоєння цін 
let rezult, valueFirstItem, valueFirstItemShoes;
const valueColoredit = document.getElementById('valColor').value;
let priseShoes = 3790;
const priseRaincoatAction = 1490;
let priseRaincoat = 2090;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');
let finalPrise = document.querySelector('.total-price');

function Calculate() {
    if (!valueFirstItem || !valueFirstItemShoes) {
        finalPrise.textContent = "__";
        return;
    } else {
        finalPrise.innerHTML = (valueFirstItem * priseRaincoat) + (valueFirstItemShoes * priseShoes);
    }

}


document.getElementById("val").addEventListener('click', () => {


        valueFirstItem = document.getElementById('val').value;



        Calculate();
    })
    //замшна каритинки при виборі кольору
document.getElementById("valColor").addEventListener('click', () => {
    const valueColor = document.getElementById('valColor').value;
    console.log(valueColor);

    if (valueColor == 1) {

        PriseColor.innerHTML = priseRaincoat;
        Photo.src = '/img/png.jpg';
        priseRaincoat = 2090;
        Calculate();


    }

    if (valueColor == 2) {
        PriseColor.innerHTML = priseRaincoatAction;
        Photo.src = '/img/blue.jpg';
        priseRaincoat = 1490;
        Calculate();
    }

})

//отримання данних з select взуття
document.getElementById("shoes").addEventListener('click', () => {
    valueFirstItemShoes = document.getElementById('shoes').value;
    console.log(valueFirstItemShoes);


    Calculate();

});