class Rocket 
{
   #x = 0 ;
   #y = 0 ;

   #transform;
   #velocity;
   #multiplier;


   #thrust = false;

   constructor(x,y, mult)
   {
       this.#x = x;
       this.#y = y;
       this.#multiplier = mult;

      this.#transform = createVector(x,y);

      this.#velocity = createVector(0,0);
   }


   setVelocity()
   {
   }

   addToVel(vector)
   {
      this.#velocity.add(vector);
       this.#velocity.mult(this.#multiplier);
   }

   subToVel(vector)
   {
      this.#velocity.sub(vector);
   }

   dawRocket()
   {
      fill(180);
      beginShape();

      this.#transform.add(this.#velocity);

      vertex(this.#transform.x + 10, this.#transform.y + 60);
      vertex(this.#transform.x + 10, this.#transform.y + 20);
      vertex(this.#transform.x + 15, this.#transform.y);
      vertex(this.#transform.x + 20, this.#transform.y + 20);
      vertex(this.#transform.x + 20, this.#transform.y + 60);
      // 
      endShape(CLOSE);

      fill(255, 0, 0);
      beginShape();

      vertex(this.#transform.x, this.#transform.y + 60);
      vertex(this.#transform.x + 10, this.#transform.y + 40);
      vertex(this.#transform.x + 10, this.#transform.y + 60);
      //
      endShape(CLOSE);

      beginShape();

      vertex(this.#transform.x + 30, this.#transform.y + 60);
      vertex(this.#transform.x + 20, this.#transform.y + 40);
      vertex(this.#transform.x + 20, this.#transform.y + 60);
      //
      endShape(CLOSE);

      if(this.#thrust)
      {
         fill(255, 150, 0);
         beginShape();

         vertex(this.#transform.x + 10, this.#transform.y + 60);
         vertex(this.#transform.x + 13, this.#transform.y + 80);
         vertex(this.#transform.x + 15, this.#transform.y + 70);
         vertex(this.#transform.x + 18, this.#transform.y + 80);
         vertex(this.#transform.x + 20, this.#transform.y + 60);
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
      return createVector(-1, 0);
   },

   "Right": function ()
   {
      return createVector(1, 0);
   }
};

function setup()
{
   createCanvas(800,600);
   background(40);

   rocket = new Rocket((width/2), (height - 100), 2);
}


function draw()
{
    clear(40,40,40);
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

      rocket.addToVel(vector);
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

      rocket.subToVel(vector);
   }
}
