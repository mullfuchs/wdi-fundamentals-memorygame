console.log("JS file is connected to HTML! Woo!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
var cardObjects = [];

var board = document.getElementById('gameboard');

//createBoard(board);

function isMatch(selectedCards){
	if(selectedCards[0] == selectedCards[1]){
		alert("match");
	}
	else{
		alert("not A match");
	}
}

function createBoard(boardObj){
	console.log("length " + cards.length);
	for(var i = 0; i < cards.length; i += 1){
		var tempCard = document.createElement('div');
		tempCard.className = 'card';
		tempCard.setAttribute('data-card', cards[i]);
		boardObj.appendChild(tempCard);
		tempCard.addEventListener('click', isTwoCards);
	} 
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	cardObjects.push(this);
	
	if(this.getAttribute('data-card') == "king"){
		this.innerHTML = '<img src ="king_of_hearts2.png">';
	}
	else{
		this.innerHTML = '<img src ="queen_of_diamonds2.png">';
	}
	
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardObjects[0].innerHTML = "";
		cardObjects[1].innerHTML = "";
		cardsInPlay = [];
		cardObjects = [];
	}
	
	
}


createBoard(board);
