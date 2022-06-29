//отримання даниз з форми select та присвоєння цін 

const valueColoredit = document.getElementById('valColor').value;
const priseShoes = 3790;
const priseRaincoatAction = 1490;
const priseRaincoat = 2090;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');

let finalPrise = document.querySelector('.total-price');

document.getElementById("val").addEventListener('click', () => {


        let valueFirstItem = document.getElementById('val').value;

        let finalPrise = document.querySelector('.total-price');
        finalPrise.innerHTML = valueFirstItem;

        function calcPrs() {
            const valueFirstItemShoes = document.getElementById('shoes').value;
            valueFirstItem *= priseRaincoat;
            valueFirstItemShoes * priseShoes;
            return finalPrise.innerHTML = valueFirstItem + valueFirstItemShoes;
        }
        calcPrs();

    })
    //замшна каритинки при виборі кольору
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
document.getElementById("shoes").addEventListener('click', () => {
    let valueFirstItemShoes = document.getElementById('shoes').value;
    console.log(valueFirstItemShoes);

    function getPriseShoew() {
        let valueFirstItem = document.getElementById('val').value;
        valueFirstItem *= priseRaincoat;

        return finalPrise.innerHTML = valueFirstItemShoes * priseShoes + valueFirstItem;

    };
    getPriseShoew();

});
/* function calculate(valueFirstItemShoes){

} */