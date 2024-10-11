"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEvenCategories } from "../../apis/general";
import { bookEventsLearn, bookUpcomingEvents } from "../../apis/events";
import { countries } from "@/app/utils/countries";

export default function Events() {
  const [modalOpen, setModalOpen] = useState(true);
  const [modalStage, setModalStage] = useState(1);
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/users/dashboard/tickets"
  }
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    setModalStage(2)
  }


  return (
    <main className="admin-register">
      <div className="admin-register__card2">
        <h2 className="admin-register__card2__title">Sign In</h2>

        <h3 className="admin-register__card2__subtitle">
        Please fill in the information below
        </h3>

        <form
          className="admin-register__card2__form"
          onSubmit={handleSubmit}
        >

          <label htmlFor="eventName">Email address</label>
          <input
            type="text"
            placeholder="E.g. adams@dettydecember.xyz"
            name="eventName"
            id="eventName"
            required
            // value={eventName}
            // onChange={(e) => setEventName(e.target.value)}
          />

        
          <label htmlFor="admin-registerPerYear">Password</label>
          <input type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
   
          <div className="admin-register__card2__form__remember">
            <div>
            <input type="checkbox" name="" id="" />
            <div>
            Remember
            </div>
            </div>
            
            <div>
            <div className="pointer" onClick={() => window.location.href = "/users/forgot-password"}>Forgot password?</div>
            </div>
          </div>
          <button className="admin-register__card2__form__button" type="submit">
          Sign in
          </button>
        </form>
      </div>

    
    </main>
  );
}
