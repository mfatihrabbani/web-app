import { useEffect, useState } from "react";

function ForgotPassword(){
  const [error, setError] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPasword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [token, setToken] = useState("");

    useEffect(() => {
        const parameters = new URLSearchParams(window.location.search)
        const tokens = parameters.get('token')
        setToken(tokens)
        if(token == null || token == undefined){
            setError(true)
            setErrorMessage("GADA TOKEN")
        }
    })

  const submitDataForgotPassword = async () => {
    let response = await fetch("http://localhost:3001/api/users/forgot", {
      method: "POST",
      body: JSON.stringify({
        newPassword,
        confirmPasword,
        token
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    response = await response.json()

    if(response.status !== 200){
      setError(true)
      setErrorMessage("INVALID TOKEN")
      return
    }
  }
  

    function handleSubmitForgotPassword(event){
        event.preventDefault()
        console.log({
            newPassword,
            confirmPasword
        })
        submitDataForgotPassword()
        if(error){
          return(
            <>
            <h1>{errorMessage}</h1>
            </>
          )
        }
    }

    if(error){
        return(
            <>
            <h1>{errorMessage}</h1>
            </>
        )
     
    }

    return(
        <div className="auth-Form-container">
        <form className="auth-form" onSubmit={handleSubmitForgotPassword}>
          <div className="auth-content">
            <h3 className="auth-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="New Password"
                onChange={(e) => {
                    setNewPassword(e.target.value)
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
          </div>
        </form>
      </div>
    );

}

export default ForgotPassword