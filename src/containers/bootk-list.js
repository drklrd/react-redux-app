import React , { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return (
                    <li key={book.title} className="list-group-item"> {book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>

        );
    }
}

function mapStateToProps(state){
    //whatever is returned will show up as props inside BookList
    return {
        books : state.books
    };
}

export default connect(mapStateToProps)(BookList); //connect takes a function and Component to return a container. A container is a smart component that is aware of redux state.
