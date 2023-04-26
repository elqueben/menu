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
                <div>                  
                <p>
                    <button className="w-25 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#card1" aria-expanded="false" aria-controls="card1">
                        <img className="w-75" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449766870-TA5B602ETQ7CEG4DE65B/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg?format=750w" />
                    </button>
                </p>
                    <div className="collapse" id="card1">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>                  
                <p>
                    <button className="w-25 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#card2" aria-expanded="false" aria-controls="card2">
                        <img className="w-75" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449846485-MCEYQIZ797J62HHZ73NM/34360c79c3323df89c722cf95782bfb4.jpeg?format=750w" />
                    </button>
                </p>
                    <div className="collapse" id="card2">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>                  
                <p>
                    <button className="w-25 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#card3" aria-expanded="false" aria-controls="card3">
                        <img className="w-75" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627449928773-A0IKVB2ZNZ6AZL917US8/Kimetsu-Udon-700x394.jpeg?format=750w" />
                    </button>
                </p>
                    <div className="collapse" id="card3">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>                  
                <p>
                    <button className="w-25 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#card4" aria-expanded="false" aria-controls="card4">
                        <img className="w-75" src="https://images.squarespace-cdn.com/content/v1/5eb8df4ad4280a6eb9c4edb2/1627450098208-HZBETWPE4JBN9J7L4ETG/8aebd4eb3880b68d5978223283b12574.jpeg?format=750w" />
                    </button>
                </p>
                    <div className="collapse" id="card4">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}