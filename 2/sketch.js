/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    strokeWeight(2);
    stroke(0,0,0);
    fill(153, 102
         , 0);
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
    //////////////////////////////////////////////////
    //Jumping facing forwards
    
    
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    
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
    ///////////////////////////////////////////////////
	//Walking, turned left

    
    
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
    //left hand
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
   
    ///////////////////////////////////////////////////
	//Walking, turned right
    
    
    
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code her
    ///////////////////////////////////////////////////
    
    
    
    
    
	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    

    

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


    ////////////////////////////////////////////////////
    
    
    
    
    
	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    

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


