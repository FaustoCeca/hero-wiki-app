import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo( () => getHeroById( heroId ), [ heroId ]); 
  const { id, superhero, alter_ego, first_appearance, publisher, characters } = hero;

  const onReturn = () => {
    navigate( -1 );
  }

  const heroImgUrl = `/assets/heroes/${ id }.jpg`;

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img src={ heroImgUrl } alt={ superhero } className="img-thumbnail" />
        </div>

        <div className="col-8">
          <h3>{ superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter Ego:</b> { alter_ego } </li>
            <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
            <li className="list-group-item"> <b>First appearance:</b> { first_appearance } </li>
          </ul>

          <h5 className="mt-3"> Characters </h5>
          <p>{ characters }</p>

          <button className="btn btn-outline-primary" onClick={ onReturn }>
            Back
          </button>
        </div>
    </div>
  )
}

export default HeroPage;