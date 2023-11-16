import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return(
    <div className="login-input-container">
      <label className="login-label text-muted">{label}</label>
      <input {...field} {...props} className="form-control form-control-lg rounded-4 col-10 m-auto"/>
      
      {meta.touched && meta.error 
        ? <div className="text-start my-2 ms-1 text-danger">{meta.error}</div>
        : null}
    </div>
  )
}

export default TextInput;