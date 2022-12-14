import { Navigate,useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helper';
import { useMemo } from 'react';
import 'animate.css';

export const HeroPage = () => {

  const { heroId} = useParams();
  const hero = useMemo( () => getHeroById( heroId ), [heroId]); // Cuando el id cambie, el segundo sera diferente y por ende disparara la funcion nuevamente
  const navigate = useNavigate();

  const onBack = () =>{
    const back = hero.publisher.includes('Marvel Comics') ? 'marvel' : 'dc';
    navigate(`/${back}`);
  }

  if( !hero ){
    return <Navigate to="/marvel"/>
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={ `/assets/heroes/${hero.id}.jpg`}
          alt={ hero.superhero }
          className='img-thumnail'
        />
      </div>
      <div className="col-8">
        <h1>{ hero.superhero }</h1>
        <ul className='list-group list-group-flush'>
          <li className="list-group-item"><b>Alter ego: </b> { hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b> { hero.publisher }</li>
          <li className="list-group-item"><b>First appearance: </b> { hero.first_appearance }</li>
        </ul>
        <h5 className="mt-3"> Characters</h5>
        <p> { hero.characters }</p>
        <button 
          className="btn btn-outline-primary"
          onClick={ onBack }>
          Regresar
        </button>
      </div> 
    </div>
  )
}
