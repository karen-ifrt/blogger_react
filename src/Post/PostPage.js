import React, { Component } from 'react'
import Comment from './Comment'
import profileImage from '../Images/profile.png'

class PostPage extends Component {
    constructor() {
        super()

        this.state = {
            post: {
                title: 'Mon post',
                description: 'Ma description'
            },
            comments: [
                {
                    email: 'johndoe@gmail.com',
                    content: 'Mon commentaire'
                },
                {
                    email: 'johndoe@gmail.com',
                    content: 'Mon commentaire 2'
                },
                {
                    email: 'johndoe@gmail.com',
                    content: 'Mon commentaire 3'
                }
            ]
        }
    }
    render() {

        let comments = this.state.comments.map((element, key) => 
            <Comment key={key} email={element.email} content={element.content} src={profileImage}/>
        )

        return (
            <div className="container post-container">
                <div className="post">
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.description}</p>
                </div>
                <div className="comments-container">
                    <h2 className="comments-title">Commentaires</h2>
                    { comments }

                </div>
            </div>
        )
    }

}

export default PostPage