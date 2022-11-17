import { getHeroesByPublisher } from "../helper"
import { HeroCard } from './HeroCard';
import { useMemo } from "react";

export const HeroeList = ( {publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]) 
    return (
        <div className="row align-items-center justify-content-center rows-xl-1 row-cols-md-5 row-cols-sm-4  row-cols-xs-1 g-3">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} 
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
