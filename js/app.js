// Enemies our player must avoid
//here we add score varible and creat it to HTML page
var score=3;
document.getElementById('score').innerHTML=score;

const Enemy = function(x,y) {
    this.x=x;
    this.y=y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed=Math.floor(Math.random()*200)+100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
if(this.x<=505){
    this.x=this.x+this.speed*dt;
}
else{
    this.x=0;
}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player(x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/char-boy.png'
}
//this will handel the player moves
Player.prototype.update=function(dt){
    let gamer=this;// refrence to player object
    if(this.y<=0){
        win();
    }
    if(this.keyPress==='left'&&this.x >0){
        this.x-=100;
    }
    if(this.keyPress==='right'&& this.x<400){
        this.x+=100;
    }
    if(this.keyPress==='up'&&this.y>=0){
        this.y-=92;
    }
    if(this.keyPress==='down'&&this.y<350){
        this.y+=92;
     
    }
    //here if the enemy and player collide
    allEnemies.forEach(function(enemy){
        if(gamer.x+100>=enemy.x&&gamer.x<=enemy.x+60){
            if(gamer.y+60>=enemy.y&&gamer.y<=enemy.y+40){
            score-=1;
            document.getElementById('score').innerHTML=score;

            if(score===0){
                gameOver();

            }
        player.reset();

    }
    }
    });
    
    this.keyPress = null; //this will make player move just one time

//this is message for game over
function gameOver(){
    swal({
  title: "You loss",
  text: "finish all score",
  icon: "loss",
  button: "play again?",
}).then(function(){location.reload()})
}
}
//this is message for win
function win(){
    swal({
  title: "Good job!",
  text: "Press Enter to play again",
  icon: "success",
  button:"play again"
}).then(function(){location.reload()})
}
Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

//this to return the player to start point.
Player.prototype.reset=function(){
    this.x=200;
    this.y=300;
}
Player.prototype.handleInput=function(e){
    this.keyPress=e;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies=[];

allEnemies.push(new Enemy(0,60))
allEnemies.push(new Enemy(0,150))
allEnemies.push(new Enemy(0,235))

const player=new Player(200,300);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
