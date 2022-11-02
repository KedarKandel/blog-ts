import "./login-register.scss";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <span>
            <small>forgot password?</small>
            <Link
              to="/registerddddd"
              style={{ textDecoration: "none", color: "white" }}
            >
              <small>Don't have an account?</small>
            </Link>
          </span>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
