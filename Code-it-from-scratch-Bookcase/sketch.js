import * as myp5 from "./p5.min.js";

console.log(new myp5());

class Plotter
{
    constructor()
    {
    }

    warn()
    {

    }

    exception()
    {

    }


    error()
    {

    }
}

class Book 
{
    /** Properties **/

    location;
    name;
    ISBN;

    constructor(name, location)
    {
        this.name = name;
        this.location = location;
    }

}



// First book on each shelf
function* leaderBook(limit)
{
    let index = 0;

    while(index < limit)
    {
        yield bookcase[i][0];
        index++;
    }
}


function shelfFirstBook(limit)
{
    let gen = leaderBook(limit);
    let list = [];

    // Iteration mean I pass by
    for(let i = 0;i < limit; ++i)
    {
        list.push(gen.next().value);
    }

    return list;
}


function totalBooksStore()
{
    let total = 0;

    // Sum the all the shelfs weight
    for(let i = 1; i < bookcase.length; ++i)
    {
        total += shelfWeight(i)
    }

    return total;
}


/**
 * 
 * @param {Int} index 
 * @returns The length of the shelf:Array
 */
function shelfWeight(index)
{
    return bookcase[index-1].length;
}



/**
 * The books of particular shelf specified by a parameter ( A name list of all the books in the shelf)
 * @param {String} name as the key to get the location of the book
 * @returns 
 */
function bookByName(name)
{
    // Lock for a kerword in the name
    for(let i = 0; i < KEYWORDS.length; ++i)
    {
        // TODO => No case sensitive check
        // The name is related with the keyword
        if(name.contains(KEYWORDS[i]))
        {
            let shelf = bookcase[i];

            // Start searching in the bookshelf
            for(let j = 0; j < shelf.length; ++j)
            {
                // We have found the book
                if(shelf[j].title === name)
                    return shelf[j];

            }
        }
    }

    plotter.exception("Your book has not been found check the information again");
}

const TOTAL_SHELFS = 10;

const BOOKS_PER_SHELF = 5;

const DEFAULT_KEY = "YOUR_API_KEY";

const KEYWORDS = ["random", "pink", "europe", "japanese", "birds", "six", "numbers", "design", "world", "salt"];

const plotter = new Plotter();

let bookcase = [];


function setup()
{
	createCanvas(800, 600);

    background(40,40,40);

    console.log(bookcase.length);

    fill(1);
    textSize(25);


    for(let j = 0; j < bookcase.length; ++j)
    {
        console.log(j);

        for(let i = 0; i < bookcase[0].length; ++i)
        {
            console.log(bookcase[j][i]);

            text(bookcase[j][i].name,width/2 , height/2 + (40 * i));
        }
    }
}

function draw()
{

}


async function start()
{

    // Populate the bookcase first

    let fetcher = await import("./fetcher.js");

    await fetcher.fecthRandomData(bookcase, TOTAL_SHELFS, BOOKS_PER_SHELF, KEYWORDS, plotter);

    // Import p5 and settle it down

    let myp5 = await import("./p5.min.js");

    let engine = new myp5.p5((sketch) =>
    {

        sketch.setup = setup;

        sketch.draw = draw;

    });

}

start();