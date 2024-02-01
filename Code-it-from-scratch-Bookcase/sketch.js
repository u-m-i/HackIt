class Plotter
{
    constructor()
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

const TOTAL_SHELFS = 10;

const BOOKS_PER_SHELF = 5;

const KEYWORDS = ["random", "pink", "europe", "japanese", "birds", "six", "numbers", "design", "world", "salt"];


const plotter = new Plotter();


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

/**
 * 
 * @param {Int} index 
 * @returns The length of the shelf:Array
 */
function shelfWeight(index)
{
    return bookcase[index-1].length;
}

//
// The books of particular shelf specified by a parameter ( A name list of all the books in the shelf)
//
//
// Book's name as a parameter to get the location of the book.
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

    plotter.notfound("Your book has not been found check the information again");
}

// Additional code

function fecthRandomData(bookcase)
{
    let key = "AIzaSyBKyKvybNOzGh6NF6FwsVv0bYiwmuWKwJ4";

    if("YOUR_API_KEY" === key)
    {
        console.warn("The API key is not assigned, the information can not be fetch");
        // Plotter warn
        return;
    }

    for(let i = 0; i < TOTAL_SHELFS; ++i)
    {

        let url = `https://www.googleapis.com/books/v1/volumes?q=${KEYWORDS[i]}&key=${key}`;

        fetch(url)
            .then( response => response.json())
            .then(

            data =>
                {
                    // Error => No value returned
                    if(data.items && data.length == 0)
                    {
                        plotter.error("No Internet or no books");
                        return;
                    }


                    if(data.items && data.length < BOOKS_PER_SHELF)
                        plotter.warn(`There's no enough books about: ${KEYWORDS[i]}`);

                    let bookShelf = [];


                    for(let j = 0; j < BOOKS_PER_SHELF; ++j)
                    {
                        let book = new Book(data.items[j].volumeInfo.title, 'CO');

                        book.ISBN = data.items[j].volumeInfo.industryIdentifiers;

                        bookShelf.push(book);
                    }

                    bookcase[i] = bookShelf;
                });
    }
}

let bookcase = [10];

fecthRandomData(bookcase);

function setup()
{
	createCanvas(800, 600);

    background(40,40,40);

    console.log(bookcase.length);

    fill(1);
    textSize(25);

    for(let i = 0;i < bookcase.length; ++i)
    {
        console.log(i);
    }

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
