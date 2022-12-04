const posts = [
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

const resolvers = {
    RootQuery: {
        posts(root, args, context) {
            return posts;
        },
    },
};

export default resolvers;