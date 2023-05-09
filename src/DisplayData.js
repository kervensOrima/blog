import { Link, useHistory } from 'react-router-dom'


const DisplayData = ({ title, blogs }) => {

    const history = useHistory()

    const changeTitle = (e, title) => {
        document.title = title
    }

    

    return (
        <>
            <div className="blog-list">
                <h4>{title}</h4>
                <br />

                <div className="outputting-list">
                    {blogs.map((blog) => (
                        <div onMouseEnter={(e) => { changeTitle(e, blog.title) }} className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} >
                                <h4> {blog.title} </h4>
                                <div> {blog.author} </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default DisplayData;