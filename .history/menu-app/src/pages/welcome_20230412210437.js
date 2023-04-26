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
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds-768x432.jpg" alt="First slide" />
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
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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