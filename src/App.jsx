import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import AppRouter from './routes/AppRouter';
import { authReducer } from './auth/authReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}


function App() {

  const [ user, dispatch ] = useReducer( authReducer, {}, init )

  useEffect( () => {
    if( !user ) return;

    localStorage.setItem( 'user', JSON.stringify(user) );
  }, [user]);


  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App;