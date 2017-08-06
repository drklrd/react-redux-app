import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            {field.meta.error}
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
                    label = "Title for post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label = "Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label = "Post content"
                    name="content"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values){
    const  errors = {};
    if ( !values.title){
        errors.title = "Enter a title";
    }
    if ( !values.categories){
        errors.categories = "Enter some category";
    }
    if ( !values.content){
        errors.content = "Enter some content";
    }
    return errors;
}

export default reduxForm({  // reduxForm will be communicating with redux store here . WOW !!!
    form : 'PostsNewForm', // form name should be unique string,
    validate
})(PostsNew);
