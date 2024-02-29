class Rocket 
{
   #x = 0 ;
   #y = 0 ;

   #transform;
   #velocity;


   #thrust = false;

   constructor(x,y)
   {
      this.#transform = createVector(x,y,0);

      this.#velocity = createVector(0,0,0);
   }


   setVelocity()
   {
   }

   sumVel(vector)
   {

   }

   substractVel(vector)
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


/// TODO => Map 
// Receive an input, let's say a string.
// If the input happens to be included into an object set, then call what is configured for that object
let keyMap =
{
   "A" : function()
   {
      return "Left";
   },

   "D" : function()
   {
      return "Right";
   },
};


let vertexMap = 
{
   "Left": function ()
   {
      return {x:-1};
   },

   "Right": function ()
   {
      return {x:1};
   }
};

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


   if(keyMap[key] !== undefined)
   {
      console.log(`The key ${key} was pressed`);

      let result = keyMap[key]();

      let vector = vertexMap[result]();

      rocket.sumVel(vector);
   }
}


function keyReleased()
{
   if(!rocket)
      return;

   if(keyMap[key] !== undefined)
   {
      let result = keyMap[key]();

      let vector = vertexMap[result]();

      rocket.substractVel(vector);
   }
}
