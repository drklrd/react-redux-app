import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost} from '../actions';

class PostsShow extends Component{

    componentDidMount(){
        const { id } = this.props.match.params;
        // ownProps is absolutely equal to this.props for this component

        this.props.fetchPost(id);
    }
    render(){
         return(
             <div>
                 POST
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

export default connect(mapStateToProps,{ fetchPost })(PostsShow);
