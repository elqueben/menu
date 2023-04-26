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
                            <Link to="/" className="nav-link">odio</Link>
                        </li>
                        <li>
                            <Link to={"/Fermentum"} className="nav-link">fermentum</Link>
                        </li>
                        <li>
                            <Link to={"/Donec"} className="nav-link">donec</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        <h1 className="text-center">miask</h1>
        <p className="text-center">quam lacus suspendisse</p>
        <div className="container">
        <h3 className="text-center">incididunt ut labore et dolore magna</h3>
            <div className="mt-3 w-50">
                <h5>egestas sed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
            <div>
                <img className="w-25" src="https://i.pinimg.com/originals/44/22/4b/44224bc4ca400f2b5525aca4a0686051.png" />
            </div>
            <div className="mt-3 w-50 float-end">
                <h5>egestas sed lef</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
        </div>
        <div className="container">
            <div className="mt-3 w-50 float-start">
                <h5>egestas sed fed</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
            <div className="mt-3 w-50 float-end">
                <h5>egestas sed ted</h5>
                <p className="text-lowercase">Felis eget nunc lobortis mattis aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.</p>
            </div>
        </div>
        </>

    )
}