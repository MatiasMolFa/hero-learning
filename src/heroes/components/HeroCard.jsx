import { Link } from 'react-router-dom';
import 'animate.css';
import '../components/Hero.styles.css';


const CharactersByHero = ({ alter_ego, character}) => {
    return alter_ego === character ? (<></>) : <p> { character } </p> ;
}

export const HeroCard = ( {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearence,
    character
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    const charactersByHero = (<p> { character }</p>);
    return (
        <div className="col animate__animated animate__fadeIn mt-5">
            <div className="card">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <img src={heroImageUrl} className="card-img-top" alt={ superhero } />
                    </div>
                    <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="card-body">
                            <h5 className="card-title">
                                { superhero }
                            </h5>
                            <p className="card-text">
                                { alter_ego }
                            </p>
                            <CharactersByHero character={ character } alter_ego= { alter_ego } />

                            <p className="card-name">
                                <small className="text-muted"> { first_appearence }</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}
