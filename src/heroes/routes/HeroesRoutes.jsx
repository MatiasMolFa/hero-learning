import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/components'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <div className='container'>
            <Routes>
                <Route path="/marvel" element={ <MarvelPage/>} />
                <Route path="/dc" element={ <DcPage/>} />
                
                <Route path="/search" element={ <SearchPage/> } />
                <Route path="/hero/:heroId" element= { <HeroPage/>} />

                <Route path="/" element={<Navigate to="/marvel"/> } />
            </Routes>
        </div>
    </>
  )
}
