import { useState } from "react";
import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";
import { Link } from "react-router-dom";

export const Session = () => {
  // useState(El VALOR INICIAL)
  const [typeForm, setTyperForm] = useState("Login");
  return (
    <>
      <Link to= "/">Regresar</Link>
      <br/>
      <h1>Manejo de sesion</h1>
      <button onClick={() => { setTyperForm ('Login')}}>Login</button>
      <button onClick={() => { setTyperForm ('Sign in')}}>Sing in</button>
      {/* Redenrizacion Condicional*/}
      {typeForm === "Login" ? <LoginFormComponent/> : <RegisterFormComponent/> }
    </>
  );
};
