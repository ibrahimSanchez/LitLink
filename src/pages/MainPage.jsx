import { Login } from "@mui/icons-material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";


export const MainPage = () => {


  const navegar = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);


  const handleLogout = async () => {

    // const resp = await cerrarSesion(usuario);
    // console.log(resp);        

    dispatch({ type: types.logout })

    navegar('/login', {
        replace: true
    });
}




  return (
    <>
      <div>MainPage</div>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <Login />
      </button>
    </>
  )
}
