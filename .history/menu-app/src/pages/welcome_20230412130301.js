import { Link } from "react-router-dom"

export function Welcome() {
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
        <h1 className="text-center">odio</h1>
        <p className="text-center"><i>sint occaecat cupidatat</i></p>
        <div style={{backgroundColor: "red"}}>
            <p>red</p>
        </div>
        <div className="container-fluid" style={{backgroundColor: "grey"}}>
            <div className="d-flex justify-content-center">
                <p className="p-2">sunt in</p>
                <p className="p-2">officia</p>
                <p className="p-2">random text</p>
                <p className="p-2">random</p>
                <p className="p-2">random text</p>
            </div>
        </div>
        </>
    )
}