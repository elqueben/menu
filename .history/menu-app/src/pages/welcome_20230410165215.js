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
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-lable="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav text-center">
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
        <h1> welcome</h1>
        </>
    )
}