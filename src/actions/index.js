//action creator is just a function

export function selectBook(book){
    // selectBook is an Action creatior and needs to return an object with a type property
    return {
        type : 'BOOK_SELECTED',
        payload : book
    };
}
