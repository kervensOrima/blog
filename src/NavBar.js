
import {Link , NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <nav className="navbar">
                <h2>Dojo blog</h2>
                <div className="links" >
                    <Link to='/'>Home</Link>
                    <NavLink to='/new-blog/'>New Blog</NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;