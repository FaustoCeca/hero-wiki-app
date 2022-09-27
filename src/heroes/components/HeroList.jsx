import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);
    
    return (
    <div className="animate__animated animate__fadeIn row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {
            heroes.map( hero => (
                <HeroCard key={ hero.id } hero={ hero } />
            ))
        }
    </div>
  )
}

export default HeroList;