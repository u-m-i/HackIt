class Rocket 
{
   #x = 0 ;
   #y = 0 ;

   #transform;
   #velocity;

   #additionX = 0;
   #additionY = 0;

   #thrust = false;

   static direction = 
   {
      Right: "D",
      Left: "A",
   }

   constructor(x,y)
   {
      this.#transform = createVector(x,y,0);

      this.#velocity = createVector(0,0,0);
   }


   setVelocity()
   {
   }


   dawRocket()
   {
      fill(180);
      beginShape();

      this.#transform.add(this.#velocity);

      vertex(this.#transform.x + 10, this.#y + 60);
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

      if(this.#thrust)
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
   if(!rocket)
      return;

   if(key === Rocket.direction.Left)
   {
      rocket.setRight(true);
   }

   if(key === Rocket.direction.Right)
   {
      rocket.setLeft(true);
   }
}


/// TODO => Map 
function keyReleased()
{
   if(!rocket)
      return;

   if(key === Rocket.direction.Left)
   {
      rocket.setLeft(false);
   }

   if(key === Rocket.direction.Right)
   {
      rocket.setRight(false);
   }
}
