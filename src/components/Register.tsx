import "./login-register.scss";
import { Link } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="login">
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <span>
            <small>forgot password?</small>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <small>Already have an account?</small>
            </Link>
          </span>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
