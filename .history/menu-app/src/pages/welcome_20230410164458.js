export function Welcome() {
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark">
                <a href="#" className="navbar-brand">massa</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expand="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-link" href="#"></a>
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
        </>
    )
}