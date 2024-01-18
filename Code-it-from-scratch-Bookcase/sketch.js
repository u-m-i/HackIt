class book 
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

// Total number of books
//
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

// All the books at a shelf
function shelfWeight(index)
{
    return bookcase[index-1].length;
}

//
// The books of particular shelf specified by a parameter ( A name list of all the books in the shelf)
//
//
// Book's name as a parameter to get the location of the book.

// Additional code

function fecthRandomData()
{
    let key = "YOUR_GOOGLE_CLOUD_KEY";

    let url = `https://www.googleapis.com/books/v1/volumes?q=random&key=${key}`;
    

    fetch(url)
        .then( response => response.json())
        .then(

        data =>
            {
                if(data.items && data.length == 0)
                {
                    plotter.error("No Internet or no books");
                    return;
                }

                console.table(data.items);

            }
    );

}

// Array of arrays of books

let bookcase = [];

fecthRandomData();


function setup()
{
	createCanvas(800, 600);
}

function draw()
{

}
