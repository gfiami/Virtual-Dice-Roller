const diceContainer = document.querySelector('.dicesInputContainer');
const newDice = "Roll <input type='number' class='numberOfDice' value='1' min='1'> dice with <input type='number'class='numberOfSides' value='1' min='1'> sides <input type='button' onclick='addToCurrentDice()'class='addDice'value='Roll'> <br> <br>"
diceContainer.innerHTML = newDice;

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

let sidesOfDice = document.querySelector('.numberOfSides');
let valueSides = 1
sidesOfDice.addEventListener("input", (event) =>{
    preventCtrlKey();
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

const currentDice = document.querySelector('.currentDice');
function addToCurrentDice(){
    currentDice.innerHTML = "";
    let sum = 0;

    for(i=0;i<diceToRoll;i++){
        sum += Math.floor(Math.random() * valueSides) + 1;
    }
    currentDice.innerHTML = `Rolling ${diceToRoll} dice ${valueSides} sided... <br>`
    currentDice.innerHTML += `Total: ${sum}`

}


function checkInputType(input){
    if(isNaN(input)){
        numbersToRoll.value = ""
    }
}

