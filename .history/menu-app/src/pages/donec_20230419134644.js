import { Link } from "react-router-dom";

export function Donec() {
    return(
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
                            <Link to={"/"} className="nav-link">odio</Link>
                        </li>
                        <li>
                            <Link to={"/Fermentum"} className="nav-link">fermentum</Link>
                        </li>
                        <li>
                            <Link to={"/Eiusmod"} className="nav-link">eiusmod</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            <h1 className="text-center">irure</h1>
            <p className="text-center"><i>velit esse cillum dolore</i></p>
            <div className="container">
                <p className="text-center text-secondary">quis imperdiet massa <a className="list-group-item" href="tel:+1234567890">(123)-456-7890</a></p>
            </div>
        </>

    )
}