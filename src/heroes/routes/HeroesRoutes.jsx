import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:heroId" element={<HeroPage />} />

                <Route path="/" element={ <Navigate to={'/marvel'}/> }/>
            </Routes>    
        </div>
    </>
  )
}

export default HeroesRoutes;