import React, { useState } from 'react';
import '../../assets/css/style.css'

const initialPost = [
    {
        id: 2,
        text: 'lorem ipsum',
        user: {
            avatar: '/uploads/avatar1.png',
            username: 'test user'
        }
    },
    {
        id: 1,
        text: 'Lorem ipsum',
        user: {
            avatar: '/uploads/avatar2.png',
            username: 'Test User 2'
        }
    }
];

const App = () => {
    const [post, setPosts] = useState(initialPost);
    
    return (
        <div className='container'>
            <div className='feed'>
                { initialPost.map( (post, i) => 
                    <div key= {post.id} className="post" >
                        <div className='header'>
                            <img src={post.user.avatar} />
                            <h2>{post.user.username}</h2>
                        </div>
                        <p className='content'>
                            {post.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App