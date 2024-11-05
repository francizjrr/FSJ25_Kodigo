import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userDataContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
export const Home = () => {


  const { user, setUser} = useContext(userContext);
  const navigate = useNavigate();

  const logout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null);
      navigate('/');

    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }

  return (
    <>
      {user ? (
        <>
          <h1>{user.email}</h1>
          <button onClick={logout}> Sign Out</button>
        </>
      ) : (
        <Link to="/session"><h2>Login</h2></Link>
      )}
    </>
  );
};
