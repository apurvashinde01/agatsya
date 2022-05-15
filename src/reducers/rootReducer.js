
const initState = {

    login_session: {
        logged_in: false,
        username: null
    },

    users: [
        {
            index: 1,
            username: 'testuser',
            email: 'test@gmail.com',
            pwd: '456@898a',
            liked_blogs: [1, 2, 3],
            saved_blogs: [1, 4]
        },
        {
            index: 2,
            username: 'admin',
            email: 'admin@gmail.com',
            pwd: 'admin123!',
            liked_blogs: [4, 5],
            saved_blogs: [2, 4]
        },
        {
            index: 3,
            username: 'testuser3',
            email: 'test3@gmail.com',
            pwd: 'test3!6',
            liked_blogs: [6, 7],
            saved_blogs: [1, 3, 4]
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
            img: 'https://photo-cdn2.icons8.com/jLXSFR9F5ldU-8RYLDDUPdxM22wYKGH-Zt8FGjTvWOE/rs:fit:2352:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9jNGQ3ODNiYWVi/ZGI0OWEwYTUxNmNh/ODg1OWVjMDYxMi5q/cGc.jpg',
            status: 'published'
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
            img: 'https://photo-cdn2.icons8.com/uQ34vDCTrviS7kA2pzXV1A_Yj2WEYqiImSYtVzuV4Wg/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMzg0LzhjYWEx/YzVkLTI4ZmEtNDJm/My04MTdjLWE3MmFl/YzVmOThmOS5qcGc.jpg',
            status: 'published'
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
            img: 'https://photo-cdn2.icons8.com/KzPPYAljQqEVhX1p4G7Z1nHEEn7IvU05Opxy5R1DDVw/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi80NjMwODNkZTE4/ZGQ0NjlhODMzOGUw/OGU5Y2FlNTg2Ny5q/cGc.jpg',
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
            img: 'https://photo-cdn2.icons8.com/xLzL4NG8tdz_nIz5ExDRxPkJddNmzR8QH5-nqsTdLHw/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9kNDllNWI1NjZh/ODI0M2NiOGU0NDIx/ZGE4NGZjNWFhOC5q/cGc.jpg',
            status: 'published'
        },
        {
            index: 5,
            author: 'testuser',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 5, 2022",
            img: 'https://photo-cdn2.icons8.com/yMahiRwIxjN_nP8sEPHS79bEXKl-3iDZNBgNI8lz9pI/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83MTFjNzM1ZmQw/N2I0NzQzYjg0ZmZm/MWRmMTI5NWU4MC5q/cGc.jpg',
            status: 'published'
        },
        {
            index: 6,
            author: 'testuser',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 12,
            likes: 15,
            shares: 8,
            date: "May 5, 2022",
            img: 'https://photo-cdn2.icons8.com/jOlnqPGrul9VHsp4LJ0_YviHA8ZNw-SUp_P6NM64FZA/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTgyLzk4YTc1/OTY0LTIxOGQtNGYw/MS1iZjc3LWJlMzE5/OWVmM2Q4ZS5qcGc.jpg',
            status: 'published'
        },
        {
            index: 7,
            author: 'testuser',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 20,
            likes: 1,
            shares: 8,
            date: "May 5, 2022",
            img: 'https://photo-cdn2.icons8.com/t-D1lrXIG5eu2fHlKSJMhSgJKoZl4JcheLLKwFCtpA4/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTcxLzY2OWI5/MDI0LWY3YzctNDA1/Yi04NTllLTE2ZWQ2/MjZjYjJhYy5qcGc.jpg',
            status: 'drafts'
        },
        {
            index: 8,
            author: 'testuser',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 4,
            likes: 75,
            shares: 4,
            date: "May 5, 2022",
            img: 'https://photo-cdn2.icons8.com/UzOEPxZFGRA6SZmsYlaHOFk7DJXrebXqbx0MFkjSxFw/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTIwL2JhYzk5/NjY4LWRmNjAtNGFl/Yi1hZDk5LTBlNDM2/MzkxOGNmMC5qcGc.jpg',
            status: 'drafts'
        },
        {
            index: 9,
            author: 'testuser',
            title: 'Blog 5',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            saves: 200,
            likes: 150,
            shares: 80,
            date: "May 5, 2022",
            img: 'https://photo-cdn2.icons8.com/0iGIq3tiA5KvrDRsLGkPzWG-WZnRQuMlwRXArJpP35s/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjU0L2E5NGFh/M2M0LWI0MWMtNDc3/MC1hZjE2LTlmMTYw/Y2FkYmFjOC5qcGc.jpg',
            status: 'published'
        }
    ]

}

const rootReducer = (state = initState, action) => {
    // console.log(action);

    if (action.type === 'CREATE_BLOG') {
        // console.log(state.blogs);

        var index = state.blogs.length + 1;
        var blog = {};

        blog.index = index;
        blog.author = action.blog.author;
        blog.title = action.blog.title;
        blog.desc = 'Some desciption...' + index;
        blog.content = action.blog.content;
        blog.saves = 0;
        blog.likes = 0;
        blog.shares = 0;
        blog.img = 'https://photo-cdn2.icons8.com/9_cvztyJGjHFQfqJU0N97xGRrpKdbPOXLbjQK6optjw/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9hM2EzMGI2NjQ5/NmU0ZWE4YTk5YTA0/OWExNGE0MzY3NS5q/cGc.jpg';
        blog.status = action.blog.status;

        // console.log(blog);

        var newblogs = [...state.blogs, blog];

        // console.log(newblogs);

        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'SIGNIN_USER') {

        // console.log(action.user);
        var login_session = Object.create(state.login_session);

        login_session.logged_in = true;
        login_session.username = action.user.username;

        // console.log(login_session);

        localStorage.setItem('user', JSON.stringify(login_session));

        return {
            ...state,
            login_session: login_session
        }
    }

    if (action.type === 'SIGNOUT_USER') {

        // console.log(action.user);
        var login_session = Object.create(state.login_session);

        login_session.logged_in = false;
        login_session.username = action.user.username;

        // console.log(login_session);

        // localStorage.setItem('user', JSON.stringify(login_session));

        return {
            ...state,
            login_session: login_session
        }
    }

    if (action.type === 'CREATE_USER') {
        // console.log(action.user);
        var index = state.users.length + 1;
        var user = Object.create(state.users[0]);

        user.index = index;
        user.email = action.user.email;
        user.username = action.user.username;
        user.pwd = action.user.pwd;

        // console.log(user);

        let newusers = state.users.filter(user => {
            return user.index !== action.id
        });

        newusers = [...newusers, user];

        // console.log(newusers);

        return {
            ...state,
            users: newusers
        }
    }

    if (action.type === 'DELETE_BLOG') {

        let newblogs = state.blogs.filter(blog => {
            return blog.index !== action.blog_id
        });

        // console.log("After deletion", newblogs, action.blog_id)

        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'EDIT_BLOG') {
        // placing blog obj passed on index passed (being edited)
        // // console.log(action.blog); 
        state.blogs[action.blog.index - 1] = action.blog;
        // // console.log(state.blogs);
        // console.log(state.blogs[action.blog.index]);

        return {
            ...state,
        }
    }

    return state;
}

export default rootReducer;