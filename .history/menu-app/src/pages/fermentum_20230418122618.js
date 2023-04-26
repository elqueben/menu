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
            <p className="text-center"><i>deserunt mollit anim id est</i></p>
            <div className="container">
                <div className="">
                    <button className="btn btn-primary"></button>
                    <div className="collapse">
                        <div className="card card-body">
                            <img className="w-25 p-2" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449766870-TA5B602ETQ7CEG4DE65B/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg?format=750w"/>
                        </div>
                    </div>
                    <a>
                        <img className="w-25 p-2" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449766870-TA5B602ETQ7CEG4DE65B/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg?format=750w"/>
                    </a>
                    <a>
                        <img className="w-25 p-2" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449766870-TA5B602ETQ7CEG4DE65B/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg?format=750w"/>
                    </a>
                    <a>
                        <img className="w-25 p-2" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449766870-TA5B602ETQ7CEG4DE65B/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg?format=750w"/>
                    </a>
                </div>
            </div>
        </>
    )
}