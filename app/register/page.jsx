"use client";

import { useState, useEffect } from "react";
import { Link } from "next/link";
import { signUp } from "../apis/auth";
import { toast } from "react-toastify";


export default function Register() {
  const [selected, setSelected] = useState(false);
  const [stage, setStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".register__card-grid__box2__otp__input");

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [stage === 3]);


  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    // toast.success("response?.data?.message")

    setStage(2)
  }

  const handlePhoneSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    const response = await signUp(
      email, phone, password, firstName, lastName, country, state,
    );

    console.log('response', response);
    console.log('hannibal');
    if(response?.status === 201) {
      toast.success(response?.data?.message)
      setStage(3);
    }
    setLoading(false)

  }

  return (
    <main className="register">
      {stage === 0 && (
        <div className="register__grid">
          <div className="register__grid__box1">
            <div className="register__grid__box1__header">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="#242323"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2988 18.2988L4.24883 12.2748L10.2988 6.24976"
                  stroke="#242323"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>Back</h2>
            </div>
            <h1 className="register__grid__box1__title">Account type</h1>
            <h2 className="register__grid__box1__subtitle">
              Choose an account type you’d like to sign up for
            </h2>
            <div
              className={
                selected
                  ? "register__grid__box1__card register__grid__box1__card-active"
                  : "register__grid__box1__card"
              }
              onClick={() => setSelected(!selected)}
            >
              <h3 className="register__grid__box1__card__title">Users</h3>
              <h4 className="register__grid__box1__card__subtitle">
                young adults and professionals in Nigeria flock to festive
                events, adept at seamless online booking and mobile experiences.
              </h4>

              {selected && (
                <svg
                  className="register__grid__box1__card-active__svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11.5"
                    fill="white"
                    stroke="#FFD700"
                  />
                  <circle cx="12" cy="12" r="8" fill="#FFD700" />
                </svg>
              )}
            </div>

            <button className="primary-button"
            onClick={() => setStage(1)}
            >
              Continue
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6348 9.78296H3.75977"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8457 5.0137L15.6353 9.7827L10.8457 14.5525"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="register__grid__box2"></div>
        </div>
      )}
      {stage === 1 && (
        <div className="register__card-grid">
          <div className="register__card-grid__box1">
            <h1 className="register__card-grid__box1__title">
              Your All Access Pass
            </h1>
            <h2 className="register__card-grid__box1__subtitle">
              This is it - millions of live events, up to the minute alerts for
              your favorite artists and teams and, of course always safe, secure
              ticketing.
            </h2>
          </div>
          <form className="register__card-grid__box2" onSubmit={handlePersonalDetailsSubmit}>
            <h2 className="register__card-grid__box2__step">Step 1 of 3</h2>
            <h1 className="register__card-grid__box2__title">Sign Up</h1>
            <h2 className="register__card-grid__box2__subtitle">
              Already have a DettyDecember account? <span>Sign In</span>
            </h2>
            <label className="register__card-grid__box2__label" htmlFor="email">
              Email Address
            </label>
            <input className="register__card-grid__box2__input" type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <label className="register__card-grid__box2__label" htmlFor="password">
              Password
            </label>
            <input
              className="register__card-grid__box2__input"
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              />
            <div className="register__card-grid__box2__input-grid">
              <div>
                <label className="" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className=""
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                      />
              </div>
              <div>
                <label className="" htmlFor="lastName">
                  Last Name
                </label>
                <input className="" type="text" placeholder="Enter Last
                 Name" 
                 id="lastName"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 required
                 />
              </div>
            </div>
            <div className="register__card-grid__box2__input-grid">
              <div>
                <label className="" htmlFor="email">
                  Country of Residence
                </label>
                <select name="" id=""
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                 required
                >
                  <option value="">Country</option>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>
              <div>
                <label className="" htmlFor="email">
                  State
                </label>
                <select name="" id=""
                 value={state}
                 onChange={(e) => setState(e.target.value)}
                 required
                >
                  <option value="">Select state</option>
                  <option value="F.C.T">F.C.T</option>
                </select>
              </div>
            </div>

            <h3 className="register__card-grid__box2__terms">
              By continuing past this page, you agree to the 
              <span>Terms of Use</span> and understand that information will be
              used as described in our <span>Privacy Policy</span>.
            </h3>

            <button className="register__card-grid__box2__button"
            type="submit"
            >
              Next
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6348 9.7832H3.75977"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8457 5.01394L15.6353 9.78294L10.8457 14.5527"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
      {stage === 2 && (
        <div className="register__card-grid">
          <div className="register__card-grid__box1">
            <h1 className="register__card-grid__box1__title">
            You’re Almost There
            </h1>
            <h2 className="register__card-grid__box1__subtitle">
              This is it - millions of live events, up to the minute alerts for
              your favorite artists and teams and, of course always safe, secure
              ticketing.
            </h2>
          </div>
          <form className="register__card-grid__box2" 
          onSubmit={handlePhoneSubmit}
          >
            <h2 className="register__card-grid__box2__step">Step 2 of 3</h2>
            <h1 className="register__card-grid__box2__title">Enter Your Phone Number</h1>
            <h2 className="register__card-grid__box2__subtitle">
            Confirming your phone number is an extra layer of verification that helps us confirm you’re not a bot. We’ll send you a one-time code to complete the sign up process.
            </h2>
            <h2 className="register__card-grid__box2__subtitle">
            Please enter your phone number for your account: davidayewah33@gmail.com
            </h2>
            <label className="register__card-grid__box2__label" htmlFor="email">
            Phone Number
            </label>
            <input className="register__card-grid__box2__input" type="text" placeholder="+234"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            />
            
           

            <div className="register__card-grid__box2__terms-group">
              <input type="checkbox" name="" id="" required />
            <h3>I consent to receive notifications about upcoming events and special offers via text message. Applies to mobile numbers only <span>Privacy Policy</span></h3>
            </div>

            <button className="register__card-grid__box2__button"
            type="submit"
            >
              {loading ? "Loading..." : "Next"}
              {!loading && <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6348 9.7832H3.75977"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8457 5.01394L15.6353 9.78294L10.8457 14.5527"
                  stroke="#242323"
                  stroke-width="1.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>}
            </button>
          </form>
        </div>
      )}
      {stage === 3 && (
        <div className="register__card-grid">
          <div className="register__card-grid__box1">
            <h1 className="register__card-grid__box1__title">
            Final Step
            </h1>
            <h2 className="register__card-grid__box1__subtitle">
              This is it - millions of live events, up to the minute alerts for
              your favorite artists and teams and, of course always safe, secure
              ticketing.
            </h2>
          </div>
          <div className="register__card-grid__box2">
            <h2 className="register__card-grid__box2__step">Step 3 of 3</h2>
            <h1 className="register__card-grid__box2__title">Enter Code</h1>
            <h2 className="register__card-grid__box2__subtitle">
            We sent a verification code to your phone number <br /> {phone}
            </h2>
            
            <div className="register__card-grid__box2__otp">
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            <input type="text" className="register__card-grid__box2__otp__input" maxlength="1" />
            </div>
           

            <div className="register__card-grid__box2__terms-group">
              <input type="checkbox" name="" id="" />
            <h3>I consent to receive notifications about upcoming events and special offers via text message. Applies to mobile numbers only <span>Privacy Policy</span></h3>
            </div>

            <button className="register__card-grid__box2__button"
            onClick={() => window.location.href = "/login"}
            >
            Sign Up
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
