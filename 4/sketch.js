/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var cloudsx;
var mountainsx;
var trees_x;
var canyonsx;
var collectablsx;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [100,300,500,1000];

    mountainsx= [150,450,650,1200];
    mountains_bx= [400,700,900,1550];
    
    cloudsx = [200, 400, 600, 800, 1000, 1200]
    cloudsx_b = [100,300,500,700,900,1100];
    
    canyonsx = [200, 1000, 1800]
    
    collectablsx = [150,550,1050,]
}

function draw()
{
	background(0, 51, 102); // fill the sky blue
    fill(250, 243, 212);
    ellipse(120,90,150,150)
	noStroke();
	fill(204, 163, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    push()
    translate(scrollPos,0)
    
	// Draw clouds.
   
        for (i=0; i< cloudsx.length; i++){
            fill(255);
            rect(cloudsx_b[i] - 200 ,0 , 100,30, 50)
            rect(cloudsx[i] - 200 ,100 , 100,30, 50)
            rect(cloudsx_b[i] - 200 ,200 , 100,30, 50)
        }

	// Draw mountains.
    
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

	// Draw trees.

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

	// Draw canyons
    for (i = 0; i < canyonsx.length; i++){
        fill(51, 41, 0);
        rect(canyonsx[i],floorPos_y,100,1000);
    }
    
	// Draw collectable items 
      for (i = 0; i < collectablsx.length; i++){
        fill(181, 24, 24);
        ellipse(collectablsx[i], floorPos_y, 20,20)
    }
    
    pop()

	// Draw the game character - this must be last
    strokeWeight(2);
    stroke(0,0,0);
    fill(153, 102, 0);
    rect(gameChar_x-7.5,gameChar_y-41,15,25);
    
    fill(153, 102, 0);
    rect(gameChar_x-13,gameChar_y-38,5,20);
    fill(153, 102, 0);
    rect(gameChar_x+8,gameChar_y-38,5,20);
    noStroke();
    
    fill(128, 64, 0);
    rect(gameChar_x-6.5,gameChar_y-22,12.8,5);
    
    strokeWeight(2);
    stroke(0,0,0);
    fill(153,115,0);
    rect(gameChar_x-7,gameChar_y-15,5,15);
    rect(gameChar_x+2,gameChar_y-15,5,15);
    noStroke();
    
    
    fill(100, 0, 0 );
    ellipse(gameChar_x,gameChar_y-46,20,25);
    fill(245, 203, 167);
    rect(gameChar_x-6.5,gameChar_y-51,13,10,3,3,6,6);
    fill(179, 237, 255);
    ellipse(gameChar_x-3,gameChar_y-47,5,4);
    ellipse(gameChar_x+3,gameChar_y-47,5,4);
    ellipse(gameChar_x+3,gameChar_y-47,5,4);
	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
