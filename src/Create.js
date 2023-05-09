import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const bodyRef = useRef('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { body, title, author }
        setIsLoading(true)

        fetch(`http://localhost:5000/blogs/`, {
            body: JSON.stringify(blog),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                console.log(`blog added`)
                setIsLoading(false)
                // history.go(-1)
                history.push(`/blogs/${data.id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="create">
                <h2>Add new blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => (
                            setTitle(e.target.value)
                        )}
                    />

                    <label>Body</label>
                    <textarea ref={bodyRef}
                        value={body}
                        onChange={(e) => (
                            setBody(e.target.value)
                        )}
                        required>
                    </textarea>

                    <label>Author</label>
                    <select
                        value={author}
                        onChange={(e) => (
                            setAuthor(e.target.value)
                        )}

                    >
                        <option disabled='disabled'>select author</option>
                        <option value={`Yoshi`}>Yoshi</option>
                        <option value={`mario`}>Mario</option>
                    </select>

                    <button >
                        {!isLoading ? 'add blog' : 'adding blog...'}
                    </button>
                    <p>{title}</p>
                </form>
            </div>
        </>
    )
}

export default Create;