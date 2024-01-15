const prompt = require('prompt-sync')({sigint: true});


/***** Raumzähler *****/
//      roomNR 

const Room1 = "Du bist in Raum 1 ";
const Room2 = "Du bist in Raum 2 ";
const Room3 = "Du bist in Raum 3 ";
const Room4 = "Du bist in Raum 4 ";
const Room5 = "Du bist in Raum 5 ";

//console.log(Room1);       //const Tester Room1



/***** Starter App  *****/                      //    Wichtig: Bedingungen funktionieren nicht




//     print = "Game Over"


if (subHp == 0) {
    output("Der Traum ist aus!")
} 
else {
    output(Room1 + ("   Deine HP betragen: ") + subHp(100, 20) + "/100      " + "Deine Mana liegt bei: " + subMana(500, 130) + "/500"); 
}


//  function getRoom() {
//  	return parseInt(prompt("Möchtest: "));
//  }

// function getNum2() {
// 	return parseInt(prompt("Zahl2?: "));
// }

// function getOp() {
// 	return prompt("OP?: ");
// }

// output(Room1 + ("   Deine HP betragen: ") + subHp(100, 20) + "/100      " + "Deine Mana liegt bei: " + subMana(500, 130) + "/500")



//output(roomNr(100,20));   //function subHp test


// function roomNr(nowRoom, choosenRoom) {
//     return nowRoom + choosenRoom;
// }






/***** HP Rechner *****/



//      trueHp
//      subtractHp
//output(subHp(100,20));    //function subHp test

function subHp(trueHp, damage) {
    return trueHp - damage;
}



/***** Mana Rechner *****/

//output(submana(500,20)); //function subHp test

function subMana(trueMana, subMana) {
    return trueMana - subMana;
}

/*****  *****/
/*****  *****/
// console.log("hi");           // Zugriffstest









// module: output | test:

 //output("hello");
 //output(2);
function output(outputData) {
	console.log(outputData);
}