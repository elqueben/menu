export function Welcome() {
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="#" className="navbar-brand">brand</a>
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
                    <ul className="">
                        <li>
                            <a className="nav-link" href="#">pricing</a>
                        </li>
                    </ul>
                </div>
            
            </nav>
        </div>
        </>
    )
}