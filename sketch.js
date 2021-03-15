var PLAY=1;
var END=0;
var gameState=1;
var sword
var swordImage
var fruit
var fruitGroup
var enemy
var monster
var score=0

function preload(){
  swordImage=loadImage("sword.png");
 
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  
  monsterImage=loadImage("alien1.png")
  
}
function setup(){
  createCanvas(400,600)
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  
  // sword.debug=true
  sword.setCollider("rectangle",0,0,40,80)
  
  Emenyg= new Group();
  fruitg=new Group();
  
  
  
  
  
  
  
  
}
function draw(){
background("white");
 if(gameState === PLAY){if(sword.isTouching(fruitg)){
    fruitg.destroyEach();
    
    score=score+1;
  }
  fruits();
  enemy();                      
                        
 }
   else if (gameState === END) {
    
   
   
   }
  
  
  
   
  
  sword.y=World.mouseY;
  sword.x=World.mouseX;
   
  
  drawSprites();
text("Score : " + score,270,30);

}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1);
    }else if (r == 2) {
      fruit.addImage(fruit2);
    }else if (r==3){
      fruit.addImage(fruit3);
    }else {
      fruit.addImage(fruit4)
    }
    
   fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitg.add(fruit);
    }
  }

function enemy(){
  if(World.fameCount%200===0){
    monster=createSprite(200,200,20,20);
    monster.addImage(monsterImage);
    monster.y=Math.round(random(100,300));
    monster.setLifetime=50;
     monster.velocityX=-8;
    Enemyg.add(Emeny)
    
  }
  
}



