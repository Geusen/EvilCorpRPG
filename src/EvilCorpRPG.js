const prompt = require('prompt-sync')({sigint: true});

/***** Starter App  *****/                      //    Wichtig: Bedingung für start noch nicht gegeben
// if (subHp == 0) {
//     print = Game Over
// } else {
    
// }


/***** Raumzähler *****/
//      roomNR 

const Room1 = "Du bist in Raum 1";
console.log(Room1);
//output(roomNr(100,20)); //function subHp test


function roomNr(nowRoom, choosenRoom) {
    return nowRoom + choosenRoom;
}
/***** HP Rechner *****/
//      trueHp
//      subtractHp
//output(subHp(100,20)); //function subHp test

function subHp(trueHp, damage) {
    return trueHp - damage;
}



/***** Mana Rechner *****/

//output(submana(500,20)); //function subHp test

function submana(trueMana, subMana) {
    return trueMana - subMana;
}

/*****  *****/
/*****  *****/
// console.log("hi");  // Zugriffstest


/***** add *****/

/***** subtract *****/






// module: output | test:

 //output("hello");
 //output(2);
function output(outputData) {
	console.log(outputData);
}