
const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    const handleDelete = props.handleDelete
    const sayHello = props.sayHello

    const handleMouseEnter = (e, title) => {
        document.title = title
    }

    return (
        <>
            <div className="blog-list">
                <h3>{title}</h3>
                <hr />
                <div className="outputting-list">
                    {blogs.map((blog) => (
                        <div onMouseEnter={(e,) => handleMouseEnter(e, blog.title)} className="blog-preview" key={blog.id}>
                            <h3> {blog.title} </h3>
                            <div>Author <small>{blog.author}</small></div>
                            {handleDelete ? <button onClick={(e) => {
                                handleDelete(e, blog.id)
                                sayHello()
                            }}>delete</button> : ''}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogList;