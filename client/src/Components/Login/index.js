import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import styles from "./Login.module.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let isAuth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post("/api/users/signin", { email, password });
      if (data) {
        console.log("data: ", data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.reload();
        navigate("/")
        // if (isAuth) {
        //   navigate("/", { replace: true });
        // } 
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Bank Portal Login</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
