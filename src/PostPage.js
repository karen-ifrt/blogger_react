import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostPage extends Component {
    render() {
        return (
        <div>
                <h5>Post Page</h5>
                <Link to="/">Page home</Link>
        </div>
        )
    }

}

export default PostPage