import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterInterno } from './RouterInterno';
import { RutasPrivadas } from './RutasPrivadas';
import { RutasPublicas } from './RutasPublicas';
import Login from '../pages/Login';





const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path="/login" element={
                    <RutasPublicas>
                        <Login />
                    </RutasPublicas>
                } />
                
                <Route path="/*" element={
                    <RutasPrivadas >
                        <RouterInterno />
                    </RutasPrivadas>
                } />
            
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter