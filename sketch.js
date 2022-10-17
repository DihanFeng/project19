var taco;
var tacoImage;

var bomb;
var bombImage;
var bombXDir = 1;
var bombYDir = 1;

var bombSpeed = 1;

var gameState = "play";

var player;

function preload(){
    tacoImage = loadImage("taco.png");
    bombImage = loadImage("bomb.png");

}

function setup(){
    createCanvas(1000,700);
    taco = createSprite(50,350,30,30);
    taco.scale = 0.3;
    taco.addImage("taco",tacoImage)
    taco.setCollider("rectangle",-15,-15,250,150);
    taco.debug = false;

    bomb = createSprite(550,350,30,30);
    bomb.scale = 0.2
    bomb.addImage("bomb",bombImage)
    bomb.setCollider("circle",-75,75,250)
    bomb.debug = false;
    
}

function draw() {
    background(0);
    drawSprites();

    if (bomb.x >= 1000) {bombXDir = -1;}
    if (bomb.x <= 0)    {bombXDir =  1;}
    if (bomb.y >=  700) {bombYDir = -1;}
    if (bomb.y <= 0)    {bombYDir =  1;}
    bomb.x = bomb.x + bombXDir*10 * bombSpeed;
    bomb.y = bomb.y + bombYDir*10 * bombSpeed;

    if(gameState === "play"){
        if(keyDown("right_arrow")){
            taco.x = taco.x + 10;
        }
        if(keyDown("left_arrow")){
            taco.x = taco.x - 10;
        }
        if(keyDown("up_arrow")){
            taco.y = taco.y -10;
        }
        if(keyDown("down_arrow")){
            taco.y = taco.y + 10;
        }
        bombSpeed = bombSpeed + 0.005;

    }

    if(gameState === "end"){
        bombSpeed = 0;
        
    }

    if(taco.isTouching(bomb)){
        gameState = "end"; 
        //if (bomb.x < 500) {bomb.x = bomb.x + 200} else {bomb.x = bomb.x - 200}; 
        //if (bomb.y < 500) {bomb.y = bomb.y + 200} else {bomb.y = bomb.y - 200}; 
        alert("you died");
    }

}