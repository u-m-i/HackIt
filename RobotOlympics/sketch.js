/*
Hack It: Robot Olympics

* Make each robot move down the track by increasing its x coordinate each frame. You will want to add some randomness to this so each robot races at a different speed. 
* Check which robot has won the race and display a message saying which robot won. Remember the lanes will are labelled 1-5 not 0-4. 
* Some other things to try out when you've done the basics: 
    * Switch the robotXs and robotYs arrays to a single array of objects. 
    * Change the look of each robot.  
    * [HARD] Make the robots run the other way, or down the screen not across. 
    * [V HARD] make the race distance longer without increasing the size of the canvas. 
    * [V HARD] add "on your marks.", "Get set" and "go" before the start of the race. 
*/

var finishLineX = 1150;
var robotXs = [40, 40, 40, 40, 40];
var robotYs = [50, 200, 350, 500, 650];
var robotV = [];
let winner;

function setup()
{
	createCanvas(1200, 800);

    for(let i = 0; i < robotXs.length; ++i)
    {
        robotV.push(random(8,15));
    }
}


function draw()
{

	background(200, 100, 0);


	//draw the finish line and first line marker
	strokeWeight(7);
	stroke(255);
	line(finishLineX, 0, finishLineX, height);
	line(0, robotYs[0] - 20, width, robotYs[0] - 10);

    if(winner)
    {
        
        strokeWeight(2);
        stroke(230);
        textSize(37)
        textAlign(CENTER);
        text(`The winner is ${winner}`, width/2, height/2);
    }


	for (var i = 0; i < robotXs.length; i++)
	{

		//draw the robots
		strokeWeight(2);
		stroke(0);

		//robot head
		fill(200);
		rect(robotXs[i], robotYs[i], 100, 100, 10);

		//ears
		fill(255, 0, 0);

		rect(robotXs[i] - 7, robotYs[i] + 30, 10, 33);
		rect(robotXs[i] + 97, robotYs[i] + 30, 10, 33);

		//robots' antennas
		fill(250, 250, 0);
		ellipse(robotXs[i] + 50, robotYs[i] - 7, 10, 10);

		fill(200, 0, 200);
		rect(robotXs[i] + 40, robotYs[i] - 3, 20, 10);

		//eyes
		fill(255);
		ellipse(robotXs[i] + 25, robotYs[i] + 30, 26, 26);
		point(robotXs[i] + 25, robotYs[i] + 30);
		ellipse(robotXs[i] + 75, robotYs[i] + 30, 26, 26);
		point(robotXs[i] + 75, robotYs[i] + 30);


		//robots' noses
		fill(255, 0, 0);
		triangle(robotXs[i] + 50, robotYs[i] + 35, robotXs[i] + 35, robotYs[i] + 60, robotXs[i] + 65, robotYs[i] + 60);

		//robot 1 mouth
		noFill();
		beginShape();
		vertex(robotXs[i] + 28, robotYs[i] + 75);
		vertex(robotXs[i] + 36, robotYs[i] + 85);
		vertex(robotXs[i] + 42, robotYs[i] + 75);
		vertex(robotXs[i] + 50, robotYs[i] + 85);
		vertex(robotXs[i] + 58, robotYs[i] + 75);
		vertex(robotXs[i] + 66, robotYs[i] + 85);
		vertex(robotXs[i] + 74, robotYs[i] + 75);
		endShape();

		//draw the lower line marker for this lane
		strokeWeight(7);
		stroke(255);
		line(0, robotYs[i] + 120, width, robotYs[i] + 120);

		//TODO: update the robots x location 
        if(!winner)
        {
            robotXs[i] += robotV[i];
        }

		//TODO Check if the robot has won and display message!   
        if(robotXs[i] >= finishLineX)
        {
            winner = i;
        }
	}

}
