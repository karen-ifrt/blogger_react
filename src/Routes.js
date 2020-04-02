import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './HomePage'
import PostPage from './PostPage'

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/post" component={PostPage} />
        </div>
    </Router>
)

export default Routes