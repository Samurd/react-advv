import { NavLink, Route, Routes } from 'react-router-dom';
import LazyPage3 from '../pages/LazyPage3';
const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                <li><NavLink to="lazy3">Lazy 3</NavLink></li>
            </ul>

            <Routes>
                <Route path='lazy3' element={<LazyPage3 />}></Route>

                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </div>
    )
}

export default LazyLayout;