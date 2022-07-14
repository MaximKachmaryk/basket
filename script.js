//отримання даниз з форми select та присвоєння цін 
let valueFirstItem = 1;
let valueFirstItemShoes = 1;
const valueColoredit = document.getElementById('valColor').value;
//let priseShoes;
const box = document.querySelector('.box');
const xx = 2000;
const butnRemove = document.getElementById('remove');
let priseRaincoatAction;
let priseRaincoat = document.querySelector('.priseblack').dataset.prise;
const priseShoes = document.querySelector('.prise_shoes').dataset.prise;
const PriseColor = document.querySelector(".first_prise");
const Photo = document.querySelector('.img__raincoat img');
let finalPrise = document.querySelector('.total-price');
console.log(priseRaincoat, "work");
butnRemove.addEventListener('click', removeBox);

function Calculate() {
    if (!valueFirstItem && !valueFirstItemShoes) {

        finalPrise.textContent = Number(priseRaincoat) + Number(priseShoes);
        return;
    } else {
        finalPrise.textContent = Number(valueFirstItem * priseRaincoat) + Number(valueFirstItemShoes * priseShoes);
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
        priseRaincoatBlue = document.querySelector('.priseblue').dataset.prise;
        PriseColor.innerHTML = priseRaincoatBlue;
        priseRaincoat = priseRaincoatBlue;
        console.log(priseRaincoat);
        PriseColor.textContent = priseRaincoat;
        priseRaincoat = document.querySelector('.priseblue').dataset.prise;
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
    /*  let priseS = document.querySelector('.prise_shoes');
     priseShoes = priseS.dataset.prise; */


    Calculate();

});

function removeBox() {

    /* box.forEach(item => {
        item.remove();
    }); */
    box.innerHTML = "";




    Calculate();
};