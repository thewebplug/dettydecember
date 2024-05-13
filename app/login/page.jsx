"use client";

import { useEffect, useState } from "react";
import { login } from "../apis/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
console.log('auth', auth);
  }, [auth])


  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();

    const response = await login(
      email, password
    );

    console.log('response', response);
    console.log('hannibal');
    if(response?.status === 201) {
      toast.success(response?.data?.message)
      localStorage.setItem("token", response.data.accessToken);
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          payload: {
            token: response.data.accessToken,
          },
        });
      window.location.href = "/"
    }else{
      toast.error(response?.data?.message)

    }
    setLoading(false)

  }

return (
    <main className="login">
        <div className="login__card-grid">
          <div className="login__card-grid__box1">
            <h1 className="login__card-grid__box1__title">
            Welcome <br /> Back
            </h1>
            <h2 className="login__card-grid__box1__subtitle">
            Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.
            </h2>
          </div>
          <form className="login__card-grid__box2" onSubmit={handleLogin}>
          <h2 className="register__card-grid__box2__step"></h2>

            <h1 className="login__card-grid__box2__title">Sign In</h1>
            <h2 className="login__card-grid__box2__subtitle">
            New to DettyDecember? <span
            onClick={() => window.location.href = "/register"}
            >Sign Up</span>
            </h2>
            <label className="login__card-grid__box2__label" htmlFor="email">
              Email Address
            </label>
            <input className="login__card-grid__box2__input" type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login__card-grid__box2__label" htmlFor="password">
              Password
            </label>
            <input
              className="login__card-grid__box2__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

            <div className="login__card-grid__box2__forgot">
                <div>
                    <input type="checkbox" name="" id="" />
                <h3>Remember me</h3> 
                </div>
                <h3>Forgot Password?</h3>
            </div>

            <h3 className="login__card-grid__box2__terms">
              By continuing past this page, you agree to the 
              <span>Terms of Use</span> and understand that information will be
              used as described in our <span>Privacy Policy</span>.
            </h3>

            <button className="login__card-grid__box2__button" type="submit">
            {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
    </main>
)
}