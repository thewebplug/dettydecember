"use client";

import { useState } from "react";

export default function Login() {
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
          <div className="login__card-grid__box2">
          <h2 className="register__card-grid__box2__step"></h2>

            <h1 className="login__card-grid__box2__title">Sign In</h1>
            <h2 className="login__card-grid__box2__subtitle">
            New to DettyDecember? <span>Sign Up</span>
            </h2>
            <label className="login__card-grid__box2__label" htmlFor="email">
              Email Address
            </label>
            <input className="login__card-grid__box2__input" type="email" />
            <label className="login__card-grid__box2__label" htmlFor="email">
              Password
            </label>
            <input
              className="login__card-grid__box2__input"
              type="password"
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

            <button className="login__card-grid__box2__button">
            Sign In
            </button>
          </div>
        </div>
    </main>
)
}