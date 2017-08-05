import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component{

    render(){
        return(
            <div>
                <h3>
                    {this.state.book.title}
                </h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
