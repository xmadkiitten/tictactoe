var currentPlayer = 'x';
var messageDefault = "Have Fun!"

function setMarker() {
    //click buttons
    if (this.innerHTML == '') { // wenn btn geklickt ist
        this.innerText = currentPlayer;
        changePlayer();
        detectWin();
    }
}

function changePlayer() {

    if (currentPlayer == "x") {
        currentPlayer = "o";
    }
    else if (currentPlayer == "o") {
        currentPlayer = "x";
    }
}

/**bedingung if
wenn bei 0 und 1 und 2 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 3 und 4 und 5 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 6 und 7 und 8 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 0 und 3 und 6 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 1 und 4 und 7 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 2 und 5 und 8 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 0 und 4 und 8 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
wenn bei 2 und 4 und 6 jeweils ein X oder jeweils ein O gesetzt wurde, dann gewonnen
*/
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
        document.getElementById("message").innerHTML = "You Won!";
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
    for (var i = 0; i < buttons.length - 1; i++) {
        buttons[i].innerHTML = "";
    }    
    init();
}

//document.getElementsByTagName('button')
init();

function stop() {
    if (detectWin = true);
}