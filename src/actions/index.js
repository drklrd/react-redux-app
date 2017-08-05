//action creator is just a function that return an action(plain javascript obj - type defined / payload)

export function selectBook(book){
    // selectBook is an Action creatior and needs to return an object with a type property
    return {
        type : 'BOOK_SELECTED',
        payload : book
    };
}
