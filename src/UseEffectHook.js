import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
    const [post, setPost] = useState([]);

    // componentDidMount
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts/';
        axios.get(url).then((res => {
            console.log(res);
            setPost(res.data);
        })).catch(err => console.log(err));
    }, []);//callback, arr(optional)

    // componentDidUpdate
    // useEffect(() => {
    //     //api calls
    //     el.addventListerner
    // }, [form]);//we pass state data

    // componentWillUnmount
    //  useEffect(() => {
    //     el.removeListerner();
    //  }, []);


    const postList = post.length ? (post.map(info => {
        return (
            <>
                {info.title}
            </>
        )
    })) : ('')

    return (
        <>
            {postList}
            <p id='display'>Hello</p>
        </>
    )
}

export default UseEffectHook;



