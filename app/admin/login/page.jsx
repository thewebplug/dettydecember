"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEvenCategories } from "../../apis/general";
import { bookEventsLearn, bookUpcomingEvents } from "../../apis/events";
import { countries } from "@/app/utils/countries";
import { useDispatch } from "react-redux";
import { login } from "@/app/apis/auth";

export default function Events() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(true);
  const [modalStage, setModalStage] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(email, password);
    console.log("login", response);

    if (response?.status === 201) {
      localStorage.setItem("token", response?.data?.accessToken);
      document.cookie = `auth_token=${
        response?.data?.accessToken
      }; path=/; max-age=${60 * 60 * 24 * 7};`;
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: {
          token: response?.data?.accessToken,
        },
      });
      window.location.href = "/admin/dashboard/events";
    } else {
      alert(response?.data?.message);
    }
    setLoading(false);
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    setModalStage(2);
  };

  return (
    <main className="admin-register">
      <div className="admin-register__card2">
        <h2 className="admin-register__card2__title">Sign In</h2>

        <h3 className="admin-register__card2__subtitle">
          Please fill in the information below
        </h3>

        <form className="admin-register__card2__form" onSubmit={handleSubmit}>
          <label htmlFor="eventName">Email address</label>
          <input
            type="text"
            placeholder="E.g. adams@dettydecember.xyz"
            name="eventName"
            id="eventName"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="admin-registerPerYear">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="admin-register__card2__form__remember">
            <div>
              <input type="checkbox" name="" id="" />
              <div>Remember</div>
            </div>

            <div>
              <div
                className="pointer"
                onClick={() =>
                  (window.location.href = "/users/forgot-password")
                }
              >
                Forgot password?
              </div>
            </div>
          </div>
          <button className="admin-register__card2__form__button" type="submit">
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
