import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({ 
    searchText: q
   });

   const onSearchSubmit = (e) => {
      e.preventDefault();

      navigate(`?q=${searchText.toLowerCase()}`);
    }

  return (
    <>
        <h1>SearchPage</h1>
        <hr />
      <div className="row">
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text" 
                placeholder="Search a Hero" 
                className="form-control" name="searchText" 
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange } 
              />

              <button type="submit" className="btn btn-primary mt-3">
                Search
              </button>
            </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />

            <div style={{ display: q === '' ? 'block' : 'none' }} className="alert alert-primary animate__animated animate__fadeIn">
              Search a Hero
            </div>

            <div style={{ display: heroes.length === 0 && q !== '' ? 'block' : 'none' }} className="alert alert-danger animate__animated animate__fadeIn">
              There is no a hero with <b> "{ q }" </b>
            </div>

            { 
              heroes.map(hero => (
                <HeroCard key={ hero.id } hero={ hero } />
              ))
            }

        </div>
      </div>
    </>
  )
}

export default SearchPage;