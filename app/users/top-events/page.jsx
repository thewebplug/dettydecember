"use client";
import { adminGetEvents } from "@/app/apis/events";
import Footer from "@/app/components/footer";
import HomeHeader from "@/app/components/home/header";
import { PicksItems } from "@/app/components/userComponents/picksForMe/PicksItems";
import { picksData } from "@/app/components/userComponents/picksForMe/picksData";
import { filterEvents } from "@/app/utils/filterEvents";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function HomePicks() {
  const auth = useSelector((state) => state.auth);
  const [list, setList] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [events, setEvents] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const slicedData = picksData.slice(0, list);

  const handleGetEvents = async (filters = {}) => {
    console.log('known filters', filters);
    
    try {
      const response = await adminGetEvents(auth?.token);
      if (response?.status === 200) {
        const allEvents = response?.data;
        const filteredEvents = filterEvents(allEvents, filters);
        console.log('filteredEvents', filteredEvents);

        setEvents(filteredEvents);
      } else {
        alert(response?.data?.message);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Error fetching events");
    }
  };

  const handleFilterChange = (newFilters) => {
    console.log('hello');
    
    // const updatedFilters = { ...activeFilters, ...newFilters };
    const updatedFilters = { ...newFilters };
    console.log('updatedFilters', updatedFilters);

    setActiveFilters(updatedFilters);
    handleGetEvents(updatedFilters);
  };

  // Initial load
  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <>
      <div className="home-picks">
        <main>
          <div className="home-picks__hero">
            <HomeHeader />
            <div className="home-picks__hero__nav">
              Home
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#7A7C79"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Top selling events
            </div>

            <h1 className="home-picks__hero__title">Top selling events</h1>
          </div>
          <div className="home-picks__filter">
            <div className="home-picks__filter__select">
              <select name="" id="">
                <option value="">All categories</option>
              </select>
            </div>
            <div className="home-picks__filter__select">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0002 10.8334C11.3809 10.8334 12.5002 9.71413 12.5002 8.33342C12.5002 6.9527 11.3809 5.83341 10.0002 5.83341C8.61945 5.83341 7.50016 6.9527 7.50016 8.33342C7.50016 9.71413 8.61945 10.8334 10.0002 10.8334Z"
                  stroke="#929692"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0002 18.3334C13.3335 15.0001 16.6668 12.0153 16.6668 8.33342C16.6668 4.65152 13.6821 1.66675 10.0002 1.66675C6.31826 1.66675 3.3335 4.65152 3.3335 8.33342C3.3335 12.0153 6.66683 15.0001 10.0002 18.3334Z"
                  stroke="#929692"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <select name="" id="">
                <option value="">Select your location</option>
              </select>
            </div>

            <div className="home-picks__filter__select">
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
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="date" onChange={(e) => handleFilterChange({ date: e.target.value })} />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#929692"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <button
              className={
                selectedFilter === "All Dates"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {
                setSelectedFilter("All Dates")
                handleFilterChange({})
              }}
            >
              All Dates
            </button>
            <button
              className={
                selectedFilter === "Today"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {setSelectedFilter("Today")
                handleFilterChange({ today: true })
              }}
            >
              Today
            </button>
            <button
              className={
                selectedFilter === "This Weekend"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {setSelectedFilter("This Weekend")
                handleFilterChange({ thisWeekend: true })
              }}
            >
              This Weekend
            </button>
            <button
              className={
                selectedFilter === "This Week"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {
                setSelectedFilter("This Week")
                // handleFilterChange({ thisWeek: true })
              }}
            >
              This Week
            </button>
            <button
              className={
                selectedFilter === "This Month"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {setSelectedFilter("This Month")
                handleFilterChange({ thisMonth: true })
              }}
            >
              This Month
            </button>
            <button
              className={
                selectedFilter === "Next 30 Days"
                  ? "home-picks__filter__button home-picks__filter__button-active"
                  : "home-picks__filter__button"
              }
              onClick={() => {
                setSelectedFilter("Next 30 Days")
                handleFilterChange({ next30Days: true })
              }}
            >
              Next 30 Days
            </button>
          </div>

          <div className="user-home__grid">
            <div>
              <div className="user-home__grid__picks">
                <div className="user-home__grid__picks__card1">
                  

                  <div className="user-home__grid__picks__card1__grid">
                    {events?.map((event) => {
                      return <PicksItems key={event._id} event={event} />;
                    })}
                  </div>
                </div>
              </div>

              <button className="home-picks__more">
                See more
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#929692"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
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
