import { Link } from "react-router-dom"

export function Welcome() {



    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="#" className="navbar-brand">massa</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#btn"
                    aria-controls="btn"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="btn">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <Link className="nav-link">fermentum</Link>
                        </li>
                        <li>
                            <Link className="nav-link">donec</Link>
                        </li>
                        <li>
                            <Link className="nav-link">eiusmod</Link>
                        </li>
                        <li>
                            <Link className="nav-link">arcu</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <h1>odio</h1>
        </>
    )
}