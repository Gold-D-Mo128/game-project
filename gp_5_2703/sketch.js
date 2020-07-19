/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isFound;

var cloudsx;
var cloudsx_b;
var mountainsx;
var mountains_bx;
var trees_x;
var collectable;
function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y +10;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    cloudsx = [200, 400, 600, 800, 1000, 1200]
    cloudsx_b = [100,300,500,700,900,1100];
    
    mountainsx= [150,450,650,1200];
    mountains_bx= [400,700,900,1550];
    
    trees_x = [100,300,500,1000];
    
    collectable = [
        {x_pos: 100, y_pos: floorPos_y - 10,size: 50,isFound:false },
        {x_pos: 500, y_pos: floorPos_y - 10,size: 50,isFound:false },
        {x_pos: 700, y_pos: floorPos_y - 10,size: 50,isFound:false }
    ]

}

function draw()
{
	background(0, 51, 102); // fill the sky blue
    fill(255,209,0,150)
    ellipse(150,100,200,200);
	noStroke();
	fill(146,112,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.
    drawClouds();
	// Draw mountains.
    drawMountains();
	// Draw trees.
    drawTrees();
	// Draw canyons.

	// Draw collectable items.
    for (i=0; i< collectable.length; i++){
        drawCollectable(collectable[i]);
  
    }
    
	// Draw game character.
	
	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}
    

	// Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y+10){
        gameChar_y +=5
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){
    console.log( keyCode);
	
    
    if (keyCode == 39){
        isRight = true;
    }
    if (keyCode == 37){
        isLeft = true;
    }
    
    if (keyCode == 32 && gameChar_y == floorPos_y +10) {
    	gameChar_y -= 100 
       
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

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
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

}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.


function drawClouds(){
    for (i=0; i< cloudsx.length; i++){
            fill(255, 200);
            rect(cloudsx_b[i] - 200 ,50 , 170,70, 50)
            rect(cloudsx[i] - 200 ,150 , 170,70, 50)
    }
}
// Function to draw mountains objects.
function drawMountains(){
     for (i=0; i< mountainsx.length; i++){

        //large mountains
        fill(196,185,145);
        triangle(mountainsx[i]-200,floorPos_y,
                 mountainsx[i], floorPos_y-300,
                 mountainsx[i]+200, floorPos_y)
        fill(255, 224, 102)
        triangle(mountainsx[i],floorPos_y,
                 mountainsx[i], floorPos_y-300,
                 mountainsx[i]-200, floorPos_y)
        //small mountains
        fill(196,185,145);
        triangle(mountains_bx[i]-100,floorPos_y,
                 mountains_bx[i], floorPos_y-150,
                 mountains_bx[i]+100, floorPos_y)
        fill(255, 224, 102)
        triangle(mountains_bx[i],floorPos_y,
                 mountains_bx[i], floorPos_y-150,
                 mountains_bx[i]-100, floorPos_y)

    }
}
// Function to draw trees objects.

function drawTrees(){
    for (i=0; i< trees_x.length; i++){
        fill(0, 103, 0)
        ellipse(trees_x[i]+10,302,20,20)
        ellipse(trees_x[i]+50,328,10,10)
        ellipse(trees_x[i]-25,360,10,10)

        rect(trees_x[i],303,20,130)
        rect(trees_x[i]+20,348,30,10)
        rect(trees_x[i]-30,388,30,10)
        rect(trees_x[i]+45,328,10,30)
        rect(trees_x[i]-30,358,10,30)
    }
}
// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{

    fill(255, 62, 0);
    ellipse(t_collectable, collectable.y_pos, 20,20)

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

}
