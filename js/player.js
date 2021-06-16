class Player{
constructor(){
this.name = null;
this.distance = 0;
this.index = null;
this.rank = 0;
}

getCount(){
  var playerCountReff = database.ref("playerCount");
  playerCountReff.on("value",function(data){
      playerCount = data.val();
  });

}

updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}

update(){
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance,
    rank:this.rank
})
}

getFinishedPlayers(){
    var finishedPlayersReff = database.ref("finishedPlayers");
    finishedPlayersReff.on("value",(data)=>{
        finishedPlayers = data.val();
    });
    console.log(finishedPlayers);
}

static updateFinishedPlayers(){
    database.ref("/").update({
        finishedPlayers:finishedPlayers + 1
    })
    this.rank = this.rank + 1;
}

static getPlayerInfo(){
    var playerInfoReff = database.ref("players");
playerInfoReff.on("value",(data) =>{
    allPlayers = data.val()
});
//console.log(allPlayers);
}
}