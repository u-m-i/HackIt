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
    let key = "YOUR_API_KEY";

    if("YOUR_API_KEY" === key)
    {
        console.warn("The API key is not assigned, the information can not be fetch");
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

                    bookcase.push(bookShelf);
                });
    }

    console.log(bookcase);
}

// Array of arrays of books

let bookcase = [];

fecthRandomData(bookcase);

function setup()
{
	createCanvas(800, 600);
}

function draw()
{

}
