import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterInterno } from './RouterInterno';
import { RutasPrivadas } from './RutasPrivadas';
import { RutasPublicas } from './RutasPublicas';
import NavBarComponent from '../components/NavBarComponent';
import { MainPage } from '../pages/MainPage';





const AppRouter = () => {
    return (<>
        <NavBarComponent />
        <BrowserRouter>
            <Routes>
                <Route path="/principal" element={
                    <RutasPublicas>
                        <MainPage />
                    </RutasPublicas>
                } />

                <Route path="/*" element={
                    <RutasPrivadas >
                        <RouterInterno />
                    </RutasPrivadas>
                } />

            </Routes>
        </BrowserRouter>
    </>

    )
}

export default AppRouter