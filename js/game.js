class Game{
    constructor(){

    }
    getState(){
        var gameStateReff = database.ref("gameState");
        gameStateReff.on("value",function(data){
         gameState = data.val();
        // console.log(gameState);
        })
    }

update(state){
    database.ref("/").update({
        gameState:state
    })
}

async start(){
    if(gameState === 0){
        player = new Player();
        var playerCountReff = await database.ref("playerCount").once("value");
        if(playerCountReff.exists()){
playerCount = playerCountReff.val();
player.getCount();
        }
        form = new Form();
        form.display();
}

car1 = createSprite(100,200);
car1.addImage(car1Img);
car2 = createSprite(300,200);
car2.addImage(car2Img);
car3 = createSprite(500,200);
car3.addImage(car3Img);
car4 = createSprite(700,200);
car4.addImage(car4Img);
cars = [car1,car2,car3,car4];

}

play(){
    form.hide();
Player.getPlayerInfo();
player.getFinishedPlayers();
if(allPlayers !== undefined){
    background(rgb(198,135,103));
    image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
var index = 0;
var x = 175;
var y;
    for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index === player.index){
            stroke(10);
            fill("white");
            ellipse(x,y,60,60)
            cars[index-1].shapeColor = "red";
camera.position.x = displayWidth/2;
camera.position.y = cars[index-1].y;
        }
        textSize(15);
        text(allPlayers[plr].name,cars[index - 1].x,cars[index - 1].y + 75);
    }
}

if(keyDown(UP_ARROW)&& player.index !== null && passedFinish === false){
    player.distance = player.distance + 50;
    player.update()
}

if(player.distance>3860 && passedFinish === false){
    console.log("distance");
    Player.updateFinishedPlayers();
    player.rank = finishedPlayers; 
    player.update();
    passedFinish = true;
}

drawSprites();

}

displayRanks(){
    console.log("gameEnded");
}
}