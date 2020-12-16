var canvas
var backgroundImage
var gameState = 0
var playerCount = 0
var dataBase
var form,game,player
var allPlayers

function setup(){
    canvas = createCanvas(400,400);
    dataBase = firebase.database();
    var game = new Game()
    game.getState()
    game.start()
}

function draw(){
    if (playerCount === 4){
        game.update(1)
    }

    if(gameState === 1){
        clear()
        game.play()
    }
}