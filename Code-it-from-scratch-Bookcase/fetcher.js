
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

/**
 * 
 * @param {Array} bookcase 
 * @param {Number} shelfQuantity 
 * @param {Number} bookPerShelf 
 * @param {Array} keywords 
 * @param {String} key 
 * @param {Plotter} plotter 
 * @returns The bookcase filled with the total amount of shelfs with all the books per shelf
 */
export async function fecthRandomData(bookcase, shelfQuantity, bookPerShelf, keywords, key, plotter)
{
   // Warn => There's no key to use the API
   if("YOUR_API_KEY" === key)
   {
      console.warn("The API key is not assigned, the information can not be fetch");
      // Plotter warn

      plotter.warn();
      return;
   }

   for(let i = 0; i < shelfQuantity; ++i)
   {

      let url = `https://www.googleapis.com/books/v1/volumes?q=${keywords[i]}&key=${key}`;

      let shelfData = await fetch(url).then( response => response.json());

      // Error => No value returned
      if(shelfData.items && shelfData.length == 0)
      {
         plotter.error("No Internet or no books");
         return;
      }

      // Exception => There's not enough data to fill the books per shelf
      if(shelfData.items && shelfData.length < bookPerShelf)
         plotter.exception(`There's no enough books about: ${KEYWORDS[i]}`);

      let bookShelf = [];

      for(let j = 0; j < bookPerShelf; ++j)
      {
         let book = new Book(shelfData.items[j].volumeInfo.title, 'CO');

         book.ISBN = shelfData.items[j].volumeInfo.industryIdentifiers;

         bookShelf.push(book);
      }

      bookcase[i] = bookShelf;
   }
}
