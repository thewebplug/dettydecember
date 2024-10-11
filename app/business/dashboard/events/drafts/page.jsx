"use client"

import FailModal from "@/app/components/failModal";
import { useState } from "react";

export default function EventDraft() {
  const [open, setOpen] = useState(true);

  return (
    <div className="event-draft__inner">
      <div className="event-draft__inner__title">
        Welcome back, [User First Name]!
      </div>
      <div className="event-draft__inner__subtitle">Your drafts</div>
      <div className="event-draft__inner__subsubtitle">
        Finish creating your uncompleted events.
      </div>

      <div className="event-draft__inner__card">
        <div>
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2494_7093)">
            <path
              d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
              fill="#F9FAFA"
              shape-rendering="crispEdges"
            />
            <path
              d="M2.5 11C2.5 5.75329 6.75329 1.5 12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11Z"
              stroke="#EAEBEA"
              shape-rendering="crispEdges"
            />
            <path
              d="M28 24H22M24 28H22M30 20H22M34 19.8V30.2C34 31.8802 34 32.7202 33.673 33.362C33.3854 33.9265 32.9265 34.3854 32.362 34.673C31.7202 35 30.8802 35 29.2 35H22.8C21.1198 35 20.2798 35 19.638 34.673C19.0735 34.3854 18.6146 33.9265 18.327 33.362C18 32.7202 18 31.8802 18 30.2V19.8C18 18.1198 18 17.2798 18.327 16.638C18.6146 16.0735 19.0735 15.6146 19.638 15.327C20.2798 15 21.1198 15 22.8 15H29.2C30.8802 15 31.7202 15 32.362 15.327C32.9265 15.6146 33.3854 16.0735 33.673 16.638C34 17.2798 34 18.1198 34 19.8Z"
              stroke="#565856"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2494_7093"
              x="0"
              y="0"
              width="52"
              height="52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2494_7093"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2494_7093"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="event-draft__inner__card__title">
          <div>Davido Live In Concert</div>
          <div>May 20, 2024</div>
        </div>
        </div>
        <div className="event-draft__inner__card__actions">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4.99984V4.33317C13.3333 3.39975 13.3333 2.93304 13.1517 2.57652C12.9919 2.26292 12.7369 2.00795 12.4233 1.84816C12.0668 1.6665 11.6001 1.6665 10.6667 1.6665H9.33333C8.39991 1.6665 7.9332 1.6665 7.57668 1.84816C7.26308 2.00795 7.00811 2.26292 6.84832 2.57652C6.66667 2.93304 6.66667 3.39975 6.66667 4.33317V4.99984M8.33333 9.58317V13.7498M11.6667 9.58317V13.7498M2.5 4.99984H17.5M15.8333 4.99984V14.3332C15.8333 15.7333 15.8333 16.4334 15.5608 16.9681C15.3212 17.4386 14.9387 17.821 14.4683 18.0607C13.9335 18.3332 13.2335 18.3332 11.8333 18.3332H8.16667C6.76654 18.3332 6.06647 18.3332 5.53169 18.0607C5.06129 17.821 4.67883 17.4386 4.43915 16.9681C4.16667 16.4334 4.16667 15.7333 4.16667 14.3332V4.99984"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="event-draft__inner__card">
        <div>
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2494_7093)">
            <path
              d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
              fill="#F9FAFA"
              shape-rendering="crispEdges"
            />
            <path
              d="M2.5 11C2.5 5.75329 6.75329 1.5 12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11Z"
              stroke="#EAEBEA"
              shape-rendering="crispEdges"
            />
            <path
              d="M28 24H22M24 28H22M30 20H22M34 19.8V30.2C34 31.8802 34 32.7202 33.673 33.362C33.3854 33.9265 32.9265 34.3854 32.362 34.673C31.7202 35 30.8802 35 29.2 35H22.8C21.1198 35 20.2798 35 19.638 34.673C19.0735 34.3854 18.6146 33.9265 18.327 33.362C18 32.7202 18 31.8802 18 30.2V19.8C18 18.1198 18 17.2798 18.327 16.638C18.6146 16.0735 19.0735 15.6146 19.638 15.327C20.2798 15 21.1198 15 22.8 15H29.2C30.8802 15 31.7202 15 32.362 15.327C32.9265 15.6146 33.3854 16.0735 33.673 16.638C34 17.2798 34 18.1198 34 19.8Z"
              stroke="#565856"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2494_7093"
              x="0"
              y="0"
              width="52"
              height="52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2494_7093"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2494_7093"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="event-draft__inner__card__title">
          <div>FunnyBone Live 2024 - Aina's Son</div>
          <div>Feb 14, 2024</div>
        </div>
        </div>
        <div className="event-draft__inner__card__actions">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4.99984V4.33317C13.3333 3.39975 13.3333 2.93304 13.1517 2.57652C12.9919 2.26292 12.7369 2.00795 12.4233 1.84816C12.0668 1.6665 11.6001 1.6665 10.6667 1.6665H9.33333C8.39991 1.6665 7.9332 1.6665 7.57668 1.84816C7.26308 2.00795 7.00811 2.26292 6.84832 2.57652C6.66667 2.93304 6.66667 3.39975 6.66667 4.33317V4.99984M8.33333 9.58317V13.7498M11.6667 9.58317V13.7498M2.5 4.99984H17.5M15.8333 4.99984V14.3332C15.8333 15.7333 15.8333 16.4334 15.5608 16.9681C15.3212 17.4386 14.9387 17.821 14.4683 18.0607C13.9335 18.3332 13.2335 18.3332 11.8333 18.3332H8.16667C6.76654 18.3332 6.06647 18.3332 5.53169 18.0607C5.06129 17.821 4.67883 17.4386 4.43915 16.9681C4.16667 16.4334 4.16667 15.7333 4.16667 14.3332V4.99984"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="event-draft__inner__card">
        <div>
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2494_7093)">
            <path
              d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
              fill="#F9FAFA"
              shape-rendering="crispEdges"
            />
            <path
              d="M2.5 11C2.5 5.75329 6.75329 1.5 12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11Z"
              stroke="#EAEBEA"
              shape-rendering="crispEdges"
            />
            <path
              d="M28 24H22M24 28H22M30 20H22M34 19.8V30.2C34 31.8802 34 32.7202 33.673 33.362C33.3854 33.9265 32.9265 34.3854 32.362 34.673C31.7202 35 30.8802 35 29.2 35H22.8C21.1198 35 20.2798 35 19.638 34.673C19.0735 34.3854 18.6146 33.9265 18.327 33.362C18 32.7202 18 31.8802 18 30.2V19.8C18 18.1198 18 17.2798 18.327 16.638C18.6146 16.0735 19.0735 15.6146 19.638 15.327C20.2798 15 21.1198 15 22.8 15H29.2C30.8802 15 31.7202 15 32.362 15.327C32.9265 15.6146 33.3854 16.0735 33.673 16.638C34 17.2798 34 18.1198 34 19.8Z"
              stroke="#565856"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2494_7093"
              x="0"
              y="0"
              width="52"
              height="52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2494_7093"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2494_7093"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="event-draft__inner__card__title">
          <div>SocialLiga Lagos</div>
          <div>June 30, 2024</div>
        </div>
        </div>
        <div className="event-draft__inner__card__actions">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4.99984V4.33317C13.3333 3.39975 13.3333 2.93304 13.1517 2.57652C12.9919 2.26292 12.7369 2.00795 12.4233 1.84816C12.0668 1.6665 11.6001 1.6665 10.6667 1.6665H9.33333C8.39991 1.6665 7.9332 1.6665 7.57668 1.84816C7.26308 2.00795 7.00811 2.26292 6.84832 2.57652C6.66667 2.93304 6.66667 3.39975 6.66667 4.33317V4.99984M8.33333 9.58317V13.7498M11.6667 9.58317V13.7498M2.5 4.99984H17.5M15.8333 4.99984V14.3332C15.8333 15.7333 15.8333 16.4334 15.5608 16.9681C15.3212 17.4386 14.9387 17.821 14.4683 18.0607C13.9335 18.3332 13.2335 18.3332 11.8333 18.3332H8.16667C6.76654 18.3332 6.06647 18.3332 5.53169 18.0607C5.06129 17.821 4.67883 17.4386 4.43915 16.9681C4.16667 16.4334 4.16667 15.7333 4.16667 14.3332V4.99984"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#929692"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="event-draft__inner__footer">
        <div className="event-draft__inner__footer__title">
          <div>Create a new event</div>
          <div>Proceed to create a new event</div>
        </div>

        <button>Get started now</button>
      </div>

       <FailModal pen={open} setOpen={setOpen}
      title={"Delete draft"}
      subtitle={"Are you sure you want to delete this event draft? This action cannot be undone."}
      buttonText={["No cancel", "Yes, delete"]}
      callback={[() => setOpen(false), () => setOpen(false)]}
      group={true}
      />
    </div>
  );
}
