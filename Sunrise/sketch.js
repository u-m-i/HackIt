let mountain1, mountain2;
let sun, darkness, moon; 
let groundHeight;


function setup()
{
	createCanvas(800, 600);

	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};

	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};

	moon = 
	{
		x: 720,
		y: 90,

		diameter: 55,
		opacity: 255,
	};


	//set the initial darkness
	darkness = 0;
}


function draw()
{
	background(150, 200, 255);
	noStroke();

	//draw the sun

	sun.y = map(mouseX, 0,width,140,height,{withinBounds: true});

	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);


	// Fog
	// Remember to constrain the value
	darkness = map(mouseX, 0, width, 4, 100, {withinBounds: true})

	fill(83,83,200, darkness);
	quad(0,0,width,0, width, height, 0, height);

	// Moon
	moon.opacity = map(mouseX, 0, width, 30, 255);
	
	fill(255, 255, 255, moon.opacity);
	ellipse(moon.x, moon.y, moon.diameter);
}