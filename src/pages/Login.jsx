import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";



const Login = () => {

  const navegar = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();


  const onSubmit = handleSubmit(async data => {

    // const resp = await iniciarSesion(data);
    // console.log(resp)

    const accion = {
      type: types.login,
      payload: { user: data.user }
    }

    dispatch(accion);

    navegar('/', {
      replace: true
    });

  })

  return (<>
    <div className="formContenedor row sesion">

      <h2 className="mb-5 col"> Iniciar Sesión </h2>

      <form
        method="POST"
        name="Login"
        className=" d-flex flex-column"
        onSubmit={onSubmit}
      >


        <div className="mb-2">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            {...register("user", { required: true })}
          />
        </div>


        <div className="mb-2">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success mt-4"
        >
          Aceptar
        </button>

      </form>

    </div>
  </>

  )
}

export default Login