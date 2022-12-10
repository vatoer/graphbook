import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Feed from './Feed'
import '../../assets/css/style.css'

const App = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name='description' content='newsfeed of all yout friend on graphbook' />
            </Helmet>
            <Feed />
        </div>
    )
}

export default App