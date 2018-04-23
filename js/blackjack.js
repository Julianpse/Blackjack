$(document).ready(function(){

  
  /////////////////////////
  ////Global Variables////
  ///////////////////////
  var dealerHand = [];
  var playerHand = [];

  //Individual Cards
  var aD = {point: 1, suit: 'd', id: "aD"};
  var twoD = {point: 2, suit: 'd', id: "twoD"};
  var threeD = {point: 3, suit: 'd', id: "threeD"};
  var fourD = {point: 4, suit: 'd', id: "fourD"};
  var fiveD = {point: 5, suit: 'd', id: "fiveD"};
  var sixD = {point: 6, suit: 'd', id: "sixD"};
  var sevenD = {point: 7, suit: 'd', id: "sevenD"};
  var eightD = {point: 8, suit: 'd', id: "eightD"};
  var nineD = {point: 9, suit: 'd', id: "nineD"};
  var tenD = {point: 10, suit: 'd', id: "tenD"};
  var jackD = {point: 10, suit: 'd', id: "jackD"};
  var queenD = {point: 10, suit: 'd', id: "queenD"};
  var kingD = {point: 10, suit: 'd', id: "kingD"};

  var aH = {point: 1, suit: 'h', id: "aH"};
  var twoH = {point: 2, suit: 'h', id: "twoH"};
  var threeH = {point: 3, suit: 'h', id: "threeH"};
  var fourH = {point: 4, suit: 'h', id: "fourH"};
  var fiveH = {point: 5, suit: 'h', id: "fiveH"};
  var sixH = {point: 6, suit: 'h', id: "sixH"};
  var sevenH = {point: 7, suit: 'h', id: "sevenH"};
  var eightH = {point: 8, suit: 'h', id: "eightH"};
  var nineH = {point: 9, suit: 'h', id: "nineH"};
  var tenH = {point: 10, suit: 'h', id: "tenH"};
  var jackH = {point: 10, suit: 'h', id: "jackH"};
  var queenH = {point: 10, suit: 'h', id: "queenH"};
  var kingH = {point: 10, suit: 'h', id: "kingH"};

  var aS = {point: 1, suit: 's', id: "aS"};
  var twoS = {point: 2, suit: 's', id: "twoS"};
  var threeS = {point: 3, suit: 's', id: "threeS"};
  var fourS = {point: 4, suit: 's', id: "fourS"};
  var fiveS = {point: 5, suit: 's', id: "fiveC"};
  var sixS = {point: 6, suit: 's', id: "sixS"};
  var sevenS = {point: 7, suit: 's', id: "sevenS"};
  var eightS = {point: 8, suit: 's', id: "eightS"};
  var nineS = {point: 9, suit: 's', id:"nineS"};
  var tenS = {point: 10, suit: 's', id: "tenS"};
  var jackS = {point: 10, suit: 's', id: "jackS"};
  var queenS = {point: 10, suit: 's', id: "queenS"};
  var kingS = {point: 10, suit: 's', id: "kingS"};

  var aC = {point: 1, suit: 'c', id: "aC"};
  var twoC = {point: 2, suit: 'c', id: "twoC"};
  var threeC = {point: 3, suit: 'c', id: "threeC"};
  var fourC = {point: 4, suit: 'c', id: "fourC"};
  var fiveC = {point: 5, suit: 'c', id: "fiveC"};
  var sixC = {point: 6, suit: 'c', id: "sixC"};
  var sevenC = {point: 7, suit: 'c', id: "sevenC"};
  var eightC = {point: 8, suit: 'c', id: "eightC"};
  var nineC = {point: 9, suit: 'c', id: "nineC"};
  var tenC = {point: 10, suit: 'c', id: "tenC"};
  var jackC = {point: 10, suit: 'c', id: "jackC"};
  var queenC = {point: 10, suit: 'c', id: "queenC"};
  var kingC = {point: 10, suit: 'c', id: "kingC"};

  //Deck of cards
  var deck = [aD, twoD, threeD, fourD, fiveD, sixD, sevenD, eightD, nineD, tenD, jackD, queenD, kingD,
      aH, twoH, threeH, fourH, fiveH, sixH, sevenH, eightH, nineH, tenH, jackH, queenH, kingH,
      aC, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, jackC, queenC, kingC,
      aS, twoS, threeS, fourS, fiveS, sixS, sevenS, eightS, nineS, tenS, jackS, queenS, kingS];


  //Hides all buttons except deal button
  $("#hit-button").toggle();
  $("#stand-button").toggle();
  $(".buttons").css("margin-left", "315px");

  $("#deal-button").click(function(e){
    e.preventDefault();

    //Handles the visualization of cards
    $("#dealer-hand").prepend(`<img src="${dealDealer()}">`);
    $("#dealer-hand").prepend(`<img src="${dealDealer()}">`);
    $("#player-hand").prepend(`<img src="${dealPlayer()}">`);
    $("#player-hand").prepend(`<img src="${dealPlayer()}">`);

    //Shows current points from dealer and player
    $("#dealer-points").html(`Dealer: ${calculatePoints(dealerHand)}`);
    $("#player-points").html(`Player: ${calculatePoints(playerHand)}`);

    //This disables new deals and shows hit and stand button
    $("#deal-button").toggle();
    $("#hit-button").toggle();
    $("#stand-button").toggle();
    $(".buttons").css("margin-left","280px");
  });


  //This gets called everytime the hit button is clicked
  $("#hit-button").click(function(e){
    e.preventDefault();
    if (calculatePoints(playerHand) == 21){
      endgame();
    } else
    $("#player-hand").append(`<img src ="${dealPlayer()}">`);
    $("#player-points").html(`Player: ${calculatePoints(playerHand)}`);
    bust(playerHand);

  });


  //This gets called everytime the stand button is clicked
  $("#stand-button").click(function(e){
    e.preventDefault();
    var pointSum = calculatePoints(dealerHand);
    while (pointSum < 17) {
        $("#dealer-hand").prepend(`<img src="${dealDealer()}">`);
        $("#dealer-points").html(`Dealer: ${calculatePoints(dealerHand)}`);
        pointSum = calculatePoints(dealerHand);
        console.log(pointSum);
      }
        endGame();
        $(".buttons").toggle();
  });


function getRandomCardFromDeck(){
  var randomCard = deck[Math.floor(Math.random()*deck.length)];
  return randomCard;
}

function getCardImageUrl(card) {
  return `images/${card.id}.png`;
}

function dealPlayer() {
  var randomCard = getRandomCardFromDeck();
  delete deck[randomCard];
  var displayCard = getCardImageUrl(randomCard);
  playerHand.push(randomCard);
  return displayCard;
}

function dealDealer() {
  var randomCard = getRandomCardFromDeck();
  delete deck[randomCard];
  var displayCard = getCardImageUrl(randomCard);
  dealerHand.push(randomCard);

  return displayCard;
}

function calculatePoints(hand) {
  var pointSum = hand.reduce(function (sum, d){
    return sum + d.point;
  }, 0);

  return pointSum;
};


function endGame(){
var dealerPoints = calculatePoints(dealerHand);
var playerPoints = calculatePoints(playerHand);

if (playerPoints == 21){
  setTimeout(function(){
  alert("Blackjack! You win! :D Click OK to play again!");
  location.reload(true);
}, 1500);

} else if (playerPoints == dealerPoints){
  setTimeout(function(){
  alert("It's a draw. Click OK to play again!");
  location.reload(true);
}, 1500);

} else if (playerPoints > dealerPoints && playerPoints <= 21) {
  setTimeout(function(){
  alert("Congrats you win! :D Click OK to play again!");
  location.reload(true);
}, 1500);

} else if (dealerPoints > playerPoints && dealerPoints <= 21) {
  setTimeout(function(){
  alert("Sorry, you lost. :( Click OK to play again!");
  location.reload(true);
}, 1500);

} else if (playerPoints > 21) {
  setTimeout(function(){
  alert("Sorry, you busted. :( Click OK to play again!");
  location.reload(true);
}, 1500);

} else if (playerPoints <= 21 && dealerPoints > 21) {
  setTimeout(function(){
  alert("Congrats you win! :D Click OK to play again!");
  location.reload(true);
}, 1500);

}

};

function bust(hand){
if (calculatePoints(hand) > 21) {
  console.log("BUST");
  endGame();
  }
}


});
