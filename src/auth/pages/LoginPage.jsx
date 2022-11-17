import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  const goLogin = () =>{
    navigate('/marvel');
  }

  return (
    <div className="container mt-5">
      <h1> Login </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ goLogin }
      >
        Login
      </button>
    </div>
  )
}
