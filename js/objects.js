const createBook = (title, firstName, lastName) => {
    let result = {
        title,
        author: {
            firstName,
            lastName,
        },
    };
    return result;
};
const showBookInfo = (book, books) => {
    const i = books.indexOf(book);
    const { title } = book;
    const { firstName, lastName } = book.author;
    let message = `Book # ${i + 1} \nTitle: ${title}\nAuthor: ${firstName} ${lastName}`;
    return message;
};

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {
    //     firstName: `rimuru`,
    //     lastName: `tempest`,
    //     sayHello: function (){
    //         return `Hi im ${this.firstName} ${this.lastName}, im not an evil slime! *Squish*`;
    // }
    // }
    // console.log(person.firstName, person.lastName);
    // console.log(person[`sayHello`]);

    //bracket notation allows you to use a variable to grab a specific property

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that Cameron bought $180, Ryan $250 and George $320.
     *
     * Your program will have to display a line with the name of the person
     * the amount before the discount
     * the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    //];

    // const doTheyDiscount = (name, amount) =>{
    //     if(amount >= 200){
    //         let discount = amount * .12;
    //         return `${name} your total today was ${amount} after the discount it came out to be ${discount}`;
    //     } else{
    //         return `${name} your ${amount} isn't quite enough for the discount`;
    //     }
    // }
    // shoppers.forEach((shopper)=>{
    //         let discount = shopper.amount * .88;
    //     if(shopper.amount >= 200){
    //         console.log( `${shopper.name} your total today was ${shopper.amount} after the discount it came out to be ${discount}`);
    //     } else{
    //         console.log( `${shopper.name} your total of ${shopper.amount} isn't quite enough for the discount`);
    //     }
    // })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books =[ {
    //     title:`Tales From The Gas Station`,
    //     author: {
    //         firstName:`Jack`,
    //         lastName:`Townsend`,
    //     },
    // },{
    //     title:`JavaScript for Dummies`,
    //     author: {
    //         firstName:`chris`,
    //         lastName:`minnick`,
    //     },
    // },{
    //     title:`The Tell-Tale Heart`,
    //     author: {
    //         firstName: `Edgar`,
    //         lastName: `Poe`,
    //     },
    // },{
    //     title:`I'm a Security guard at a secret government prison`,
    //     author: {
    //         firstName: `Mr.Outlaw`,
    //         lastName: `Mr.Outlaw`,
    //     },
    // },{
    //     title:`Tales from a Lonely Broadcast Station`,
    //     author: {
    //         firstName: `Kel`,
    //         lastName: `Bryon`,
    //     },
    // }];

    const books = [
            createBook("To Kill a Mockingbird", "Harper", "Lee"),
            createBook("1984", "George", "Orwell"),
            createBook("The Lord of the Rings", "J.R.R.", "Tolkien"),
            createBook("The Great Gatsby", "F. Scott", "Fitzgerald"),
            createBook("Pride and Prejudice", "Jane", "Austen"),
        ];

    console.log(books);

    // console.log(books[0].firstName);
    // console.log(books[0].lastName);
    // console.log(books[0].title);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach((book)=>{
    //     let bookNumber = books.indexOf(book);
    //     console.log(`Book # ${bookNumber + 1}`);
    //     console.log(book.title);
    //     console.log(book.firstName +` `+ book.lastName);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //THIS CODE ONLY WORKS OUTSIDE OF THE CALL FUNCTION ENVELOPING THIS PAGE I PASTED IT UPTO TO SHOW THAT

    // const createBook = (title, firstName, lastName) => {
    //     let result = {
    //         title,
    //         author: {
    //             firstName,
    //             lastName,
    //         },
    //     };
    //     return result;
    // };
    // const showBookInfo = (book, books) => {
    //     const i = books.indexOf(book);
    //     const { title } = book;
    //     const { firstName, lastName } = book.author;
    //     let message = `Book # ${i + 1} \nTitle: ${title}\nAuthor: ${firstName} ${lastName}`;
    //     return message;
    // };

    // showBookInfo(prompt(`please enter a book name`));
    // how do i take the user input string and compare it to the object key data in the array;
    //then return the index of the object if it matches;
    //then use the index of the object to return the object info;

})();