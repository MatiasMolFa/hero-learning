import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string';
import { HeroCard } from "../components/HeroCard"

import { useForm } from "../hooks/useForm"
import { getHeroByName } from "../helper";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );

  const heroes = getHeroByName(q);

  const { searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = ( e ) =>{
    e.preventDefault();
    navigate(`?q=${ searchText.toLowerCase().trim()}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4> Searching </h4>
          <hr/>
          <form onSubmit={ onSearchSubmit }>
            <input type="text" placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={ onInputChange}/>
            <button className="btn btn-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>
            Results
          </h4>
          <hr/>
          { q === '' &&(
            <div className="alert alert-primary">
              Search a hero
            </div>
          )}
          { heroes.length === 0 && q !== '' && (
            <div className="alert alert-danger">
              No hero with { q }
            </div>
          )}
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}/>        
            ))
          }         
        </div>
      </div>
    </>
  )
}
