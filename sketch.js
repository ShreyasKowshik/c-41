 var database;
 var gameState = 0;
 var playerCount;
 var game,player,form,allPlayers;
 var distance = 0;
var car1,car2,car3,car4,trackImg;
var car1Img,car2Img,car3Img,car4Img;
var cars;
var finishedPlayers = 0;
var passedFinish = false;

function preload(){
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
trackImg = loadImage("images/track.png");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth/1,displayHeight-100);
game = new Game();
game.getState();
game.start();
}

function draw(){
  
if(playerCount === 4){
  game.update(1);
}

if(gameState === 1){
  clear();
game.play();
}

if (finishedPlayers === 4){
  game.update(2);
}

if(gameState === 2 && finishedPlayers === 4){
game.displayRanks();
}

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////