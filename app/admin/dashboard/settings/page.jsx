"use client";

import { useState } from "react";

export default function Settings() {

  return (
    <div className="business-settings">
      <h1 className="business-settings__title">Settings</h1>

      <div className="business-settings__subtitle">
        <div>
          <h2>Account</h2>
          <h3>View and update your account details</h3>
        </div>
        <button>Save changes</button>
      </div>

      <div className="business-settings__group">
        <div className="business-settings__group__title">
          <div>Name</div>
          <div>Will appear on receipts, invoices, and other communication.</div>
        </div>
        <div className="business-settings__group__input-group">
          <div>
            <label htmlFor="">First name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="business-settings__group">
        <div className="business-settings__group__title">
          <div>Email address</div>
          <div>Used to sign in, for email receipts and updates.</div>
        </div>
        <div className="business-settings__group__input-group">
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="business-settings__group">
        <div className="business-settings__group__title">
          <div>Avatar</div>
          <div>This will be displayed on your account.</div>
        </div>
        <div className="business-settings__group__avatar">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
              fill="#EFF0EF"
            />
            <path
              d="M0.375 24C0.375 10.9523 10.9523 0.375 24 0.375C37.0477 0.375 47.625 10.9523 47.625 24C47.625 37.0477 37.0477 47.625 24 47.625C10.9523 47.625 0.375 37.0477 0.375 24Z"
              stroke="black"
              stroke-opacity="0.08"
              stroke-width="0.75"
            />
            <path
              d="M33.3334 34.5C33.3334 32.8718 33.3334 32.0578 33.1324 31.3953C32.68 29.9039 31.5128 28.7367 30.0214 28.2843C29.3589 28.0833 28.5448 28.0833 26.9167 28.0833H21.0834C19.4552 28.0833 18.6411 28.0833 17.9787 28.2843C16.4872 28.7367 15.3201 29.9039 14.8676 31.3953C14.6667 32.0578 14.6667 32.8718 14.6667 34.5M29.25 18.75C29.25 21.6495 26.8995 24 24 24C21.1005 24 18.75 21.6495 18.75 18.75C18.75 15.8505 21.1005 13.5 24 13.5C26.8995 13.5 29.25 15.8505 29.25 18.75Z"
              stroke="#929692"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button>Choose</button>
          <div>JPG, GIF or PNG. 1MB Max.</div>
        </div>
      </div>

      <div className="business-settings__group">
        <div className="business-settings__group__title">
          <div>Password</div>
          <div>Confirm your current password before setting a new one.</div>
        </div>
        <div className="business-settings__group__input-group-column">
          <div>
            <input type="password" />
          </div>
          <div>
            <input type="password" />
          </div>
        </div>
      </div>

      <div className="business-settings__save">
        <button>Save changes</button>
      </div>

     
    </div>
  );
}
