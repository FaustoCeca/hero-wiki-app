import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const LoginPage = () => {

  const { login } = useContext(AuthContext);


  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    login("Javier");

    navigate( lastPath , { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Heroes Wiki</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage;