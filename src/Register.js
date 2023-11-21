import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./components/Buttons";
import TextInput from "./components/TextInput";
import { Logo } from "./components/Logo";

const validate = (values) => {
  const errors = {};

  if (!values.usernameRegister) {
    errors.usernameRegister = "Requerido";
  }

  if (!values.emailRegister) {
    errors.emailRegister = "Requerido";
  }

  if (!values.password1Register) {
    errors.username = "Requerido";
  }

  if (!values.password2Register) {
    errors.password2Register = "Requerido";
  }

  if(!(values.password1Register === values.password2Register)){
    errors.password2Register = "Las contraseñas deben ser iguales."
  }

  return errors;
};

const Register = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const navigate = useNavigate();

  if(redirectToLogin){
    navigate("/Login");
  }

  return (
    <Formik
      initialValues= {{usernameRegister: "", emailRegister: "", password1Register: "", password2Register: "" }}
      validate={validate}
      onSubmit={values => {
        localStorage.setItem("username", values.usernameRegister);
        localStorage.setItem("email", values.emailRegister);
        localStorage.setItem("password", values.password1Register);
        setRedirectToLogin(true);
      }}
    >
      <div className="login-container col-md-8 col-lg-6 col-xl-4 show">
        <Link to="/" className="login-container-logo">
          <Logo className="col-5 d-flex m-auto" />
        </Link>
        <div className="login-container-form col-md-10">
          <h3 className="login-title">Registrate</h3>

          <Form className="login-form">
            
            <TextInput name="usernameRegister" label="Nombre de usuario" type="text" />
            <TextInput name="emailRegister" label="Correo electrónico" type="email" />
            <TextInput name="password1Register" label="Contraseña" type="password" />
            <TextInput name="password2Register" label="Repetir contraseña" type="password" />

            <Link to="/Login" className="login-text text-muted">
              <p>¿Ya tienes una cuenta? Inicia sesión aquí</p>
            </Link>

            <Button type="submit" color="violet" col="col-9">
              Crear cuenta
            </Button>
          </Form>
          
        </div>
      </div>
    </Formik>
  );
};

export default Register;
