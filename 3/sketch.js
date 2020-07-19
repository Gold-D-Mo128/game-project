/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;

var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    collectable = {
        x_pos: 300, 
        y_pos: 419,
        size: 50,
        isFound:false
    }
     canyon = {
        x_pos: 120, 
        y_pos:floorPos_y -10,
        width: 90,
        height: 170
    }
}

function draw()
{

	///////////DRAWING CODE//////////

	background(0, 51, 102); //fill the sky blue
    fill(66,74,51)
    ellipse(550,460,700,500)
    ellipse(250,460,500,400)
    ellipse(900,600,700,800)
    ellipse(0,460,300,300)
    

    push()
	noStroke();
	fill(204, 163, 0);
	rect(0, floorPos_y -10, width, height - floorPos_y + 10); //draw some green ground
    pop()
    
    
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) <= 20){
        collectable.isFound = true;
    }
    
    
    if (collectable.isFound == false){
        ///collectable icon
        fill(170,0,0);
       ellipse(collectable.x_pos, collectable.y_pos, 15, 15)

    }
//	draw the canyon
    fill(66,74,51);
	rect(canyon.x_pos,canyon.y_pos,canyon.width,canyon.height);

	//the game character
	if(isLeft && isFalling)
	{
        strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        push()
        translate(gameChar_x+1,gameChar_y-42)
        rect(0,0,14,5);
        noStroke();
        pop()
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        push();
        translate(gameChar_x+2,gameChar_y-28);
        rect(0,0,15,5);
        pop()
        strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-5,gameChar_y-50,10,25);   
        fill(153, 102, 0);
        strokeWeight(2)
        stroke(0,0,0);
        push();
        translate(gameChar_x-14,gameChar_y-42)
        rect(0,0,14,5);
        noStroke();
        pop()
        fill(128, 64, 0);
        rect(gameChar_x-4.5,gameChar_y-31.5,9,5);
        fill(153, 102, 0);
        push();
        translate(gameChar_x-17,gameChar_y-28);
        rect(0,0,15,5);
        pop();
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-53,18,23);
        fill(245, 203, 167);
        rect(gameChar_x-9,gameChar_y-58,13,10,3,3,5,8);
        fill(179, 237, 255);
        ellipse(gameChar_x-4,gameChar_y-54,5,4);

	}
	else if(isRight && isFalling)
	{
		fill(153, 102, 0);
        strokeWeight(2)
        stroke(0,0,0);
        push();
        translate(gameChar_x-14,gameChar_y-42)
        rect(0,0,14,5);
        noStroke();
        pop()
        push();
        translate(gameChar_x-17,gameChar_y-28);
        rect(0,0,15,5);
        pop();
        strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-5,gameChar_y-50,10,25);
        push()
        translate(gameChar_x+1,gameChar_y-42)
        rect(0,0,14,5);
        noStroke();
        pop()
        fill(128, 64, 0);
        rect(gameChar_x-4.5,gameChar_y-31.5,9,5);
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        push();
        translate(gameChar_x+2,gameChar_y-28);
        rect(0,0,15,5);
        pop()
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-53,18,23);
        fill(245, 203, 167);
        rect(gameChar_x-4,gameChar_y-59,13,10,3,3,5,8);
        fill(179, 237, 255);
        ellipse(gameChar_x+4,gameChar_y-54,5,4);


	}
	else if(isLeft)
	{
        push()
        translate(gameChar_x+2,gameChar_y-45)
        rotate(70)
        rect(0,0,14,5);
        noStroke();
        pop()
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        push();
        translate(gameChar_x-2,gameChar_y-25);
        rotate(200)
        rect(0,0,5,15);
        pop()
        strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-5,gameChar_y-50,10,25);
        fill(153, 102, 0);
        strokeWeight(2)
        stroke(0,0,0);
        push();
        translate(gameChar_x-1,gameChar_y-42)
        rotate(40);
        rect(0,0,14,5);
        noStroke();
        pop()
        fill(128, 64, 0);
        rect(gameChar_x-4.5,gameChar_y-31.5,9,5);
        fill(153,115,0)
        push();
        translate(gameChar_x-2,gameChar_y-30);
        rotate(340)
        rect(0,0,5,15);
        pop();
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-53,18,23);
        fill(245, 203, 167);
        rect(gameChar_x-9,gameChar_y-59,10,10,3,3,15,4);
        fill(179, 237, 255);
        ellipse(gameChar_x-4,gameChar_y-54,5,4);

	}
	else if(isRight)
	{
		fill(153, 102, 0);
        strokeWeight(2)
        stroke(0,0,0);
        push();
        translate(gameChar_x-1,gameChar_y-42)
        rotate(40);
        rect(0,0,14,5);
        noStroke();
        pop()
        push();
        translate(gameChar_x-2,gameChar_y-30);
        rotate(340)
        rect(0,0,5,15);
        pop();
        strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-5,gameChar_y-50,10,25);
        push()
        translate(gameChar_x+2,gameChar_y-45)
        rotate(70)
        rect(0,0,14,5);
        noStroke();
        pop()
        fill(128, 64, 0);
        rect(gameChar_x-4.5,gameChar_y-31.5,9,5);
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        push();
        translate(gameChar_x-2,gameChar_y-25);
        rotate(200)
        rect(0,0,5,15);
        pop()
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-53,18,23);
        fill(245, 203, 167);
        rect(gameChar_x-2.5,gameChar_y-58,12,10,3,3,5,8);
        fill(179, 237, 255);
        ellipse(gameChar_x+4,gameChar_y-54,5,4);


	}
	else if(isFalling || isPlummeting)
	{
		strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-7.5,gameChar_y-50,15,25);
        fill(153, 102, 0);
        rect(gameChar_x-22,gameChar_y-47,14,5);
        fill(153, 102, 0);
        rect(gameChar_x+8,gameChar_y-47,14,5);
        noStroke();
        fill(128, 64, 0);
        rect(gameChar_x-6.5,gameChar_y-31,12.8,5);
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        rect(gameChar_x-7,gameChar_y-24,5,15);
        rect(gameChar_x+2,gameChar_y-24,5,15);
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-55,20,25,3,3,0,0);
        fill(245, 203, 167);
        rect(gameChar_x-6.5,gameChar_y-60,13,10,3,3,6,6);
        fill(179, 237, 255);
        ellipse(gameChar_x-3,gameChar_y-56,5,4);
        ellipse(gameChar_x+3,gameChar_y-56,5,4);

	}
	else
        //chrachter face forwards
	{
		strokeWeight(2);
        stroke(0,0,0);
        fill(153, 102, 0);
        rect(gameChar_x-7.5,gameChar_y-50,15,25);
        fill(153, 102, 0);
        rect(gameChar_x-13,gameChar_y-47,5,20);
        fill(153, 102, 0);
        rect(gameChar_x+8,gameChar_y-47,5,20);
        noStroke();
        fill(128, 64, 0);
        rect(gameChar_x-6.5,gameChar_y-31,12.8,5);
        strokeWeight(2);
        stroke(0,0,0);
        fill(153,115,0);
        rect(gameChar_x-7,gameChar_y-24,5,15);
        rect(gameChar_x+2,gameChar_y-24,5,15);
        noStroke();
        fill(100, 0, 0 );
        ellipse(gameChar_x,gameChar_y-55,20,25);
        fill(245, 203, 167);
        rect(gameChar_x-6.5,gameChar_y-60,13,10,3,3,6,6);
        fill(179, 237, 255);
        ellipse(gameChar_x-3,gameChar_y-56,5,4);
        ellipse(gameChar_x+3,gameChar_y-56,5,4);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if (isRight == true){
        gameChar_x += 5;
    }    
    

    
    if (isLeft == true){
        gameChar_x -= 5;
    }
    if (gameChar_y < floorPos_y){
        gameChar_y += 5
    }

    
    if ((gameChar_x > canyon.x_pos) && (gameChar_x < canyon.width+canyon.x_pos) && (gameChar_y >= floorPos_y)){
        isPlummeting = true
    }
    if (isPlummeting == true){
        gameChar_y += 10
    }
}



function keyPressed()
{
	//open up the console to see how these work

    if (keyCode == 39){
        isRight = true;
    }
    if (keyCode == 37){
        isLeft = true;
    }
    
    if (keyCode == 32 && gameChar_y == floorPos_y) {
    	gameChar_y -= 120 
       
    }
    
}

function keyReleased()
{   

    if(keyCode == 32){
        isPlummeting = false;
    }
    
    if (keyCode == 39){
        isRight = false
    }    
    
    if (keyCode == 37){
        isLeft = false
    }
	// if statements to control the animation of the character when
	// keys are released.


}
