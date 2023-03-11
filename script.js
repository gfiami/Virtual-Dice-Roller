let numbersToRoll = document.querySelector('.numberOfDice');
let diceToRoll = 1
numbersToRoll.addEventListener("input", (event)=>{
    checkInputType(event.data);
    diceToRoll = numbersToRoll.value
    if(numbersToRoll.value.length > 4){
        numbersToRoll.value = ""
        for(i=0;i<4;i++){
            numbersToRoll.value += diceToRoll[i];
        }
        diceToRoll = numbersToRoll.value
    }
    });
numbersToRoll.addEventListener("keydown", (event)=>{
    //PREVENT CONTRL C CONTROL V
    if(event.key == 'Control' || event.key == 'C' || event.key == 'c' || event.key == 'V' || event.key == 'v'){
        setTimeout(() => {
        numbersToRoll.value = ""

            }, 100);
    }})

let valueSides = 6;

/* USEFUL FOR CUSTOM INPUTS ONLY
let sidesOfDice = document.querySelector('.numberOfSides');
sidesOfDice.addEventListener("input", (event) =>{
    checkInputType(event.data);
    valueSides = sidesOfDice.value;
    if(sidesOfDice.value.length > 3){
        sidesOfDice.value = ""
        for(i=0;i<3;i++){
            sidesOfDice.value += valueSides[i];
        }
        valueSides = sidesOfDice.value;
    }
})
sidesOfDice.addEventListener("keydown", (event)=>{
    //PREVENT CONTRL C CONTROL V
    if(event.key == 'Control' || event.key == 'C' || event.key == 'c' || event.key == 'V' || event.key == 'v'){
        setTimeout(() => {
            sidesOfDice.value = ""

            }, 100);
    }})
*/
const currentDice = document.querySelector('.currentDice');
function addToCurrentDice(){
    currentDice.innerHTML = "";
    let sum = 0;

    for(i=0;i<diceToRoll;i++){
        sum += Math.floor(Math.random() * valueSides) + 1;
    }
    currentDice.innerHTML = `Rolling ${diceToRoll} dice ${valueSides} sided <br>`
    currentDice.innerHTML += `Total: ${sum}`

}


function checkInputType(input){
    if(isNaN(input)){
        numbersToRoll.value = ""
    }
}

let dicesSelector = document.querySelectorAll('.diceElement');


function changeDice(dice){
    dicesSelector.forEach(element => {
        element.style.border = "none"
    });
    valueSides = dice.getAttribute('value');
    dice.style.border = "1px solid gray"
    dice.style.borderRadius = "50%"
    
}