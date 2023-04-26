export function Welcome() {
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="#" className="navbar-brand">massa</a>
                <a
                    className="navbar-toggler btn"
                    href="#toggleMenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="toggleMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="collapse" id="toggleMenu">
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
        </>
    )
}