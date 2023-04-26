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
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="https://wallpapers.com/images/featured-small/anime-scenery-ahd1eqpvwq8aoofp.webp" alt="First slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor: "grey"}}>
            <div className="d-flex justify-content-center">
                <p className="p-2">sunt in</p>
                <p className="p-2">officia</p>
                <p className="p-2">anim</p>
                <p className="p-2">tempor</p>
                <p className="p-2">veniam</p>
            </div>
        </div>
        </>
    )
}