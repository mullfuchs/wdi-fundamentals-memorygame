console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var selectedCardOne = cardOne;
var selectedCardTwo = cardThree;

if(selectedCardOne === selectedCardTwo){
	//alert("match");
}
else{
	//alert("try again");
}

var board = document.getElementById('game-board');


makeCards(3);

var fuck = function(){
	console.log("Fuck");
}


function makeCards(numberOfCards){
	
	for(var i = 0; i < numberOfCards; i += 1){
		console.log("made a card");
		var tempCard = document.createElement('div');
		tempCard.className = 'card';
		document.getElementById("gameboard").appendChild(tempCard);
	} 
}
