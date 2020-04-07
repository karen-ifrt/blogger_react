import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'


class HomePage extends Component {
    constructor() {
        super()

        this.state = {
            posts: [
                { title: 'titre', description: 'ma desc' },
                { title: 'titre 2', description: 'ma desc 2' },
                { title: 'titre 3', description: 'ma desc 3' }
            ]
        }
    }
    render() {
        let posts = this.state.posts.map((element, key) =>
            <Post key={key} title={element.title} description={element.description} />
        )

        return (
            <div>
                <div className="container articles-container">
                    {posts}
                </div>
            </div>
        )
    }

}

export default HomePage