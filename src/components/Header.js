import {Link} from "react-router-dom"

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Journal APP</div>
            </Link>
        </nav>
    )
}

export default Header