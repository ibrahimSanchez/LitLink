import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';


export const RouterInterno = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Routes>
                <Route path="main" element={<MainPage />} />

                <Route path="/" element={<Navigate to="main" />} />
            </Routes>
            {/* <Footer /> */}
        </>
    )
}
