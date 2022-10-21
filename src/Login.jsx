function Login() {

  return (
    <div className="auth-Form-container">
      <form className="auth-form">
        <div className="auth-content">
          <h3 className="auth-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input type="email" className="form-control mt-1" placeholder="Email Address"/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" placeholder="Password"/>
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

export default Login;
