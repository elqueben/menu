export function Welcome() {
    return (
        <body>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="#" className="navbar-brand">massa</a>
                <button
                    className="navbar-toggler btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#btn"
                    aria-controls="toggleMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMenu">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <a className="nav-link" href="#">fermentum</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">donec</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">eiusmod</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">arcu</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">cras</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <h1>odio</h1>
        </body>
    )
}