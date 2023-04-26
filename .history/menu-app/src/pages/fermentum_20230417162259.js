import { Link } from "react-router-dom"

export function Fermentum() {
    return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link to={"/"} className="navbar-brand">massa</Link>
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
                            <Link to={"/Fermentum"} className="nav-link">fermentum</Link>
                        </li>
                        <li>
                            <Link to={"/Donec"} className="nav-link">donec</Link>
                        </li>
                        <li>
                            <Link to={"/Eiusmod"} className="nav-link">eiusmod</Link>
                        </li>
                        <li>
                            <Link to={"/Arcu"} className="nav-link">arcu</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            <h1 className="text-center">arine</h1>
            <p className="text-center"><i>deserunt mollit anim id est</p>
            <div className="container">
            </div>
        </>
    )
}