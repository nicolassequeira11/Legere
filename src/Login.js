import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Style from "./style.css"
import Button from "./components/Buttons";
import { Logo } from "./components/Logo";

const validate = (values) => {
  const errors = {};

  if(!values.username) {
    errors.username = "Requerido";
  }

  if(!values.password) {
    errors.password = "Requerido";
  }

  return errors;
}

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: values => console.log(values)
  });

  return(
    <div className="login-container col-md-8 col-lg-6 col-xl-4">
      <Link to="/Legere" className="login-container-logo">
        <Logo class="col-5 d-flex m-auto" />
      </Link>
      <div className="login-container-form col-md-10">
        <h3>Iniciar sesión</h3>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <input 
            type="text" 
            className="form-control col-10 m-auto" 
            placeholder="Nombre de usuario"
            {...formik.getFieldProps("username")} />
              {formik.touched.username && formik.errors.username ?
              <div>{formik.errors.username}</div> : null}

          <input 
            type="password" 
            className="form-control col-10 m-auto" 
            placeholder="Contraseña"
            {...formik.getFieldProps("password")} />
              {formik.touched.password && formik.errors.password ?
              <div>{formik.errors.password}</div> : null}

          <a 
            href="#" 
            className="text-decoration-none text-dark">
              ¿Olvidaste tu contraseña?
          </a>
          <Button color="orange">Iniciar sesión</Button>

          <a 
            href="#" 
            className="text-decoration-none text-dark">
              ¿Eres nuevo?
          </a>
          <Button color="violet">Crear cuenta</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
