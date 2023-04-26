import { Link } from "react-router-dom"

export function Eiusmod() {
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
                            <Link to={"/Donec"} className="nav-link">donec</Link>
                        </li>
                        <li>
                            <Link to={"/Eiusmod"} className="nav-link">eiusmod</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        <h1 className="text-center">miask</h1>
        <p className="text-center">quam lacus suspendisse</p>
        <div className="row pt-5 ms-4 mt-4 me-4 pb-4">
        <h3 className="text-center">incididunt ut labore et dolore magna</h3>
            <div className="mt-3 w-50">
                <h5>egestas sed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
            <div className="mt-3 w-50">
                <h5>egestas sed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
            <div className="mt-3 w-50">
                <h5>egestas sed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
            <div className="mt-3 w-50">
                <h5>egestas sed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
        </div>
        <footer className="fixed-bottom">
            <div className="d-flex justify-content-center">
                <p className="p-2">sunt in</p>
                <p className="p-2">officia</p>
                <p className="p-2">anim</p>
                <p className="p-2">tempor</p>
                <p className="p-2">veniam</p>
            </div>
        </footer>
        </>

    )
}