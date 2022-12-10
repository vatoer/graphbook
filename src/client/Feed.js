import React, { useState } from 'react';

const initialPosts = [
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

const Feed = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            id: posts.length + 1,
            text: postContent,
            user: {
                avatar: '/uploads/avatar1.png',
                username: 'fake user'
            }
        }
        setPosts([newPost, ...posts]);
        setPostContent('');
    }

    return (
        <div className='container'>
            <div className='postForm'>
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)}
                        placeholder="write your post!"
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='feed'>
                {posts.map((post, i) =>
                    <div key={post.id} className="post" >
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

export default Feed