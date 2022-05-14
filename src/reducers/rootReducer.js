
const initState = {

    login_session: {
        logged_in: false,
        username: 'testuser'
    },

    users: [
        {
            index: 1,
            username: 'testuser',
            email: 'test@gmail.com',
            pwd: '456@898a'
        },
        {
            index: 2,
            username: 'admin',
            email: 'admin@gmail.com',
            pwd: 'admin123!'
        },
        {
            index: 3,
            username: 'testuser3',
            email: 'test3@gmail.com',
            pwd: 'test3!6'
        }
    ],

    blogs: [
        {
            index: 1,
            author: 'Rachel',
            title: 'Blog 1',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 1, 2022",
            img: '',
            status: 'drafts'
        },
        {
            index: 2,
            author: 'Monica',
            title: 'Blog 2',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 2, 2022",
            img: '',
            status: 'drafts'
        },
        {
            index: 3,
            author: 'Chandler',
            title: 'Blog 3',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 3, 2022",
            img: '',
            status: 'published'
        },
        {
            index: 4,
            author: 'Joey',
            title: 'Blog 4',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 4, 2022",
            img: '',
            status: 'drafts'
        },
        {
            index: 5,
            author: 'Pheebs',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 5, 2022",
            img: '',
            status: 'published'
        }
    ]

}

const rootReducer = (state = initState, action) => {
    console.log(action);

    if (action.type === 'CREATE_BLOG') {
        console.log(action.blog);
        var index = state.blogs.length + 1;
        var blog = Object.create(state.blogs[0]);

        blog.index = index;
        blog.author = 'New user';
        blog.title = action.blog.title;
        blog.desc = 'Some desciption...' + index;
        blog.content = action.blog.content;
        blog.saves = 0;
        blog.likes = 0;
        blog.shares = 0;

        console.log(blog);

        let newblogs = state.blogs.filter(blog => {
            return blog.index !== action.id
        });

        newblogs = [...newblogs, blog];

        console.log(newblogs);

        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'SIGNIN_USER') {
        
        console.log(action.user);
        var user = Object.create(state.users[0]);

        user.logged_in = true;
        user.username = action.user.username;

        console.log(user);

        localStorage.setItem('user', JSON.stringify(user));

        return {
            ...state,
            login_session: user
        }
    }

    if (action.type === 'CREATE_USER') {
        console.log(action.user);
        var index = state.users.length + 1;
        var user = Object.create(state.users[0]);

        user.index = index;
        user.email = action.user.email;
        user.username = action.user.username;
        user.pwd = action.user.pwd;

        console.log(user);

        let newusers = state.users.filter(user => {
            return user.index !== action.id
        });

        newusers = [...newusers, user];

        console.log(newusers);

        return {
            ...state,
            users: newusers
        }
    }

    if (action.type === 'DELETE_BLOG') {
        let newblogs = state.blogs.filter(blog => {
            return blog.index !== action.id
        });
        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'EDIT_BLOG') {
        // placing blog obj passed on index passed (being edited)
        // console.log(action.blog); 
        state.blogs[action.blog.index - 1] = action.blog;
        // console.log(state.blogs);
        console.log(state.blogs[action.blog.index]);

        return {
            ...state,
        }
    }

    return state;
}

export default rootReducer;