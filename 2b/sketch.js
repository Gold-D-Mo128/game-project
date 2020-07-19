/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	
    
    canyon = {
        x_pos: 0, 
        width: 100     
    }
    
    collectable = {
        x_pos: 100, 
        y_pos: 100,
        size: 50
    }
    
    mountain = {
        x_pos:300,
        y_pos:300
    }
    
    cloud = {
        x_pos:200,
        y_pos:200
    }
    
}


 

function draw()
{
	
    /////////////////////////////////////////////
    fill(204, 163, 0);
    ellipse(cloud.x_pos-10,cloud.y_pos-40,150,150)
    fill(250,250,250);
    
    
	ellipse(cloud.x_pos,cloud.y_pos,240,40);
    ellipse(cloud.x_pos+76,cloud.y_pos-19,97,70);
    ellipse(cloud.x_pos+20,cloud.y_pos-10,65,55)
    ellipse(cloud.x_pos-15,cloud.y_pos-20,50,45)
    ellipse(cloud.x_pos-63,cloud.y_pos-18,45,45)
    
    

    
    /////////////////////////////////////////////
	noStroke();
	fill(204, 163, 0);
	rect(0, floorPos_y, height+100, width - floorPos_y); //draw some green ground
    
    
    /////////////////////////////
    //mountain1-1
	fill(196,185,145);
    triangle(mountain.x_pos+80,mountain.y_pos-70, mountain.x_pos+170,mountain.y_pos+132, mountain.x_pos-10,mountain.y_pos+132);
    
    //mountain1-2
    fill(255, 224, 102);
    triangle(mountain.x_pos+80,mountain.y_pos-70, mountain.x_pos+180,mountain.y_pos+132, mountain.x_pos+85,mountain.y_pos+132);
    
    
    //mountain2-1
    fill(196,185,145);
    triangle(mountain.x_pos+15,mountain.y_pos +25,mountain.x_pos+80,mountain.y_pos+132, mountain.x_pos-40,mountain.y_pos+132);
    
    //mountain2-2
    fill(255, 224, 102);
    triangle(mountain.x_pos+15,mountain.y_pos +25,mountain.x_pos+80,mountain.y_pos+132, mountain.x_pos+15,mountain.y_pos+132);
    
    
    
    //mountain3-1
    fill(196,185,145);
    triangle(mountain.x_pos+155,mountain.y_pos-20 ,mountain.x_pos+230,mountain.y_pos+132, mountain.x_pos+90,mountain.y_pos+132);
    
    //mountain3-2
    fill(255, 224, 102);
    triangle(mountain.x_pos+155,mountain.y_pos-20 ,mountain.x_pos+230,mountain.y_pos+132, mountain.x_pos+155,mountain.y_pos+132);
    
    
    
    
    /////////////////////////////
    //tree
    fill(0, 103, 0)
    ellipse(treePos_x-10,treePos_y+15,20,20)
    ellipse(treePos_x-45,treePos_y+30,10,10)
    ellipse(treePos_x+20,360,10,10)
    rect(treePos_x-20,treePos_y+15,20,130)
    rect(treePos_x-50,treePos_y+60,30,10)
    rect(treePos_x-5,treePos_y+100,30,10)
    rect(treePos_x+15,360,10,30)
    rect(treePos_x-50,treePos_y+30,10,30)
	
    ////////////////////////////////////
    
    
    
    //canyon
    fill(66,74,51);
	rect(canyon.x_pos+100,432,canyon.width,170);
    ////////////////////////////////////
    
    
    //collectable icon
     //small part on the top
    fill(140,0,0);
    triangle(collectable.x_pos+160,collectable.y_pos+331,    collectable.x_pos+146,collectable.y_pos+315,collectable.x_pos+175,collectable.y_pos+315);
    
    //part in the middle
    fill(170,0,0);
    triangle(collectable.x_pos+160,collectable.y_pos+331,collectable.x_pos+153,collectable.y_pos+315,collectable.x_pos+167,collectable.y_pos+315)
    
    //big part
    fill(190,0,0);
    quad(collectable.x_pos+146,collectable.y_pos+315 ,collectable.x_pos+175,collectable.y_pos+315,collectable.x_pos+170,collectable.y_pos+310,collectable.x_pos+150,collectable.y_pos+310)
    ///////////////////////////////////
    
    //front facing character 
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
    ellipse(gameChar_x+3,gameChar_y-56,5,4);
    //////////////////////////////////////////////
    
    //canyon
    fill(51, 41, 0);
    rect(canyon.x_pos+100,530,canyon.width,100);
  
    
    
    
   
    
   
    
    

}

function mousePressed()
{
    gameChar_x = mouseX
    gameChar_y = mouseY


}
