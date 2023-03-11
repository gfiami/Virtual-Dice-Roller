const diceContainer = document.querySelector('.dicesInputContainer');
const newDice = "Roll <input type='number' class='numberOfDice' value='1' min='1'> dice with <input type='number'class='numberOfSides' value='1' min='1'> sides <input type='button' onclick='addToCurrentDice()'class='addDice'value='+'> <br> <br>"
diceContainer.innerHTML = newDice;

let numbersToRoll = document.querySelector('.numberOfDice');
let valueToRoll;
numbersToRoll.addEventListener("input", (event)=>{
    if(numbersToRoll.value.length > 4){
        valueToRoll = numbersToRoll.value;
        numbersToRoll.value = ""
        for(i=0;i<4;i++){
            numbersToRoll.value += valueToRoll[i];
        }
        valueToRoll = numbersToRoll.value
    }
    });

let sidesOfDice = document.querySelector('.numberOfSides');
let valueSides;
sidesOfDice.addEventListener("input", (event) =>{
    if(sidesOfDice.value.length > 3){
        valueSides = sidesOfDice.value;
        sidesOfDice.value = ""
        for(i=0;i<3;i++){
            sidesOfDice.value += valueSides[i];
        }
        valueSides = sidesOfDice.value;
    }
})






function addToCurrentDice(){
    

}