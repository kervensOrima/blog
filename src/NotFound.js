import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {

    const history = useHistory()

    return (
        <div className='not-found'>
            <h2>Sorry (:</h2>
            <div>Page not found</div>
            <p>
                <Link to='/'>go home</Link>
                -
                <button onClick={(e) => (
                    history.goBack()
                )}>Go to the previous page</button>
            </p>
        </div>
    )
}

export default NotFound