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
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 bg-image hover-zoom" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds-768x432.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds-Computer-768x432.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds-Free-Download-768x432.jpg" alt="Third slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <div className="container pt-1">
            <div className="d-flex justify-content-center">
                <img className="w-25 p-2" src="https://wallpapercave.com/dwp1x/wp1951584.jpg" alt="scene4" />
                <img className="w-25 p-2" src="https://wallpapers.com/images/featured-small/anime-scenery-ahd1eqpvwq8aoofp.webp" alt="scene4" />
                <img className="w-25 p-2" src="https://wallpapers.com/images/high/city-sunset-aesthetic-23eb5xx8c6tv6q59.webp" alt="scene4" />
            </div>
        </div>
        <div className="fixed-bottom" style={{backgroundColor: "grey"}}>
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