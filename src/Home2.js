import { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import useFetch from "./hook/useFetch";


const Home2 = () => {

    // const [blogs, setBlogs] = useState([])
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     fetch(`http://localhost:5000/blogs/`)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error(`couldnt get api response!!`)
    //             }
    //             return res.json()
    //         })
    //         .then(blogList => {
    //             setBlogs(blogList)
    //             setIsPending(false)
    //             setError(null)
    //         })
    //         .catch(err => {
    //             // console.log(err.message)
    //             setIsPending(false)
    //             setError(err.message)
    //         })
    // }, [])

    const { data: blogs, loading: isPending, error } = useFetch(`http://localhost:5000/blogs/`)

    const handleDelete = (id) => {
        console.log(id, `need to delete`)
    }

    return (
        <>
            <div className="content">
                {blogs && <DisplayData blogs={blogs} title={`All blog from api`} handleDelete={handleDelete} />}
                {isPending && <div>loading...</div>}
                {error && <div>{error}</div>}
            </div>
        </>
    )
}

export default Home2;