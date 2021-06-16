class Form {
    constructor(){
this.title = createElement("h2");
this.input = createInput("name");
this.button = createButton("play");
this.greeting = createElement("h3");
this.reset = createButton("reset");
    }
    display(){
        this.title.html("car racer");
        this.title.position(displayWidth/2-50,0);

this.input.position(displayWidth/2-50,displayHeight/2-80);
this.button.position(displayWidth/2+20,displayHeight/2);
this.reset.position(displayWidth-100,20);

this.button.mousePressed(() => {
    this.input.hide();
    this.button.hide();
    player.name =this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount;
player.updateCount(playerCount);
player.update();
this.greeting.html("hello " + player.name);
this.greeting.position(displayWidth/2,displayHeight/4);
})

this.reset.mousePressed(() => {
player.updateCount(0);
game.update(0);
database.ref("/").update({
    players:null
})

    
})

       }

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}





}