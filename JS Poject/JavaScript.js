
var bat = "Images/Bat.png";
var bones = "Images/Bones.png";
var cauldron = "Images/Cauldron.png";
var cobweb = "Images/Cobweb.png";
var cobwebgrey = "Images/Cobwebgrey.png";
var dracula = "Images/Dracula.png";
var Eye = "Images/Eye.png";
var ghost = "Images/Ghost.png";
var pumpkin = "Images/Pumpkin.png";
var skull = "Images/Skull.png";
var Kinneret = "Images/Kinneret.png";
var spider = "Images/Spider.png";
var nof = "Images/nof.png";
var noftow = "Images/noftow.png";
var nofthree = "Images/nofthree.png";




const games = [bat, bones, cauldron, cobweb, cobwebgrey, dracula, Eye, ghost, pumpkin, skull, Kinneret, spider, nofthree, noftow, nof];

const gamesLength = games.length * 2; // * 2 cards
const cardContainer = document.getElementById('cards'); // show cards in HTML 

var divs = "";
var click;
var count = 0;

for (let k = 0; k < gamesLength; k++) {

    divs += `<div onclick="clicks(${k})"><img id="${k}" src="Images/CardBack.png"/></div>`;
}

var card1;
var card2;

function clicks(id) {

    if (count % 2 == 0) {
        if (id <= games.length - 1) {
            document.getElementById(id).src = games[id];
            card1 = id;
            console.log(`card 1 =${card1}`);
        } else {
            document.getElementById(id).src = games[id - (games.length)];
            card1 = id - (games.length);
            console.log(`card 1 =${card1}`);
        }
    } else {
        if (id <= games.length - 1) {
            document.getElementById(id).src = games[id];
            card2 = id;
            console.log(`card 2 =${card2}`);
        } else {
            document.getElementById(id).src = games[id - (games.length)];
            card2 = id - (games.length);
            console.log(`card 2 =${card2}`);
        }

        if (card1 === card2) {
            console.log("Yes");
        } else {
            console.log("No");

        }
    }

    count++
}






/*function clicks(id){
    let card1;
    let card2;
   document.getElementById(id).src = games[id];
   if(count == 1){
    card1 =games[id];
    console.log(card1);
   }
   if(count === 2){
        card2 = games[id];
        console.log(card2);
       if((games[card1].length == games[card2].length) && (games[card1])){
            console.log("yes");
       }else{
        console.log("No");
       }
    count = 0;
   }
   count++
} */

cardContainer.innerHTML = divs;




const mixing = (array) => {
    for (let k = 0; k < gamesLength; k++) {
        document.getElementById(k).src = "Images/CardBack.png";
    }

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;

    }
}


winner;
function winner() {


    if ( ) {


    alert("U R Winner");

    }

    



}