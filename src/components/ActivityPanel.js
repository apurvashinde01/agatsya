import React, { useEffect, useState } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

function ActivityPanel({ blog }) {
    // fetch login session data
    const login_session = useSelector(state => state.login_session);
    const users = useSelector(state => state.users);

    const user_details = users.filter(user => {
        return user.username === login_session.username;
    });

    // fetchActivityDataofUser 
    var user_liked_blogs = user_details[0].liked_blogs;
    var user_saved_blogs = user_details[0].saved_blogs;

    const [likeClicked, setlikeClicked] = useState();
    const [likeBlog, setlikeBlog] = useState();

    const [saveClicked, setsaveClicked] = useState();
    const [savedBlog, setsavedBlog] = useState();

    useEffect(() => {
        if (user_liked_blogs.includes(blog.index)) {
            setlikeBlog(true);
        }

        if (user_saved_blogs.includes(blog.index)) {
            setsavedBlog(true);
        }
    }, [])

    // handle like click
    useEffect(() => {

        // console.log("Useeff eneterd", likeClicked);

        // to avoid default first render
        if (typeof likeClicked !== "undefined") {

            // console.log("Useeff eneterd, actual count func", likeClicked);
            var temp_blog = {};
            temp_blog = blog;

            if (likeBlog == true) {
                // liked now, + 1 like
                temp_blog.likes = temp_blog.likes + 1;

                // for user's liked_blogs, add blog id
                user_liked_blogs.push(blog.index);
                // console.log(user_liked_blogs);
            }
            else {
                // disliked now, -1 like
                temp_blog.likes = temp_blog.likes - 1;

                // for user's liked_blogs, add blog id
                var index = user_liked_blogs.indexOf(blog.index);
                if (index !== -1) {
                    user_liked_blogs.splice(index, 1);
                }
                // console.log(user_liked_blogs);
            }
        }
    }, [likeClicked])

    // handle save click
    useEffect(() => {

        // console.log("Useeff eneterd", saveClicked);

        // to avoid default first render
        if (typeof saveClicked !== "undefined") {

            // console.log("Useeff eneterd, actual count func", saveClicked);
            var temp_blog = {};
            temp_blog = blog;

            if (savedBlog == true) {
                // liked now, + 1 like
                temp_blog.saves = temp_blog.saves + 1;

                // for user's liked_blogs, add blog id
                user_saved_blogs.push(blog.index);
                // console.log(user_saved_blogs);
            }
            else {
                // disliked now, -1 like
                temp_blog.saves = temp_blog.saves - 1;

                // for user's liked_blogs, add blog id
                var index = user_saved_blogs.indexOf(blog.index);
                if (index !== -1) {
                    user_saved_blogs.splice(index, 1);
                }
                // console.log(user_saved_blogs);
            }
        }
    }, [saveClicked])

    const dispatch = useDispatch();

    const handleLike = () => {
        setlikeBlog(!likeBlog);
        setlikeClicked(!likeClicked);
    }

    const handleSave = () => {
        setsavedBlog(!savedBlog);
        setsaveClicked(!saveClicked);
    }

    return (
        <>
            {
                login_session.logged_in ? (
                    <>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                            <ListGroup className='list-group-flush'>
                                <ListGroup.Item className='bg-transparent'>
                                    {blog.likes}
                                    <a href='#'
                                        onClick={() =>
                                            handleLike()
                                        }
                                    >
                                        <img
                                            height={'40em'}
                                            src={
                                                likeBlog ? ("https://img.icons8.com/ios-filled/50/000000/like--v1.png") :
                                                    (
                                                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADqklEQVRoge3ZTYhWVRzH8c84M6A0OSlEZZaLjMFeyByL3qhFiBvNIqXcRIswjKJdLSsscFtMr1RQCW3SghZlVtAmekGKQo0WlWlBlC9l6hTOPC3OOd1bTDP33rnPfZ7g+cLlzJznf/7n97/nnHvP+V969OjRo0cH6CthO4KbsQrn4jwM4DD24AO8hq8K+luG9bgeF2MhTuEADmIX3sDXJTROy0q8h1aBaxJvY/k0/i6PNpMFfb6L0dkEMIixXIeH8DxuEkbnNMwVRmYtnhZGpyXc2UfQn/PXj0fjb8nfU1gTfcyNPkewDi9Em3SDnhBmQCkW4P3o5Di2YH6BdqfjYYzHti/HAPqxLdaN46FoOxPzheBPyEbnjKJBDOaC+F6YCmVZjv3RxzZZEN/hsgr+RoW1k4IpNDJjsiAWVeg0sST6SHN9P86fhb9FsmAen8l4pTAfj6s2Ev9mVJhK41hRg78VwjSbmMlfejptqaHTxAPxqovHBI27/stgRPY0KbKwi5IWe10My56OF6bKOTmDW2L5On6rseOJeNXFr8KLkvCCxj8DuTGWb9bYabtIGlelinwgS2K5pzE51dkbyymfgseEeTfUmJzqDAlaj6WK/IikBXmqSUUVmYzl3/rzgRyJ5cLG5FQnaTycKvKB/BLLcxqTU52k8VCqyAfyRSyvaExOda6M5eepIh/Ix7G8ujE51bkqlp9M9eMy4UlwRDgbdCvzhJdiS9iNTMnuaLChIVFVuF3QOOVoJO6LRruVO883RR8+EzRuns5wHn6Mhre2X1dp1gvaDiow/e+NxgeEnWa3MCwE0MI9RRoM4NPY4MX26SrNS4Kmj5Q4FlwqSyDc3R5dpdgsaDmJi8o2vis2/kNuu9wBVkcNLdxZ1UlKRPyOa+rRVYrrhPxBoYTDdPTjVVkwTY7MDcJJtSWkYmd9XB4UjpZpjm6crcMCbIx9tbA9aqiFfiGFmXJUz6qQvizYz1ZZmvaVdvTTJ6RDJ2Inbwmp1bpYgJ3R94SQVm3r7mItjsYOv1HPbvlafCvbtK6pwWchluJLWeZ9q2rzeAAP4s/oa5+wC2+UITwnWzcf4oIS7ZfGNumzwTPCZ4WOsRo/REEnhDs8Zxr7PmySZW1+Er65dAVnYodsdHZi8RR2i/FOzm57bNt1bMDPgsijuC332zohwZEW9KbG1ZXkbCF/nO76GJ7M/b8DZ3VMXQXuELY1KYCTuL+jimbBJUKedm/8+3/NsO46afZohL8AQdD5tJ4fnIQAAAAASUVORK5CYII="
                                                    )

                                            }
                                        />
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-transparent'>
                                    {blog.saves}

                                    <a href='#'
                                        onClick={() =>
                                            handleSave()
                                        }
                                    >

                                        <img
                                            height={'40em'}

                                            src={
                                                savedBlog ? ("https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png") :
                                                    (
                                                        "https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png"
                                                    )

                                            }
                                        />
                                    </a>

                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </>
                ) : (
                    <>
                        <h4>Please signin for more!</h4>
                    </>
                )
            }


        </>
    )
}

export default ActivityPanel