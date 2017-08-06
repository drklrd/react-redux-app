import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{

    renderField(field){
        const { meta : { touched, error } } =  field; // ES6. Nested destructuring !!!
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            <div className="text-help">
                {touched ? error : ''}
            </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values);
    }

    // field doesnt  know how to show itself. Only knows how to interact with redux form
    // so comes the JSX Blob !!!
    // so comes the componend attribute !!!!!
    render(){

        const { handleSubmit } = this.props; // this is a prop passed from redux-form !!!!!
        // BUT REDUX FORM IS NOT RESPONSIBLE FOR POST REQUEST !

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>
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
    validate,
    form : 'PostsNewForm' // form name should be unique string,
})(
    connect(null, { createPost })(PostsNew)
);
