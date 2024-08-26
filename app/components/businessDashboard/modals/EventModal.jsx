import React from "react";
import Image from "next/image";
import cancelIcon from "/public/assets/DD/cancel.svg";
export const EventManagementViewModal = ({
  OpenViewModal,
  setOpenViewModal,
  data,
  fees,
  tax,
  payoutTotal,
}) => {
  console.log("data from props", data);

  // format amount
  const formatAmount = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  return (
    <div className="view-event-cover">
      <div className="view-event">
        <div className="view-event__title">
          <div>
            <div>View event</div>
            <div>Get a full preview of your event here.</div>
          </div>

          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 16L16 28M16 16L28 28"
              stroke="#ACAFAC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="view-event__nav">
          <div className="view-event__nav__active">About</div>
          <div>Tickets</div>
          <div>Venue</div>
          <div>Getting To The Venue</div>
          <div>FAQs</div>
        </div>
        <div className="view-event__inner">
          <div className="view-event__inner__inner">
          <div className="view-event__inner__inner__title">About</div>
          <Image
            src="/assets/davido2.png"
            alt="search-icon"
            className=""
            width={500}
            height={500}
          />

          <div className="view-event__inner__inner__subtitle">
            Davido Live In Concert
          </div>

          <div className="view-event__inner__inner__info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>May 20, 2024</div>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 6.59659C2.98438 6.59659 2.51349 6.47088 2.08736 6.21946C1.66122 5.96378 1.32031 5.62287 1.06463 5.19673C0.81321 4.7706 0.6875 4.29972 0.6875 3.78409C0.6875 3.2642 0.81321 2.79332 1.06463 2.37145C1.32031 1.94531 1.66122 1.60653 2.08736 1.35511C2.51349 1.09943 2.98438 0.971591 3.5 0.971591C4.01989 0.971591 4.49077 1.09943 4.91264 1.35511C5.33878 1.60653 5.67756 1.94531 5.92898 2.37145C6.18466 2.79332 6.3125 3.2642 6.3125 3.78409C6.3125 4.29972 6.18466 4.7706 5.92898 5.19673C5.67756 5.62287 5.33878 5.96378 4.91264 6.21946C4.49077 6.47088 4.01989 6.59659 3.5 6.59659Z"
                fill="#ACAFAC"
              />
            </svg>
            <div>8:00 PM</div>
          </div>

          <div className="view-event__inner__inner__info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Eko Atlantic City</div>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 6.59659C2.98438 6.59659 2.51349 6.47088 2.08736 6.21946C1.66122 5.96378 1.32031 5.62287 1.06463 5.19673C0.81321 4.7706 0.6875 4.29972 0.6875 3.78409C0.6875 3.2642 0.81321 2.79332 1.06463 2.37145C1.32031 1.94531 1.66122 1.60653 2.08736 1.35511C2.51349 1.09943 2.98438 0.971591 3.5 0.971591C4.01989 0.971591 4.49077 1.09943 4.91264 1.35511C5.33878 1.60653 5.67756 1.94531 5.92898 2.37145C6.18466 2.79332 6.3125 3.2642 6.3125 3.78409C6.3125 4.29972 6.18466 4.7706 5.92898 5.19673C5.67756 5.62287 5.33878 5.96378 4.91264 6.21946C4.49077 6.47088 4.01989 6.59659 3.5 6.59659Z"
                fill="#ACAFAC"
              />
            </svg>
            <div>Lagos</div>
          </div>

          <div className="view-event__inner__inner__description">
            <div className="view-event__inner__inner__description__title">
              Description
            </div>
          </div>
          </div>
          
        </div>

        <div className="view-event__footer">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};
