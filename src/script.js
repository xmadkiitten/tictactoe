var currentPlayer = 'x';
var messageDefault = "Have Fun!"
var totalShots = 0;

async function setMarker() {
    //click buttons
    if (this.innerHTML == '') { // wenn btn geklickt ist
        totalShots++;
        this.innerText = 'x';
        await changePlayer();
        await detectWin();        
    }
    //console.log("Total Shots: " + totalShots);
}

function changePlayer() {

    if (currentPlayer == "x") {
        currentPlayer = "o";
        kiShot();
    }
    else if (currentPlayer == "o") {                
        currentPlayer = "x";
    }    
}

function kiShot() {

    if (tryToShoot()) {
        currentPlayer = 'x';        
    };
    
}

function tryToShoot() {
    let fields = document.getElementsByTagName("button");
    let randomNo = getRandomInt(0,8);
    //console.log("#### TryToShoot: "+ randomNo + "#####");
    if (fields[randomNo].innerHTML == '') {
        //console.log("SET MARKER "+randomNo)
        fields[randomNo].innerHTML ='o'
        totalShots++;
        return true;
    } else {
        tryToShoot();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function detectWin() {

    var field = document.getElementsByTagName("button");

    if (threeInRow(field[0], field[1], field[2]) ||
        threeInRow(field[3], field[4], field[5]) ||
        threeInRow(field[6], field[7], field[8]) ||
        threeInRow(field[0], field[3], field[6]) ||
        threeInRow(field[1], field[4], field[7]) ||
        threeInRow(field[2], field[5], field[8]) ||
        threeInRow(field[0], field[4], field[8]) ||
        threeInRow(field[2], field[4], field[6])) {
        document.getElementById("message").innerHTML = "Player " + currentPlayer + " has won!";
        document.getElementById("message").classList = 'animate__animated animate__wobble';
        for (let i = 0; i < field.length - 1; i++) {
            field[i].removeEventListener('click', setMarker);
        }

    }
}

//function mit 3 parameter, mit field = true / false
function threeInRow(field1, field2, field3) {
    if (field1.innerHTML == field2.innerHTML && field2.innerHTML == field3.innerHTML && field1.innerHTML != '') {
        return true;
    }
    else return false; {
    }
}

function init() {

   //console.log("##### INIT ####");

    document.getElementById("message").innerHTML=messageDefault
    document.getElementById("message").classList='';
    document.getElementById("resetButton").addEventListener('click', resetAll);

    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length - 1; i++) {
       // console.log("##### Button " + i + " ######");
        let btn = buttons[i];
        //let fct = setMarker(btn);
        btn.addEventListener('click',setMarker);
    }
    // alle Buttons durchlaufen
    // Event Listener "click" setzen
    // mit dem Aufruf der Funktion setMarker
    // als Parameter sich selbst übergeben (Button)
}

function resetAll() {
    var buttons = document.getElementsByTagName('button');
    currentPlayer = "x";
    totalShots = 0;
    for (var i = 0; i < buttons.length - 1; i++) {
        buttons[i].innerHTML = "";
    }    
    init();
}

//document.getElementsByTagName('button')
init();
