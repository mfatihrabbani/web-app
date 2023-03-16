import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();


  const handleSubmitRegister = async (event) => {
    event.preventDefault()
    let response = await fetch("http://localhost:3001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword
      })
    })

    response = await response.json()
    console.log(response)
    if(response.status != 200){
      setError(response.message)
    }

  }
  
  return (
    <div className="auth-Form-container">
      <form className="auth-form" onSubmit={handleSubmitRegister}>
        <div className="auth-content">
          <h3 className="auth-title">Sign In</h3>
          {
            error ? 
            <>
              <h4>{error}</h4>
            </>
            :
            <>
              null
            </>
          }
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
