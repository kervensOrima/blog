
import { useParams, useLocation, useHistory } from 'react-router-dom'
import useFetch from './hook/useFetch'

const BlogDetails = () => {

    const { id } = useParams()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const history = useHistory()
    const { data, loading, error } = useFetch(`http://localhost:5000/blogs/${id}/`)

    const handleDelete = (e, id) => {
        fetch(`http://localhost:5000/blogs/${id}/`, {
            method: 'DELETE',
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className='blog-details'>
                {loading && <div>loading...</div>}
                {error && <div>{error}</div>}
                <br />
                {data && (
                    <article>
                        <div> Writen by <b>{data.author}</b> </div>
                        <h3>{data.title}</h3>
                        <div> {data.body} </div>
                        <button onClick={(e) => (
                            handleDelete(e, data.id)
                        )}>delete</button>
                    </article>
                )}
            </div>
        </>
    )
}

export default BlogDetails;