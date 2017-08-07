import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{

    componentDidMount(){
        const { id } = this.props.match.params;
        // ownProps is absolutely equal to this.props for this component
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        });
    }

    render(){
        const { post } = this.props;

        if(!post){
            return <div>Loading ...</div>
        }
        return(
             <div>
                 <Link to="/" className="btn btn-success"> Back </Link>
                 <button
                     className="btn btn-danger pull-xs-right"
                     onClick={this.onDeleteClick.bind(this)}
                 >
                     Delete
                 </button>
                 <h3> {post.title} </h3>
                 <h5> {post.categories} </h5>
                 <p> {post.content } </p>
             </div>
         );
     }
}

function mapStateToProps({ posts }, ownProps){
    // ownProps is absolutely equal to this.props for this component
    return {
        post : posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps,{ fetchPost,deletePost })(PostsShow);