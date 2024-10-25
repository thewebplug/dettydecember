"use client";

import { useEffect, useState } from "react";
import { picksData } from "../components/userComponents/picksForMe/picksData";
import { PicksItems } from "../components/userComponents/picksForMe/PicksItems";
import Image from "next/image";
import Footer from "../components/footer";
import HomeHeader from "../components/home/header";
import { adminGetEvents } from "../apis/events";
import { useSelector } from "react-redux";

export default function UserHome() {
    const auth = useSelector((state) => state.auth);
  const [list, setList] = useState(3);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [events, setEvents] = useState([]);

  const slicedData = picksData.slice(0, list);

  const handleGetEvents = async () => {
      const response = await adminGetEvents(auth?.token);
    console.log("response from API", response);
    if (response?.status === 200) {
      setEvents(response?.data);
    } else {
      alert(response?.data?.message);
    }
  };



  useEffect(() => {
    handleGetEvents();
  }, []);


  return (
    <>
    <div className="user-home">
      <main>
        <div className="user-home__hero">
          <HomeHeader />
          <div className="user-home__hero__main">
            <div className="user-home__hero__main__search">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10.8334C11.3807 10.8334 12.5 9.71413 12.5 8.33342C12.5 6.9527 11.3807 5.83341 10 5.83341C8.6193 5.83341 7.50001 6.9527 7.50001 8.33342C7.50001 9.71413 8.6193 10.8334 10 10.8334Z"
                    stroke="#929692"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 18.3334C13.3333 15.0001 16.6667 12.0153 16.6667 8.33342C16.6667 4.65152 13.6819 1.66675 10 1.66675C6.31811 1.66675 3.33334 4.65152 3.33334 8.33342C3.33334 12.0153 6.66668 15.0001 10 18.3334Z"
                    stroke="#929692"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input type="text" placeholder="State or City" />
              </div>

              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                    stroke="#929692"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <select name="" id="">
                  <option value="">May 20, 2024</option>
                </select>
              </div>

              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                    stroke="#929692"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Search by Artist, Event or Venue"
                />

                <button>Search</button>
              </div>
            </div>

            <div className="user-home__hero__main__slide">
              <div className="user-home__hero__main__slide__item">
                <svg
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.5" cy="4" r="3" fill="#02A056" />
                </svg>
                Music concerts
              </div>

              <h1 className="user-home__hero__main__slide__title">
                Asake Live in Concert
              </h1>
              <h2 className="user-home__hero__main__slide__subtitle">
                Be the first to buy this ticket.
              </h2>
              <button>Get ticket</button>

              <svg
                className="user-home__hero__main__slide__nav-right"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                  fill-opacity="0.3"
                />
                <path
                  d="M16 24H32M32 24L26 18M32 24L26 30"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                className="user-home__hero__main__slide__nav-left"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                  fill-opacity="0.3"
                />
                <path
                  d="M32 24H16M16 24L22 30M16 24L22 18"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
       <div className="user-home__grid">
        <div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Our top picks</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                onClick={() => window.location.href="/users/picks"}
                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__filter">
              <button 
              className={selectedFilter === "All Dates" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("All Dates")}>All Dates</button>
              <button 
              className={selectedFilter === "Today" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("Today")}>Today</button>
              <button 
              className={selectedFilter === "This Weekend" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Weekend")}>This Weekend</button>
              <button 
              className={selectedFilter === "This Week" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Week")}>This Week</button>
              <button 
              className={selectedFilter === "This Month" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Month")}>This Month</button>
              <button 
              className={selectedFilter === "Next 30 Days" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("Next 30 Days")}>Next 30 Days</button>
            </div>

            <div className="user-home__grid__picks__card1__grid">
              {events?.slice(0, 3)?.map((event) => {
                return <PicksItems key={event._id} event={event} />;
              })}
            </div>
          </div>
        </div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Top selling events</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                                onClick={() => window.location.href="/users/top-events"}

                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__grid">
               {events?.slice(0, 3)?.map((event) => {
                return <PicksItems key={event._id} event={event} />;
              })}
            </div>
          </div>
        </div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>DettyDecember deals</div>
            </div>

            <div className="user-home__grid__picks__card1__banners">
              <div>
                <div>
                  <div>Spa date experience</div>
                  <div>Enjoy this special deal tailored for you!</div>
                </div>

                <button>See deal</button>
              </div>
              <div>
                <div>
                  <div>Spa date experience</div>
                  <div>Enjoy this special deal tailored for you!</div>
                </div>

                <button>See deal</button>
              </div>
            </div>
          </div>
        </div>

        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Special offers</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                onClick={() => window.location.href="/users/special-offers"}
                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__grid">
               {events?.slice(0, 3)?.map((event) => {
                return <PicksItems key={event._id} event={event} />;
              })}
            </div>
          </div>
        </div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Explore artists</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                  onClick={() => window.location.href="/users/artists"}

                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__artist-grid">
              <div
                  onClick={() => window.location.href = "/users/artists/1"}
                  >
                <div>
                  <div>Asake</div>

                  <div>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="white"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    54 events
                  </div>
                </div>

                <Image
                  style={{ borderRadius: "12px" }}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
              onClick={() => window.location.href = "/users/artists/1"}
              >
                <div>
                  <div>Burna Boy</div>

                  <div>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="white"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    79 events
                  </div>
                </div>

                <Image
                  style={{ borderRadius: "12px" }}
                  src="/assets/burna.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
              onClick={() => window.location.href = "/users/artists/1"}
              >
                <div>
                  <div>
                    Tiwa <br /> Savage
                  </div>

                  <div>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="white"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    91 events
                  </div>
                </div>

                <Image
                  style={{ borderRadius: "12px" }}
                  src="/assets/tiwa.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
              onClick={() => window.location.href = "/users/artists/1"}
              >
                <div>
                  <div>Wizkid</div>

                  <div>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="white"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    123 events
                  </div>
                </div>

                <Image
                  style={{ borderRadius: "12px" }}
                  src="/assets/wiz.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Explore venues</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                onClick={() => window.location.href="/users/venues"}
                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__venues">
              <div className="user-home__grid__picks__card1__venues__card"
              onClick={() => window.location.href="/users/venues/1"}
              >
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/eko.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__venues__card__item">
                  <div className="user-home__grid__picks__card1__venues__card__item__title">
                    Eko Atlantic City
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 10.6668C9.10457 10.6668 10 9.7714 10 8.66683C10 7.56226 9.10457 6.66683 8 6.66683C6.89544 6.66683 6 7.56226 6 8.66683C6 9.7714 6.89544 10.6668 8 10.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 16.6668C10.6667 14.0002 13.3333 11.6123 13.3333 8.66683C13.3333 5.72131 10.9455 3.3335 8 3.3335C5.05449 3.3335 2.66667 5.72131 2.66667 8.66683C2.66667 11.6123 5.33334 14.0002 8 16.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Lagos
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    227 events
                  </div>
                </div>
              </div>
              <div className="user-home__grid__picks__card1__venues__card"
              onClick={() => window.location.href="/users/venues/1"}
              >
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/transcorp.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__venues__card__item">
                  <div className="user-home__grid__picks__card1__venues__card__item__title">
                    Transcorp Hilton Abuja
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 10.6668C9.10457 10.6668 10 9.7714 10 8.66683C10 7.56226 9.10457 6.66683 8 6.66683C6.89544 6.66683 6 7.56226 6 8.66683C6 9.7714 6.89544 10.6668 8 10.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 16.6668C10.6667 14.0002 13.3333 11.6123 13.3333 8.66683C13.3333 5.72131 10.9455 3.3335 8 3.3335C5.05449 3.3335 2.66667 5.72131 2.66667 8.66683C2.66667 11.6123 5.33334 14.0002 8 16.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Abuja
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    302 events
                  </div>
                </div>
              </div>
              <div className="user-home__grid__picks__card1__venues__card"
              onClick={() => window.location.href="/users/venues/1"}
              >
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/hotel.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__venues__card__item">
                  <div className="user-home__grid__picks__card1__venues__card__item__title">
                    Eko Hotels & Suites
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 10.6668C9.10457 10.6668 10 9.7714 10 8.66683C10 7.56226 9.10457 6.66683 8 6.66683C6.89544 6.66683 6 7.56226 6 8.66683C6 9.7714 6.89544 10.6668 8 10.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 16.6668C10.6667 14.0002 13.3333 11.6123 13.3333 8.66683C13.3333 5.72131 10.9455 3.3335 8 3.3335C5.05449 3.3335 2.66667 5.72131 2.66667 8.66683C2.66667 11.6123 5.33334 14.0002 8 16.6668Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Lagos
                  </div>
                  <div className="user-home__grid__picks__card1__venues__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    147 events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Explore event organizers</div>

              <div>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M26.6666 20H13.3333M13.3333 20L18.3333 25M13.3333 20L18.3333 15"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                      fill="#F9FAFA"
                    />
                    <path
                      d="M13.3333 20H26.6666M26.6666 20L21.6666 15M26.6666 20L21.6666 25"
                      stroke="#929692"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                onClick={() => window.location.href="/users/organizers"}
                >
                  See all
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#565856"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user-home__grid__picks__card1__orgs">
              <div className="user-home__grid__picks__card1__orgs__card"
              onClick={() => window.location.href ="/users/organizers/1"}
              >
                <div className="user-home__grid__picks__card1__orgs__card__img">
                  <Image
                    style={{borderRadius: "12px 12px 0 0"}}
                    src="/assets/org.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__orgs__card__item">
                  <div className="user-home__grid__picks__card1__orgs__card__item__img">
                    <Image
                      // style={{borderRadius: "12px"}}
                      src="/assets/Avatar.png"
                      alt="MyWishlist-img"
                      className="rounded-t-lg "
                      loading="lazy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__title">
                    Livespot 360
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    216 events
                  </div>
                </div>
              </div>
              <div className="user-home__grid__picks__card1__orgs__card"
              onClick={() => window.location.href ="/users/organizers/1"}
              >
                <div className="user-home__grid__picks__card1__orgs__card__img">
                  <Image
                    style={{borderRadius: "12px 12px 0 0"}}
                    src="/assets/org.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__orgs__card__item">
                  <div className="user-home__grid__picks__card1__orgs__card__item__img">
                    <Image
                      // style={{borderRadius: "12px"}}
                      src="/assets/toro.png"
                      alt="MyWishlist-img"
                      className="rounded-t-lg "
                      loading="lazy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__title">
                  Toro Entertainment Company
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    116 events
                  </div>
                </div>
              </div>

              <div className="user-home__grid__picks__card1__orgs__card"
              onClick={() => window.location.href ="/users/organizers/1"}
              >
                <div className="user-home__grid__picks__card1__orgs__card__img">
                  <Image
                    style={{borderRadius: "12px 12px 0 0"}}
                    src="/assets/org.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__orgs__card__item">
                  <div className="user-home__grid__picks__card1__orgs__card__item__img">
                    <Image
                      // style={{borderRadius: "12px"}}
                      src="/assets/fly.png"
                      alt="MyWishlist-img"
                      className="rounded-t-lg "
                      loading="lazy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__title">
                  Flytime Entertainment
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    103 events
                  </div>
                </div>
              </div>
              <div className="user-home__grid__picks__card1__orgs__card"
              onClick={() => window.location.href ="/users/organizers/1"}
              >
                <div className="user-home__grid__picks__card1__orgs__card__img">
                  <Image
                    style={{borderRadius: "12px 12px 0 0"}}
                    src="/assets/org.png"
                    alt="MyWishlist-img"
                    className="rounded-t-lg "
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="user-home__grid__picks__card1__orgs__card__item">
                  <div className="user-home__grid__picks__card1__orgs__card__item__img">
                    <Image
                      // style={{borderRadius: "12px"}}
                      src="/assets/afro.png"
                      alt="MyWishlist-img"
                      className="rounded-t-lg "
                      loading="lazy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__title">
                  Afro Nation
                  </div>
                  <div className="user-home__grid__picks__card1__orgs__card__item__subtitle">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16H14M4 14V8.66665M6.66667 14V8.66665M9.33333 14V8.66665M12 14V8.66665M13.3333 6.66665L8.28267 3.50998C8.18012 3.44589 8.12885 3.41385 8.07386 3.40135C8.02524 3.3903 7.97476 3.3903 7.92614 3.40135C7.87115 3.41385 7.81988 3.44589 7.71733 3.50998L2.66667 6.66665H13.3333Z"
                        stroke="#929692"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    97 events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Why choose DettyDecember</div>

       
            </div>

            <div className="user-home__grid__picks__card1__why">
                <div className="user-home__grid__picks__card1__why__card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#EEFCF5"/>
<path d="M25 14L16.0935 24.6879C15.7446 25.1064 15.5702 25.3157 15.5676 25.4925C15.5653 25.6461 15.6337 25.7923 15.7533 25.8889C15.8907 26 16.1632 26 16.708 26H24L23 34L31.9065 23.3121C32.2554 22.8936 32.4298 22.6843 32.4324 22.5075C32.4347 22.3539 32.3663 22.2077 32.2467 22.1111C32.1093 22 31.8368 22 31.292 22H24L25 14Z" stroke="#028C4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__why__card__title">
Event <br />discovery
</div>
<div className="user-home__grid__picks__card1__why__card__subtitle">
Placeholder text, placeholder text, placeholder text.
</div>

                </div>
                <div className="user-home__grid__picks__card1__why__card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#EEFCF5"/>
<path d="M25 14L16.0935 24.6879C15.7446 25.1064 15.5702 25.3157 15.5676 25.4925C15.5653 25.6461 15.6337 25.7923 15.7533 25.8889C15.8907 26 16.1632 26 16.708 26H24L23 34L31.9065 23.3121C32.2554 22.8936 32.4298 22.6843 32.4324 22.5075C32.4347 22.3539 32.3663 22.2077 32.2467 22.1111C32.1093 22 31.8368 22 31.292 22H24L25 14Z" stroke="#028C4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__why__card__title">
Exclusive <br /> offers
</div>
<div className="user-home__grid__picks__card1__why__card__subtitle">
Placeholder text, placeholder text, placeholder text.
</div>

                </div>
                <div className="user-home__grid__picks__card1__why__card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#EEFCF5"/>
<path d="M25 14L16.0935 24.6879C15.7446 25.1064 15.5702 25.3157 15.5676 25.4925C15.5653 25.6461 15.6337 25.7923 15.7533 25.8889C15.8907 26 16.1632 26 16.708 26H24L23 34L31.9065 23.3121C32.2554 22.8936 32.4298 22.6843 32.4324 22.5075C32.4347 22.3539 32.3663 22.2077 32.2467 22.1111C32.1093 22 31.8368 22 31.292 22H24L25 14Z" stroke="#028C4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__why__card__title">
Guided <br /> Tours
</div>
<div className="user-home__grid__picks__card1__why__card__subtitle">
Placeholder text, placeholder text, placeholder text.
</div>

                </div>
                <div className="user-home__grid__picks__card1__why__card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#EEFCF5"/>
<path d="M25 14L16.0935 24.6879C15.7446 25.1064 15.5702 25.3157 15.5676 25.4925C15.5653 25.6461 15.6337 25.7923 15.7533 25.8889C15.8907 26 16.1632 26 16.708 26H24L23 34L31.9065 23.3121C32.2554 22.8936 32.4298 22.6843 32.4324 22.5075C32.4347 22.3539 32.3663 22.2077 32.2467 22.1111C32.1093 22 31.8368 22 31.292 22H24L25 14Z" stroke="#028C4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__why__card__title">
Ticket <br /> resales
</div>
<div className="user-home__grid__picks__card1__why__card__subtitle">
Placeholder text, placeholder text, placeholder text.
</div>

                </div>
            </div>
            </div>
            </div>

            <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>Explore more on DettyDecember</div>

       
            </div>

            <div className="user-home__grid__picks__card1__explore">
            <div>
Event in Lagos
</div>
<div>
Event in Abuja
</div>
<div>
Event in Lekki, Lagos
</div>
<div>
Event in Ibadan, Oyo
</div>
<div>
Event in Victoria Island, Lagos
</div>
Event in Lagos
<div>
Event in Maitama, Abuja
</div>
<div>
Event in Lagos
</div>
<div>
Event in Abuja
</div>
<div>
Event in Lekki, Lagos
</div>
<div>
Event in Ibadan, Oyo
</div>
<div>
Event in Victoria Island, Lagos
</div>
Event in Lagos
<div>
Event in Maitama, Abuja
</div>
<div>
Event in Lagos
</div>
<div>
Event in Lagos
</div>
<div>
Event in Abuja
</div>
<div>
Event in Lekki, Lagos
</div>
<div>
Event in Ibadan, Oyo
</div>
            </div>

            
            </div>
            </div>
        </div>
        <div className="user-home__grid__card2">
            <div className="user-home__grid__card2__banner">
            Advertisement Banner
            </div>
            <div className="user-home__grid__card2__banner">
            Advertisement Banner
            </div>
        </div>
       </div>
      </main>

    </div>
    <Footer />
    </>
  );
}
