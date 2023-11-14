import { books } from "../data/books.js";

//first create the book element
const renderBookElement = book => {
    //we destructure the object, so we know what properties the object has.
    const {title, authors, categories, isbn10,
        published_year, isbn13, subtitle,thumbnail,
        description, average_rating, num_pages, ratings_count} = book;
    const bookElement = document.createElement(`tr`);
    //adding inner html to the node
    bookElement.innerHTML =`
        <td>${title}</td>
        <td>${authors}</td>
        <td>${categories}</td>
        <td>${isbn10}</td>
        <td>${published_year}</td>
        <td>
            <button data-delete class="btn btn-sm btn-danger">Delete</button>
        </td>
    `;
    //then we add any event listeners the node needs
    const deleteBtn = bookElement.querySelector(`button[data-delete]`);
    deleteBtn.addEventListener(`click`, e=>{
       bookElement.remove()
    });
    //then we append the node to the document
    // document.querySelector(`#book-list`).appendChild(bookElement);
    return bookElement;
};

//build a function to filter the books according to different search values.
const updateBooks = books => {
    //clear out the books container
    document.querySelector(`#book-list`).innerHTML = "";
    //get all user input values for filtering
    const categoryInput = document.querySelector(`#category`);
    const categoryValue = categoryInput.value;
    // console.log(`category value =>`, categoryValue);

    const searchInput = document.querySelector(`#search`);
    const searchValue = searchInput.value;
    // console.log(`search value =>`, searchValue);

    //filter this could be done in one function
    let filteredBooks = books;
    //filter by each value individually
    filteredBooks = filteredBooks.filter(book =>{
        if (!categoryValue){
            return true;
        }
        if(typeof book.categories !== `string`){
            return false;
        }
       return book.categories.toLowerCase().includes(categoryValue.toLowerCase());
    });
    filteredBooks = filteredBooks.filter(book =>{
        if (!searchValue){
            return true;
        }
        if(typeof book.categories !== `string`){
            return false;
        }
        return book.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    const booksFragment = document.createDocumentFragment();
    //render filtered array
    for(let book of filteredBooks){
        booksFragment.appendChild(renderBookElement(book));
    }
    document.querySelector(`#book-list`).appendChild(booksFragment);

};

//create the handle function for the filter events
const handleFilterEvents = (books)=>{
    const searchInput = document.querySelector(`#search`);
    searchInput.addEventListener(`input`, debounce(e=>{
        if(searchInput.value.toLowerCase() === `the`){
            return;
        }
        updateBooks(books);
    }, 500));
    const categoryInput = document.querySelector(`#category`);
    categoryInput.addEventListener(`change`, e=>{
        updateBooks(books);
    });
};

//debounce adds a delay to events and cancels the first function from running each time the event is triggered. In this example the dbounce makes it to where we can enter a whole search before it will run the filter.
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) =>{
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

// MAIN
(() => {
    updateBooks(books);
    handleFilterEvents(books);
})();
