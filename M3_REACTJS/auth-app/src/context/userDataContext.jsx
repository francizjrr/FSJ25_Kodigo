import { createContext, useState } from "react";

//Creación del Contexto
export const userContext = createContext(null);

//Creación del Proveedor: Este es el distribuirdo de Información

//eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);

  /* 
const objUser ={
user,
setUser
} */

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
