/*class Coin{
    constructor(){
        this.body = Bodies.circle(50,50)
        /*if(frameCount % 80 === 0) {
        coin = createSprite(1000,485,40,10);
        coin.X = Math.round(random(10,60));
        coin.addImage(coinImg);
        coin.scale = 0.20;
        coin.velocityX = -3;
      
        coin.lifetime = 350;
       
        coin.depth = thief.depth;
        coin.depth = thief.depth + 1;
        
        coinsGroup.add(coin);
       }*/
    }
    
    display(){

    }
}*/
class Coin{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius);
        this.image = loadImage("images/coin.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,30,30);
        pop();
      }
}