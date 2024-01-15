/***** Raumzähler *****/
//      roomNR 


/***** HP Rechner *****/
//      trueHp
//      
/***** Mana Rechner *****/
/*****  *****/
/*****  *****/



const prompt = require('prompt-sync')({sigint: true});

let starthP = parseFloat(100);
let raumNR = parseFloat(1);

if (raumNR = 1) {
    let firstName = prompt("Vorname?: ");
let familyName = prompt("Name?: ");


console.log("Hallo, " + firstName + " " + familyName +"!" + "dein Abenteuer beginnt hier." + "deine Lebensenergie liegt bei: " + starthP + " Du befindest dich in Raum " + raumNR
+ "gehst du nach rechts (2) oder links (3)?");

raumNR =  parseFloat(prompt("Raum?: "));
}


if (raumNR <= 2) {
   
    hp = 20;

    starthp = -hp
    console.log("raum 2!" + "deine Lebensenergie liegt bei: " + starthP );

    }



if (raumNR >= 3) {
    
    hp = 10

    starthp = -hp
    console.log("raum 3!" + "deine Lebensenergie liegt bei: " + starthP );
    
}
