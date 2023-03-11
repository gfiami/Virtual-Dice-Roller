let numbersToRoll = document.querySelector('.numberOfDice');
let diceToRoll = 1
const modifierInput = document.querySelector('.numberOfModifier');
let modifierValue = 0;
numbersToRoll.addEventListener("input", (event)=>{
    console.log(event)
    if(checkInputType(event.data) == false){
        return false;
    }
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
        numbersToRoll.value = "1"
        diceToRoll = numbersToRoll.value;
            }, 100);
    }})

let valueSides = 6;
//
modifierInput.addEventListener("input", (event)=>{
    if(checkModifierType(event.data) == false){
        return false;
    }
    modifierValue = modifierInput.value
    if(modifierInput.value.length > 3){
        modifierInput.value = ""
        for(i=0;i<3;i++){
            modifierInput.value += modifierValue[i];
        }
        modifierValue = modifierInput.value
    }
    });
    modifierInput.addEventListener("keydown", (event)=>{
    //PREVENT CONTRL C CONTROL V
    if(event.key == 'Control' || event.key == 'C' || event.key == 'c' || event.key == 'V' || event.key == 'v'){
        setTimeout(() => {
            modifierInput.value = "0"
            modifierValue = modifierInput.value;
            }, 100);
    }})

//
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
        numbersToRoll.value = "1";
        diceToRoll = "1";
        return false;
    }
    return true;
}

function checkModifierType(input){
    if(isNaN(input)){
        modifierInput.value = "0";
        modifierValue = "0";
        return false;
    }
    return true;
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


function operatorMod(element, operator){
    
    switch(operator){
        case '+':
            break;
        case '-':
            break;
    }
}