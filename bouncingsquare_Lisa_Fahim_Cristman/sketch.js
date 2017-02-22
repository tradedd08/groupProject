/*Original code https://gist.github.com/rlieberman/f9a4a0f09603fe2ce136
edited by LisaL Februar 16 collectively driven by Lisa, Fahim, and Cristman. Typing by Lisa*/

//Creating variables for the location and size of the rectangle and the speed to be easily changed in the future
var x = 0;
var y = 0;
var xspeed = 10;
var yspeed = 10;
var d = 100;

//Setting up the canvas and background environment
function setup() {
  createCanvas(600, 400);
  background (150);
}

function draw() {
//The random function changes the color of the shape randomly between the set number and 0
  	fill (255, random(255), random(255));
  	rect(x, y, d, d);

//Adding a declaration to increase the horizontal location of the ellipse
 	 x = x + xspeed;
//The if statement creates the bounds for the canvas
//Once the ellipse hits the bounds, it reverses horizontal direction
  	 if (x > width || x < 0)  {
     	xspeed = -xspeed;
  	}

//Adding a declaration to increase the vertical location of the ellipse
  	y = y + yspeed;
//The if statement creates the bounds for the canvas
//Once the ellipse hits the bounds, it reverses vertical direction
  	if (y > 400 || y < 0) {
	 	  yspeed = -yspeed;
  	}

}