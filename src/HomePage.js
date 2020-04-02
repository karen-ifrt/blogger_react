import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
        let posts = this.state.posts.map((element) => 
                <Link className="article" to="/post">
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                </Link>
        )

        return (
        <div>
                <h5>Home Page</h5>
                {posts}
                <Link to="/post">Page post</Link>
        </div>
        )
    }

}

export default HomePage