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
                <iframe className="w-100 h-50" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1385.238347985149!2d-114.62650465966037!3d32.697772914767064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1681938291536!5m2!1sen!2sus" />
            </div>
        </>

    )
}