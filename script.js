//отримання даниз з форми select та присвоєння цін 
let valueFirstItem, valueFirstItemShoes;
const valueColoredit = document.getElementById('valColor').value;
let priseShoes;
const box = document.querySelector('.box');

const butnRemove = document.getElementById('remove');
let priseRaincoatAction;
let priseRaincoat;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');
let finalPrise = document.querySelector('.total-price');

butnRemove.addEventListener('click', removeBox);

function Calculate() {
    if (!valueFirstItem && !valueFirstItemShoes) {

        finalPrise.textContent = "";
        return;
    } else {
        finalPrise.innerHTML = (valueFirstItem * priseRaincoat) + (priseShoes * valueFirstItemShoes);
    }

}
/* function Calculate() {
    finalPrise.innerHTML = (valueFirstItem * priseRaincoat) + (priseShoes * valueFirstItemShoes);
}; */
Calculate();


document.getElementById("val").addEventListener('click', () => {


        valueFirstItem = document.getElementById('val').value;



        Calculate();
    })
    //замшна каритинки при виборі кольору
document.getElementById("valColor").addEventListener('click', () => {
    const valueColor = document.getElementById('valColor').value;
    console.log(valueColor);

    if (valueColor == 1) {


        Photo.src = '/img/png.jpg';
        let priseRaincoatBlack = document.querySelector('.priseblack');
        //priseRaincoat.dataset.prise;

        PriseColor.innerHTML = priseRaincoat;
        priseRaincoat = priseRaincoatBlack.dataset.prise;
        console.log(priseRaincoat);
        PriseColor.textContent = priseRaincoat;

        Calculate();


    }

    if (valueColor == 2) {
        Photo.src = '/img/blue.jpg';
        let priseRaincoatBlue = document.querySelector('.priseblue');
        PriseColor.innerHTML = priseRaincoat;
        priseRaincoat = priseRaincoatBlue.dataset.prise;
        console.log(priseRaincoat);
        PriseColor.textContent = priseRaincoat;
        //priseRaincoat = 2090;
        Calculate();

    }
    /*  switch (valueColor) {
         case 1:
             PriseColor.innerHTML = priseRaincoat;
             Photo.src = '/img/png.jpg';
             priseRaincoat = 2090;
             Calculate();

             break;


         case 2:

             PriseColor.innerHTML = priseRaincoatAction;
             Photo.src = '/img/blue.jpg';
             priseRaincoat = 1490;
             Calculate();

             break;

     } */

})

//отримання данних з select взуття
document.getElementById("shoes").addEventListener('click', () => {
    valueFirstItemShoes = document.getElementById('shoes').value;
    console.log(valueFirstItemShoes);
    let priseS = document.querySelector('.prise_shoes');
    priseShoes = priseS.dataset.prise;


    Calculate();

});

function removeBox() {

    /* box.forEach(item => {
        item.remove();
    }); */
    box.innerHTML = "";




    Calculate();
};