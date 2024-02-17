class Product
{
    x;
    y;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

}


class Robot extends Product
{
    // Draw the robot.
    // Update the position
}


class Factory
{

    // Abstract
    createProduct(x,y)
    {}
}

class RobotFactory extends Factory
{
    createProduct(x, y)
    {
        return new Robot(x,y);
    }
}

let factory = new RobotFactory();

let button = { x: 300, y: 340 };

function setup()
{

    // Creator button
    fill(245,67,190);
    circle(button.x, button.y, 11);
}


function mousePressed()
{
    if(dist(mouseX, mouseY, button) < 12)
        factory.createProduct(mouseX, mouseY);
}
