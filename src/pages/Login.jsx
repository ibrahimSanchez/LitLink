// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../auth/authContext";
// import { types } from "../types/types";

import { Container } from "react-bootstrap";
import CarouselComponent from "../components/Carousel";
import SectionComponent from "../components/SectionComponent";
import CardComponent from "../components/CardComponent";

import card2 from '../assets/images/card2.jpeg';
import card3 from '../assets/images/card3.jpeg';
import card4 from '../assets/images/card4.jpeg';



const Login = () => {

  // const navegar = useNavigate();

  // const { dispatch } = useContext(AuthContext);

  // const { register, handleSubmit } = useForm();


  // const onSubmit = handleSubmit(async data => {

  //   // const resp = await iniciarSesion(data);
  //   // console.log(resp)

  //   const accion = {
  //     type: types.login,
  //     payload: { user: data.user }
  //   }

  //   dispatch(accion);

  //   navegar('/', {
  //     replace: true
  //   });

  // })



  return (<>

    <CarouselComponent />
    <SectionComponent
      title='LitLink'
      text='Dive into the world of literature with LitLink—an engaging space for 
            book lovers worldwide. Share your thoughts, reviews, and recommendations,
            and connect with like-minded readers across genres. Track your reading, 
            join book clubs, and even connect with your favorite authors. Join us 
            and let the magic of books bring us together.'
    />

    <div className="row m-5">
      <div className="col mt-5 d-flex flex-column align-items-center">
        <h2 className="mb-3 c-ligtBrown">Our Services</h2>
        <p className="w-75">LitLink offers tailored services for authors,
          publishers, and book enthusiasts. Our platform is your dynamic
          literary hub, providing enhanced online presence to connect with
          readers globally. We foster collaboration between authors and publishers,
          amplify your reach, and engage in lively discussions within our vibrant community.
          Stay updated on authors' latest releases and discover new reads. Join
          LitLink today and celebrate your love for books.
        </p>
      </div>
    </div>

    <Container className="d-flex justify-content-around" >
      <CardComponent
        title='Built-in Reading Experience'
        text='Reflect the immersive and enjoyable reading experience offered by the platform. Highlight the comfort, customization, and immersion in reading'
        image={card2}
      />

      <CardComponent
        title='Community Interaction'
        text='Capture the interaction between readers and authors in a social and welcoming environment. Highlight the two-way communication, exchange of ideas, and creation of meaningful connections.'
        image={card3}
      />

      <CardComponent
        title='Personal Library Management'
        text='Evoke the organization and convenience of having a personalized library. Showcase the ease of access to a wide variety of books and the ability to manage and sort your collection efficiently.'
        image={card4}
      />
    </Container>


    <div className="p-5 mt-5 mb-5 d-flex flex-column align-items-center justify-content-center view" >
      <h4 className="text-light mb-5">
        Connect With Us for All Your Literary Inquiries!
        </h4>
      <p className="w-75 text-light">
        Whether you're seeking book recommendations or have questions about our platform,
        feel free to reach out to us! Our team is dedicated to assisting you in exploring
        the vast world of literature. Don't hesitate to get in touch—we're here to help!
      </p>
    </div>

  </>

  )
}

export default Login;

























{/* 
    <div className="row">
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

    </div> */}