import { useState, useEffect } from "react";
import Event from "./Event";
import UseStateHook from "./UseStateHook";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName] = useState('Mario')


    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Web dev top tech', body: 'lorem ipsum...', author: 'luigi', id: 4 },
    ])


    const handleDelete = (e, id) => {
        // console.log(e)
        // console.log('handle delete works successfully')
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    const sayHello = () => {
        console.log(`Hello guys, how is it going??`)
    }

    useEffect(() => {
        console.log(`useEffect function ran..`)
        // console.log(blogs)
    }, [name, blogs])


    return (
        <>
            <h2>Home page, Welcome here in dojo blog</h2>
            <BlogList blogs={blogs} title={`All blog here guys!`} handleDelete={handleDelete} sayHello={sayHello} />
            <br />
            <p><button onClick={() => setName('Luigi')}>change name</button> {name} </p>
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title='Mario blog' /> */}

        </>
    )
}

export default Home;