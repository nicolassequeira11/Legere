import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Style from "./style.css"
import Button from "./components/Buttons";
import TextInput from "./components/TextInput";
import { Logo } from "./components/Logo";

const getUsername = localStorage.getItem("username");
const getPassword = localStorage.getItem("password");

const validate = (values) => {
  const errors = {};

  if(!values.usernameLogin) {
    errors.usernameLogin = "Ingresa un usuario.";
  }

  if(!values.passwordLogin) {
    errors.passwordLogin = "Ingresa una contraseña.";
  }

  if(values.usernameLogin != String(getUsername.trim())){
    errors.usernameLogin = "Este usuario no existe."
  }

  if(values.passwordLogin != String(getPassword.trim())){
    errors.passwordLogin = "La contraseña es invalida."
  }

  return errors;
}

const Login = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  if (redirectToHome) {
    navigate("/");
  }

  return(
    <Formik
      initialValues={{ usernameLogin: "", passwordLogin: "" }}
      validate={validate}
      onSubmit={values => {
        if(values.usernameLogin === String(getUsername) && values.passwordLogin === String(getPassword)){
          setRedirectToHome(true);
          navigate("/");
        }
      }}
    >
      <div className="login-container col-md-8 col-lg-6 col-xl-4">
        <Link to="/" className="login-container-logo">
          <Logo className="col-5 d-flex m-auto" />
        </Link>
        <div className="login-container-form col-md-10">
          <h3 className="login-title">Iniciar sesión</h3>

          <Form className="login-form">
            
            <TextInput name="usernameLogin" label="Usuario" type="text" />
            <TextInput name="passwordLogin" label="Contraseña" type="password" />

            <Link to="/Login" className="login-text text-muted">
              <p>¿Olvidaste tu contraseña?</p>
            </Link>
            <Button type="submit" color="orange" col="col-9">Iniciar sesión</Button>

            <Link className="login-text text-muted">
              <p>¿Eres nuevo?</p>
            </Link>
            <Link to="/Register" className="text-decoration-none">
              <Button color="violet" col="col-9">Crear cuenta</Button>
            </Link>
          </Form>

        </div>
      </div>
    </Formik>
  );
};

export default Login;
