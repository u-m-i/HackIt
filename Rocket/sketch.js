
class Rocket 
{
   #x = 0 ;
   #y = 0 ;

   #thrust = false;

   static direction = 
   {
      Right: "Right",
      Left: "Left",
   }

   constructor(x,y)
   {
      this.#x = x;
      this.#y = y;
   }


   dawRocket()
   {
      fill(180);
      beginShape();

      vertex(this.#x + 10, this.#y + 60);
      vertex(this.#x + 10, this.#y + 20);
      vertex(this.#x + 15, this.#y);
      vertex(this.#x + 20, this.#y + 20);
      vertex(this.#x + 20, this.#y + 60);
      // 
      endShape(CLOSE);

      fill(255, 0, 0);
      beginShape();

      vertex(this.#x, this.#y + 60);
      vertex(this.#x + 10, this.#y + 40);
      vertex(this.#x + 10, this.#y + 60);
      //
      endShape(CLOSE);

      beginShape();

      vertex(this.#x + 30, this.#y + 60);
      vertex(this.#x + 20, this.#y + 40);
      vertex(this.#x + 20, this.#y + 60);
      //
      endShape(CLOSE);

      if (this.#thrust)
      {
         fill(255, 150, 0);
         beginShape();

         vertex(this.#x + 10, this.#y + 60);
         vertex(this.#x + 13, this.#y + 80);
         vertex(this.#x + 15, this.#y + 70);
         vertex(this.#x + 18, this.#y + 80);
         vertex(this.#x + 20, this.#y + 60);
         //
         endShape(CLOSE);
      }
   }
}

let rocket;

function setup()
{
   createCanvas(800,600);
   background(40);

   rocket = new Rocket((width/2), (height - 100));

}

function draw()
{
   rocket.dawRocket();
}


function keyPressed()
{

}

function keyReleased()
{

}