import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }

    render(){
        return (
            <div>
                <input
                placeholder="Search here"
                value = {this.state.term}
                onChange={event => this.setState({term : event.target.value}) }
                />
            </div>
        );
    }
}

export default SearchBar;
