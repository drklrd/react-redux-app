import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    renderTitleField(field){
        return(
            <div>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    // field doesnt  know how to show itself. Only knows how to interact with redux form
    // so comes the JSX Blob !!!
    // so comes the componend attribute !!!!!
    render(){
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({  // reduxForm will be communicating with redux store here . WOW !!!
    form : 'PostsNewForm' // form name should be unique string
})(PostsNew);
