/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/


function setup()
{
	createCanvas(1024, 576);
    frameRate(50);
    rectMode(CENTER);
}

function draw()
{
	background(0, 51, 102); //fill the sky blue

    fill(66,74,51)
    ellipse(550,460,700,500)
    ellipse(250,460,500,400)
    ellipse(900,600,700,800)
    ellipse(0,460,300,300)
   
	noStroke();
	fill(204, 163, 0);
	rect(0, 460, 1024, 144); //draw some green ground
    
    
    ellipse(180,90,150,150)
    
   

	//1. a cloud in the sky
    fill(250,250,250);
	ellipse(178,125,230,37);
    ellipse(265,100,80,70);
    ellipse(220,100,65,55)
    ellipse(180,110,50,45)
    ellipse(140,110.45,45)
   
    
    
    
    

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
    //m1-1
	fill(196,185,145);
    triangle(545,250,420,460,660,460);
    //m1-2
    fill(255, 224, 102);
    triangle(545,250,545,460,670,460);
    
    //m2-1
    fill(196,185,145);
    triangle(445,350,365,460,510,460);
    //m2-2
    fill(255, 224, 102);
    triangle(445,350,445,460,520,460);
    
    //m3-1
    fill(196,185,145);
    triangle(645,400,585,460,690,460);
    //m3-2
    fill(255, 224, 102);
    triangle(645,400,645,460,700,460);
    

	noStroke();
	fill(255);
	text("mountain", 500, 256);
    

	//3. a tree
    fill(0, 103, 0)
    ellipse(870,350,20,20)
    ellipse(835,400,10,10)
    ellipse(905,360,10,10)
    rect(860,350,20,130)
    rect(830,430,30,10)
    rect(880,390,30,10)
    rect(900,360,10,30)
    rect(830,400,10,30)
	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
     fill(66,74,51);
	rect(70,460,150,150);
    fill(51, 41, 0);
    rect(70,530,150,150);
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
    
    strokeWeight(4);
    
    fill(140,0,0);
    triangle(355,460,340,440,370,440);
    
    
    fill(170,0,0);
    triangle(355,460,363,440,347,440)
    
    
    fill(190,0,0);
    quad(340,440,370,440,364,433,345,433)
    
    
    

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
