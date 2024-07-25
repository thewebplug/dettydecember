"use client";
import Footer from "@/app/components/footer";
import HomeHeader from "@/app/components/home/header";
import { PicksItems } from "@/app/components/userComponents/picksForMe/PicksItems";
import { picksData } from "@/app/components/userComponents/picksForMe/picksData";
import Image from "next/image";
import { useState } from "react";
import image from "/public/assets/DD/ticket.png";

export default function HomePicks() {
  const [list, setList] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [faq, setFaq] = useState(0);

  const slicedData = picksData.slice(0, list);

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
              Venues
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
              Eko Hotels & Suites
            </div>

            <h1 className="home-picks__hero__title">Eko Hotels & Suites</h1>
            <div className="home-picks__hero__info">
              <div>
                <div></div>
                <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.66634C9.10457 8.66634 10 7.77091 10 6.66634C10 5.56177 9.10457 4.66634 8 4.66634C6.89544 4.66634 6 5.56177 6 6.66634C6 7.77091 6.89544 8.66634 8 8.66634Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14.6663C10.6667 11.9997 13.3333 9.61186 13.3333 6.66634C13.3333 3.72082 10.9455 1.33301 8 1.33301C5.05449 1.33301 2.66667 3.72082 2.66667 6.66634C2.66667 9.61186 5.33334 11.9997 8 14.6663Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  
                  Lagos</div>
                  <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.86364C2.04167 5.86364 1.62311 5.75189 1.24432 5.52841C0.86553 5.30114 0.5625 4.99811 0.335227 4.61932C0.111742 4.24053 0 3.82197 0 3.36364C0 2.90152 0.111742 2.48295 0.335227 2.10795C0.5625 1.72917 0.86553 1.42803 1.24432 1.20455C1.62311 0.977272 2.04167 0.863636 2.5 0.863636C2.96212 0.863636 3.38068 0.977272 3.75568 1.20455C4.13447 1.42803 4.43561 1.72917 4.65909 2.10795C4.88636 2.48295 5 2.90152 5 3.36364C5 3.82197 4.88636 4.24053 4.65909 4.61932C4.43561 4.99811 4.13447 5.30114 3.75568 5.52841C3.38068 5.75189 2.96212 5.86364 2.5 5.86364Z" fill="white"/>
</svg>

                <div>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18.0005H14M4 16.0005V10.6671M6.66667 16.0005V10.6671M9.33333 16.0005V10.6671M12 16.0005V10.6671M13.3333 8.66714L8.28267 5.51047C8.18012 5.44638 8.12885 5.41434 8.07386 5.40184C8.02524 5.39079 7.97476 5.39079 7.92614 5.40184C7.87115 5.41434 7.81988 5.44638 7.71733 5.51047L2.66667 8.66714H13.3333Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  147 events</div>
              </div>

              <div>
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.79514 17.5003C8.38275 18.019 9.15462 18.3337 10 18.3337C10.8454 18.3337 11.6172 18.019 12.2048 17.5003M15 6.66699V1.66699M12.5 4.16699H17.5M10.8333 1.7369C10.5598 1.69066 10.2811 1.66699 10 1.66699C8.67391 1.66699 7.40214 2.19378 6.46446 3.13146C5.52678 4.06914 5 5.34091 5 6.66699C5 9.24215 4.35039 11.0053 3.62472 12.1715C3.0126 13.1552 2.70654 13.6471 2.71777 13.7843C2.73019 13.9362 2.76238 13.9942 2.88481 14.085C2.99538 14.167 3.49382 14.167 4.49071 14.167H15.5093C16.5061 14.167 17.0046 14.167 17.1151 14.085C17.2375 13.9942 17.2697 13.9362 17.2822 13.7843C17.2934 13.6471 16.9873 13.1551 16.3751 12.1713C15.9651 11.5123 15.5794 10.6627 15.3214 9.58366" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  Get ticket alerts</div>
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5H14.8333C13.4332 5 12.7331 5 12.1984 5.27248C11.728 5.51217 11.3455 5.89462 11.1058 6.36502C10.8333 6.8998 10.8333 7.59987 10.8333 9V10M17.5 5L15 2.5M17.5 5L15 7.5M8.33333 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V11.6667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  Share this venue</div>
              </div>
            </div>
          </div>
          <div className="user-home__nav">
            <div className="user-home__nav__active">Events</div>
            <div>About</div>
            <div>Past Concerts</div>
            <div>Reviews</div>
          </div>

          <div className="user-home__grid">
            <div>
              <div className="user-home__grid__picks">
                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>Events</div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__nav">
                    <div>
                      <div className="user-home__grid__picks__card1-covered__nav__active">
                        Nigeria
                      </div>
                      <div>International</div>
                    </div>

                    <div>
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

                        <input type="date" />
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
                    </div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__filter">
                    <button
                      className={
                        selectedFilter === "Today"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("Today")}
                    >
                      Today
                    </button>
                    <button
                      className={
                        selectedFilter === "This Weekend"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("This Weekend")}
                    >
                      This Weekend
                    </button>
                    <button
                      className={
                        selectedFilter === "This Week"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("This Week")}
                    >
                      This Week
                    </button>
                    <button
                      className={
                        selectedFilter === "This Month"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("This Month")}
                    >
                      This Month
                    </button>
                    <button
                      className={
                        selectedFilter === "Next 30 Days"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("Next 30 Days")}
                    >
                      Next 30 Days
                    </button>
                    <button
                      className={
                        selectedFilter === "Next 30 Days"
                          ? "user-home__grid__picks__card1-covered__filter__button user-home__grid__picks__card1-covered__filter__button-active"
                          : "user-home__grid__picks__card1-covered__filter__button"
                      }
                      onClick={() => setSelectedFilter("Next 30 Days")}
                    >
                      Next 60 Days
                    </button>
                  </div>

                  <section className="flex justify-between user-home__grid__picks__card1-covered__card">
                    <div className="flex gap-6 text-center text-textPrimary ">
                      <div className="flex flex-col justify-between bg-[#F9FAFA] border-[2px] border-[#F9FAFA] ">
                        <span className="text-[#028C4B] bg-[#ECFDF3] px-[8px] py-[4px] font-medium text-[10px]">
                          2 days to go
                        </span>
                        <p className="text-[16px] font-normal leading-[24px]">
                          {" "}
                          AUG
                        </p>
                        <h1 className="text-[32px] font-medium syne leading-[40px]">
                          10
                        </h1>
                      </div>
                      <div className="flex gap-6 ">
                        <div className="w-[100px] h-[100px] ">
                          <Image src={image} alt="Description" />
                        </div>

                        <section className="flex  flex-col justify-between  ">
                          <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                            <h1 className="">Wed Aug 10, 2024</h1>
                            <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                            <h1 className="">8:00 PM</h1>
                          </div>
                          <div className="flex items-center text-[14px] font-bold gap-4">
                            <h1 className="text-[20px] leading-[28px]">
                              Davido Live In Concert
                            </h1>
                          </div>
                          <div className="flex items-center  gap-6 text-[16px] font-normal text-textSecondary">
                            <div className="flex gap-2 items-center">
                              <h1 className="">Eko Atlantic</h1>
                              <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                              <h1 className="">Lagos</h1>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  items-end">
                      <h1 className="text-[20px] text-textPrimary">
                        ₦5,000 - ₦5,000,000
                      </h1>

                      <button className="user-home__grid__picks__card1-covered__card__button-green"
                      onClick={() => window.location.href ="/users/top-events/1"}
                      >
                        View event
                      </button>
                    </div>
                  </section>
                  <section className="flex justify-between user-home__grid__picks__card1-covered__card">
                    <div className="flex gap-6 text-center text-textPrimary ">
                      <div className="flex flex-col justify-between bg-[#F9FAFA] border-[2px] border-[#F9FAFA] ">
                        <span className="text-[#028C4B] bg-[#ECFDF3] px-[8px] py-[4px] font-medium text-[10px]">
                          2 days to go
                        </span>
                        <p className="text-[16px] font-normal leading-[24px]">
                          {" "}
                          AUG
                        </p>
                        <h1 className="text-[32px] font-medium syne leading-[40px]">
                          10
                        </h1>
                      </div>
                      <div className="flex gap-6 ">
                        <div className="w-[100px] h-[100px] ">
                          <Image src={image} alt="Description" />
                        </div>

                        <section className="flex  flex-col justify-between  ">
                          <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                            <h1 className="">Wed Aug 10, 2024</h1>
                            <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                            <h1 className="">8:00 PM</h1>
                          </div>
                          <div className="flex items-center text-[14px] font-bold gap-4">
                            <h1 className="text-[20px] leading-[28px]">
                              Davido Live In Concert
                            </h1>
                          </div>
                          <div className="flex items-center  gap-6 text-[16px] font-normal text-textSecondary">
                            <div className="flex gap-2 items-center">
                              <h1 className="">Eko Atlantic</h1>
                              <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                              <h1 className="">Lagos</h1>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  items-end">
                      <h1 className="text-[20px] text-textPrimary">
                        ₦5,000 - ₦5,000,000
                      </h1>

                      <button className="user-home__grid__picks__card1-covered__card__button-more">
                        More info

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15L15 5M15 5H8.33333M15 5V11.6667" stroke="#02A056" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </button>
                    </div>
                  </section>
                  <section className="flex justify-between user-home__grid__picks__card1-covered__card">
                    <div className="flex gap-6 text-center text-textPrimary ">
                      <div className="flex flex-col justify-between bg-[#F9FAFA] border-[2px] border-[#F9FAFA] ">
                        <span className="text-[#028C4B] bg-[#ECFDF3] px-[8px] py-[4px] font-medium text-[10px]">
                          2 days to go
                        </span>
                        <p className="text-[16px] font-normal leading-[24px]">
                          {" "}
                          AUG
                        </p>
                        <h1 className="text-[32px] font-medium syne leading-[40px]">
                          10
                        </h1>
                      </div>
                      <div className="flex gap-6 ">
                        <div className="w-[100px] h-[100px] ">
                          <Image src={image} alt="Description" />
                        </div>

                        <section className="flex  flex-col justify-between  ">
                          <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                            <h1 className="">Wed Aug 10, 2024</h1>
                            <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                            <h1 className="">8:00 PM</h1>
                          </div>
                          <div className="flex items-center text-[14px] font-bold gap-4">
                            <h1 className="text-[20px] leading-[28px]">
                              Davido Live In Concert
                            </h1>
                          </div>
                          <div className="flex items-center  gap-6 text-[16px] font-normal text-textSecondary">
                            <div className="flex gap-2 items-center">
                              <h1 className="">Eko Atlantic</h1>
                              <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                              <h1 className="">Lagos</h1>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  items-end">
                      <button className="user-home__grid__picks__card1-covered__card__status user-home__grid__picks__card1-covered__card__status-sold">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="3" r="3" fill="rgba(1, 120, 65, 1)"/>
</svg>

                        Sold out
                      </button>

                      <button className="user-home__grid__picks__card1-covered__card__button-gray"
                      onClick={() => window.location.href ="/users/top-events/1"}
                      >
                        View event
                      </button>
                    </div>
                  </section>
                  <section className="flex justify-between user-home__grid__picks__card1-covered__card">
                    <div className="flex gap-6 text-center text-textPrimary ">
                      <div className="flex flex-col justify-between bg-[#F9FAFA] border-[2px] border-[#F9FAFA] ">
                        <span className="text-[#028C4B] bg-[#ECFDF3] px-[8px] py-[4px] font-medium text-[10px]">
                          2 days to go
                        </span>
                        <p className="text-[16px] font-normal leading-[24px]">
                          {" "}
                          AUG
                        </p>
                        <h1 className="text-[32px] font-medium syne leading-[40px]">
                          10
                        </h1>
                      </div>
                      <div className="flex gap-6 ">
                        <div className="w-[100px] h-[100px] ">
                          <Image src={image} alt="Description" />
                        </div>

                        <section className="flex  flex-col justify-between  ">
                          <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                            <h1 className="">Wed Aug 10, 2024</h1>
                            <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                            <h1 className="">8:00 PM</h1>
                          </div>
                          <div className="flex items-center text-[14px] font-bold gap-4">
                            <h1 className="text-[20px] leading-[28px]">
                              Davido Live In Concert
                            </h1>
                          </div>
                          <div className="flex items-center  gap-6 text-[16px] font-normal text-textSecondary">
                            <div className="flex gap-2 items-center">
                              <h1 className="">Eko Atlantic</h1>
                              <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                              <h1 className="">Lagos</h1>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  items-end">
                      <button className="user-home__grid__picks__card1-covered__card__status user-home__grid__picks__card1-covered__card__status-cancelled">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="3" r="3" fill="#F04438"/>
</svg>

                        Cancelled
                      </button>

                      <button className="user-home__grid__picks__card1-covered__card__button-gray"
                      onClick={() => window.location.href ="/users/top-events/1"}
                      >
                        View event
                      </button>
                    </div>
                  </section>
                  <div className="user-home__grid__picks__card1-covered__more">
                    <div className="user-home__grid__picks__card1-covered__more__bar">
                      <div>
                        <div></div>
                      </div>
                      <div>Loaded 20 out of 61 events</div>
                    </div>

                    <button>See more events</button>
                  </div>
                </div>

                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>About</div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__img-grid">
                    <div className="user-home__grid__picks__card1-covered__img-grid__img">
                      <Image
                        alt=""
                        src="/assets/eko1.png"
                        layout="fill"
                        objectFit="cover"
                        style={{borderRadius: "8px"}}
                      />
                    </div>

                    <div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/eko2.png"
                          layout="fill"
                          objectFit="cover"
                          style={{borderRadius: "8px"}}
                        />
                      </div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/eko3.png"
                          layout="fill"
                          objectFit="cover"
                          style={{borderRadius: "8px"}}
                        />
                        <button>See all photos</button>
                      </div>
                    </div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  About Eko Hotel & Suites:
                  </div>
                  <div className="user-home__grid__picks__card1-covered__artist-subtitle">
                  Eko Hotels & Suites is the most preferred hotel in West Africa, and it is all about the right mix! Located in the heart of Victoria Island, we offer our clients a perfect blend of business & leisure amenities with dining and recreational options delicately infused in one amazing space. We crown all these with services that meet the highest international standards.
<br />
<br />
Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just a 10-minute drive to the City Centre and only 45minutes away from the Airport.
<br />
<br />

Our hotels are designed for your comfort and convenience. Your security is our primary concern and you will find our customer care second to none.                  </div>

                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  Connect:
                  </div>

                  <div className="user-home__grid__picks__card1-covered__icons">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_121424)">
<path d="M1.66667 10.0003H18.3333M1.66667 10.0003C1.66667 14.6027 5.39763 18.3337 10 18.3337M1.66667 10.0003C1.66667 5.39795 5.39763 1.66699 10 1.66699M18.3333 10.0003C18.3333 14.6027 14.6024 18.3337 10 18.3337M18.3333 10.0003C18.3333 5.39795 14.6024 1.66699 10 1.66699M10 1.66699C12.0844 3.94895 13.269 6.91035 13.3333 10.0003C13.269 13.0903 12.0844 16.0517 10 18.3337M10 1.66699C7.91561 3.94895 6.73104 6.91035 6.66667 10.0003C6.73104 13.0903 7.91561 16.0517 10 18.3337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_161_121424">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
</svg>


<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3135 7.21939C15.5996 8.14204 17.1752 8.6849 18.8769 8.6849V5.39868C18.5548 5.39875 18.2336 5.36505 17.9186 5.29805V7.88478C16.217 7.88478 14.6416 7.34191 13.3552 6.41934V13.1256C13.3552 16.4804 10.6452 19.1998 7.30257 19.1998C6.05534 19.1998 4.89609 18.8214 3.93311 18.1724C5.0322 19.3002 6.56497 19.9998 8.26071 19.9998C11.6036 19.9998 14.3137 17.2804 14.3137 13.9255V7.21939H14.3135ZM15.4957 3.904C14.8385 3.18336 14.4069 2.25207 14.3135 1.22248V0.799805H13.4054C13.6339 2.10841 14.4137 3.2264 15.4957 3.904ZM6.04735 15.598C5.68012 15.1148 5.48167 14.5237 5.48255 13.9159C5.48255 12.3815 6.72206 11.1374 8.25127 11.1374C8.53627 11.1374 8.81955 11.1812 9.09115 11.2676V7.90798C8.77375 7.86433 8.45342 7.84579 8.13322 7.85259V10.4676C7.86142 10.3811 7.578 10.3372 7.29293 10.3375C5.76372 10.3375 4.52428 11.5814 4.52428 13.116C4.52428 14.201 5.14383 15.1404 6.04735 15.598Z" fill="#FF004F"/>
<path d="M13.3554 6.41927C14.6419 7.34185 16.2172 7.88471 17.9188 7.88471V5.29799C16.969 5.09495 16.1281 4.59684 15.4959 3.904C14.4138 3.22633 13.6342 2.10834 13.4056 0.799805H11.0201V13.9253C11.0147 15.4555 9.77728 16.6945 8.25135 16.6945C7.35214 16.6945 6.55329 16.2644 6.04735 15.598C5.14391 15.1404 4.52436 14.2009 4.52436 13.116C4.52436 11.5816 5.7638 10.3375 7.29301 10.3375C7.586 10.3375 7.8684 10.3833 8.13329 10.4677V7.85266C4.84934 7.92075 2.20825 10.6136 2.20825 13.9254C2.20825 15.5787 2.86594 17.0774 3.93339 18.1724C4.89637 18.8214 6.05562 19.1998 7.30285 19.1998C10.6456 19.1998 13.3555 16.4803 13.3555 13.1256V6.41927H13.3554Z" fill="black"/>
<path d="M17.9188 5.29817V4.59874C17.0623 4.60004 16.2226 4.35932 15.496 3.90411C16.1392 4.61089 16.9863 5.09822 17.9188 5.29817ZM13.4056 0.799986C13.3838 0.674926 13.367 0.549042 13.3554 0.422678V0H10.0617V13.1257C10.0564 14.6556 8.8191 15.8946 7.29303 15.8946C6.845 15.8946 6.42199 15.7879 6.04737 15.5983C6.55331 16.2645 7.35216 16.6946 8.25137 16.6946C9.77717 16.6946 11.0148 15.4558 11.0201 13.9256V0.799986H13.4056ZM8.13345 7.85284V7.10824C7.85823 7.07049 7.58076 7.05155 7.30294 7.05169C3.95993 7.05162 1.25 9.77116 1.25 13.1257C1.25 15.2288 2.31505 17.0822 3.93347 18.1725C2.86603 17.0775 2.20834 15.5787 2.20834 13.9255C2.20834 10.6138 4.84936 7.92093 8.13345 7.85284Z" fill="#00F2EA"/>
</svg>


<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5812 14.7329C15.4841 13.2332 14.9905 10.9177 14.9685 10.7459C14.9419 10.5379 14.9118 10.3743 15.1412 10.1627C15.3625 9.95827 16.3441 9.35051 16.6164 9.16037C17.0666 8.8455 17.2649 8.53115 17.1188 8.14472C17.0166 7.87739 16.7677 7.77669 16.5056 7.77669C16.4229 7.77695 16.3405 7.7862 16.2598 7.8043C15.7651 7.91164 15.2848 8.15954 15.0068 8.2265C14.9734 8.23512 14.9391 8.23975 14.9046 8.2403C14.7564 8.2403 14.7002 8.17437 14.7145 7.99598C14.7493 7.45518 14.8229 6.39967 14.7375 5.41367C14.6205 4.05708 14.1831 3.38493 13.6644 2.79046C13.4135 2.50218 12.2485 1.26367 10.0001 1.26367C7.75173 1.26367 6.5882 2.50218 6.33884 2.78689C5.81865 3.38135 5.38175 4.05351 5.26575 5.41009C5.18041 6.39609 5.25706 7.45109 5.28875 7.9924C5.29896 8.1621 5.24684 8.23673 5.09866 8.23673C5.06417 8.23613 5.02987 8.2315 4.99646 8.22292C4.71899 8.15596 4.23865 7.90806 3.74401 7.80072C3.66333 7.78262 3.58091 7.77337 3.49822 7.77312C3.23506 7.77312 2.98723 7.87534 2.88503 8.14114C2.73889 8.52757 2.93613 8.84192 3.38785 9.15679C3.66021 9.34693 4.64183 9.95418 4.86309 10.1591C5.09201 10.3708 5.06238 10.5343 5.0358 10.7424C5.01383 10.9167 4.5197 13.2322 1.42308 14.7293C1.24168 14.8172 0.933038 15.0033 1.47725 15.3038C2.33163 15.7761 2.90036 15.7255 3.34237 16.0102C3.71744 16.252 3.49567 16.7734 3.76854 16.9615C4.10375 17.193 5.09457 16.9451 6.37461 17.3678C7.44769 17.7215 8.09972 18.7208 10.0027 18.7208C11.9056 18.7208 12.5765 17.7169 13.6307 17.3678C14.9082 16.9451 15.9011 17.193 16.2368 16.9615C16.5091 16.7734 16.2879 16.252 16.6629 16.0102C17.105 15.7255 17.6732 15.7761 18.5281 15.3038C19.0713 15.0069 18.7626 14.8208 18.5812 14.7329Z" fill="#FFFC00"/>
<path d="M19.9284 14.5568C19.7894 14.1785 19.5247 13.9761 19.2232 13.8084C19.1665 13.7752 19.1144 13.7486 19.0699 13.7282C18.98 13.6817 18.888 13.6367 18.7966 13.5892C17.8568 13.0908 17.1231 12.4621 16.6141 11.7168C16.4696 11.507 16.3442 11.2846 16.2395 11.0523C16.1961 10.9281 16.1982 10.8576 16.2293 10.7932C16.2602 10.7436 16.3011 10.7009 16.3494 10.668C16.5109 10.5611 16.6775 10.4528 16.7904 10.3797C16.9917 10.2493 17.1512 10.1461 17.2539 10.073C17.6397 9.8031 17.9095 9.51635 18.0781 9.19586C18.1958 8.97444 18.2644 8.73027 18.2793 8.47995C18.2942 8.22964 18.255 7.97905 18.1645 7.74523C17.909 7.07256 17.2738 6.65495 16.5042 6.65495C16.3419 6.6548 16.18 6.67193 16.0214 6.70607C15.9789 6.71527 15.9365 6.72498 15.8951 6.73571C15.9023 6.27568 15.8921 5.79009 15.8512 5.31217C15.7061 3.63203 15.1179 2.75133 14.5047 2.04902C14.1121 1.60891 13.6495 1.23658 13.1358 0.946985C12.2053 0.415393 11.1501 0.145508 9.99981 0.145508C8.84956 0.145508 7.79947 0.415393 6.86793 0.946985C6.35291 1.23667 5.88946 1.60975 5.49642 2.05106C4.88323 2.75337 4.29508 3.63561 4.14996 5.31422C4.10908 5.79214 4.09886 6.28028 4.1055 6.73776C4.06411 6.72702 4.02221 6.71731 3.9798 6.70811C3.8211 6.67398 3.65923 6.65684 3.49691 6.657C2.72684 6.657 2.09065 7.0746 1.83618 7.74727C1.74522 7.9812 1.70567 8.23197 1.72022 8.48254C1.73477 8.73311 1.80307 8.97762 1.92049 9.19944C2.08963 9.51993 2.35944 9.80668 2.74524 10.0766C2.84744 10.1481 3.00738 10.2514 3.20871 10.3833C3.31755 10.4538 3.47647 10.557 3.63232 10.6603C3.68685 10.6956 3.7332 10.7421 3.76825 10.7968C3.80095 10.8637 3.80197 10.9358 3.75343 11.0687C3.65017 11.2961 3.52688 11.5139 3.385 11.7194C2.88729 12.4478 2.17497 13.0652 1.2654 13.5595C0.783534 13.8151 0.28276 13.9858 0.071209 14.5608C-0.0882209 14.9948 0.0160216 15.4886 0.421239 15.9047C0.569958 16.0599 0.742449 16.1906 0.932233 16.2916C1.32712 16.5087 1.74703 16.6767 2.18263 16.792C2.27253 16.8152 2.35787 16.8534 2.43506 16.905C2.58274 17.0343 2.56179 17.229 2.75852 17.5142C2.85728 17.6617 2.98276 17.7893 3.12848 17.8905C3.54136 18.1757 4.00535 18.1936 4.49692 18.2125C4.94097 18.2293 5.4443 18.2488 6.01917 18.4384C6.25729 18.5171 6.50461 18.6694 6.79128 18.8473C7.47959 19.2705 8.42186 19.8497 9.99879 19.8497C11.5757 19.8497 12.5246 19.2675 13.218 18.8427C13.5027 18.6679 13.7485 18.5171 13.9799 18.4404C14.5548 18.2503 15.0581 18.2314 15.5022 18.2145C15.9938 18.1956 16.4577 18.1777 16.8706 17.8925C17.0432 17.7721 17.187 17.615 17.2917 17.4325C17.4332 17.1917 17.4297 17.0236 17.5625 16.906C17.6349 16.8569 17.7151 16.8202 17.7996 16.7976C18.2412 16.682 18.6668 16.5124 19.0669 16.2926C19.2685 16.1844 19.45 16.0423 19.6034 15.8724L19.6085 15.8663C19.9887 15.4594 20.0843 14.98 19.9284 14.5568ZM18.5268 15.3102C17.6719 15.7825 17.1036 15.7319 16.6616 16.0166C16.286 16.2584 16.5083 16.7797 16.2355 16.9678C15.9002 17.1994 14.9094 16.9515 13.6294 17.3742C12.5737 17.7233 11.9002 18.7272 10.0013 18.7272C8.10249 18.7272 7.44484 17.7254 6.37176 17.3716C5.09427 16.9489 4.10141 17.1968 3.76569 16.9653C3.49333 16.7772 3.71459 16.2558 3.33952 16.014C2.897 15.7293 2.32878 15.7799 1.4744 15.3102C0.930189 15.0096 1.23883 14.8236 1.42023 14.7357C4.51685 13.236 5.01098 10.9205 5.03295 10.7487C5.05953 10.5407 5.08916 10.3771 4.86024 10.1655C4.63898 9.96105 3.65736 9.35329 3.385 9.16315C2.9343 8.84828 2.73604 8.53393 2.88218 8.1475C2.98438 7.88017 3.23375 7.77947 3.49537 7.77947C3.57806 7.77973 3.66048 7.78898 3.74116 7.80708C4.2358 7.91442 4.71614 8.16232 4.99361 8.22928C5.02702 8.23786 5.06132 8.24249 5.09581 8.24308C5.24399 8.24308 5.29612 8.16846 5.2859 7.99876C5.25421 7.45745 5.17757 6.40245 5.2629 5.41645C5.37992 4.05986 5.81682 3.38771 6.33599 2.79324C6.58535 2.50751 7.75706 1.26901 9.99776 1.26901C12.2385 1.26901 13.4132 2.5024 13.6626 2.78711C14.1823 3.38157 14.6197 4.05373 14.7357 5.41031C14.821 6.39631 14.7474 7.45183 14.7127 7.99262C14.7009 8.17101 14.7546 8.23695 14.9028 8.23695C14.9373 8.2364 14.9716 8.23176 15.005 8.22315C15.283 8.15619 15.7633 7.90828 16.2579 7.80094C16.3386 7.78285 16.421 7.77359 16.5037 7.77334C16.7669 7.77334 17.0147 7.87557 17.1169 8.14137C17.2631 8.52779 17.0658 8.84215 16.6146 9.15701C16.3423 9.34716 15.3606 9.9544 15.1394 10.1594C14.9099 10.371 14.9401 10.5346 14.9667 10.7426C14.9886 10.9169 15.4823 13.2324 18.5794 14.7295C18.7623 14.821 19.071 15.0071 18.5268 15.3102Z" fill="black"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_121428)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9457 21L8.39629 13.0901L1.44911 21H-1.48999L7.09233 11.2311L-1.48999 -1H6.05596L11.2862 6.45502L17.8395 -1H20.7786L12.5946 8.31648L21.4917 21H13.9457ZM17.2187 18.77H15.24L2.71836 1.23H4.69735L9.71236 8.25316L10.5796 9.47186L17.2187 18.77Z" fill="#242E36"/>
</g>
<defs>
<clipPath id="clip0_161_121428">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_121429)">
<path d="M19.6017 5.1541C19.4886 4.72861 19.2657 4.34029 18.9554 4.02798C18.6451 3.71568 18.2582 3.49035 17.8335 3.37456C16.2698 2.9541 10.0198 2.9541 10.0198 2.9541C10.0198 2.9541 3.76984 2.9541 2.2062 3.37456C1.78144 3.49035 1.39455 3.71568 1.08424 4.02798C0.773933 4.34029 0.551091 4.72861 0.438018 5.1541C0.0198365 6.72456 0.0198364 9.99956 0.0198364 9.99956C0.0198364 9.99956 0.0198365 13.2746 0.438018 14.845C0.551091 15.2705 0.773933 15.6588 1.08424 15.9711C1.39455 16.2834 1.78144 16.5088 2.2062 16.6246C3.76984 17.045 10.0198 17.045 10.0198 17.045C10.0198 17.045 16.2698 17.045 17.8335 16.6246C18.2582 16.5088 18.6451 16.2834 18.9554 15.9711C19.2657 15.6588 19.4886 15.2705 19.6017 14.845C20.0198 13.2746 20.0198 9.99956 20.0198 9.99956C20.0198 9.99956 20.0198 6.72456 19.6017 5.1541Z" fill="#FF0302"/>
<path d="M7.97446 12.9741V7.02637L13.2017 10.0002L7.97446 12.9741Z" fill="#FEFEFE"/>
</g>
<defs>
<clipPath id="clip0_161_121429">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_121430)">
<path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="#000100"/>
<path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="#000100"/>
<path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32032 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="#000100"/>
</g>
<defs>
<clipPath id="clip0_161_121430">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                  </div>
                 
                </div>
                

                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>Location</div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__concert-nav">
                  <svg
                className="user-home__grid__picks__card1-covered__concert-nav__nav-left"
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


              <svg
                className="user-home__grid__picks__card1-covered__concert-nav__nav-right"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="rgba(255, 255, 255, 0.8)"
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
                  </div>
                  </div>

                  <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>FAQs</div>

                

                  </div>
                  <div
          className={
            faq === 1
              ? "user-home__grid__picks__card1__faq__card user-home__grid__picks__card1__faq__card-active"
              : "user-home__grid__picks__card1__faq__card"
          }
        >
          <div className="user-home__grid__picks__card1__faq__card__flex">
            FAQ Header
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setFaq(faq === 0 ? 1 : 0)}
            >
              <path
                d="M19 12L5 12M12 5L12 19"
                stroke="#9DA09F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="user-home__grid__picks__card1__faq__card__answer">
          DettyDecember.xyz is your go-to platform for curated events across Nigeria, offering seamless ticketing and exclusive access to the best concerts, parties, tours, and more from December 1st to January 15th.
          </div>
        </div>
                  <div
          className={
            faq === 1
              ? "user-home__grid__picks__card1__faq__card user-home__grid__picks__card1__faq__card-active"
              : "user-home__grid__picks__card1__faq__card"
          }
        >
          <div className="user-home__grid__picks__card1__faq__card__flex">
            FAQ Header
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setFaq(faq === 0 ? 1 : 0)}
            >
              <path
                d="M19 12L5 12M12 5L12 19"
                stroke="#9DA09F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="user-home__grid__picks__card1__faq__card__answer">
          DettyDecember.xyz is your go-to platform for curated events across Nigeria, offering seamless ticketing and exclusive access to the best concerts, parties, tours, and more from December 1st to January 15th.
          </div>
        </div>
                  <div
          className={
            faq === 1
              ? "user-home__grid__picks__card1__faq__card user-home__grid__picks__card1__faq__card-active"
              : "user-home__grid__picks__card1__faq__card"
          }
        >
          <div className="user-home__grid__picks__card1__faq__card__flex">
            FAQ Header
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setFaq(faq === 0 ? 1 : 0)}
            >
              <path
                d="M19 12L5 12M12 5L12 19"
                stroke="#9DA09F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="user-home__grid__picks__card1__faq__card__answer">
          DettyDecember.xyz is your go-to platform for curated events across Nigeria, offering seamless ticketing and exclusive access to the best concerts, parties, tours, and more from December 1st to January 15th.
          </div>
        </div>
                  
                  </div>

                  <div className="user-home__grid__picks">
          <div className="user-home__grid__picks__card1">
            <div className="user-home__grid__picks__card1__title">
              <div>You might also like</div>

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

       {modalOpen &&  <div className="user-home__artist-image-modal">

      <div className="user-home__artist-image-modal__inner">
        <div className="user-home__artist-image-modal__inner__title">
          <div>Photos</div>
        </div>

        <div className="user-home__artist-image-modal__inner__image">
        <Image
                  style={{ borderRadius: "8px" }}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />

<svg
                className="user-home__artist-image-modal__inner__image__nav-left"
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


              <svg
                className="user-home__artist-image-modal__inner__image__nav-right"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="rgba(255, 255, 255, 0.8)"
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
        </div>

        <div className="user-home__artist-image-modal__inner__images">
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px", minHeight: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        <Image
                  style={{ borderRadius: "8px", minWidth: "80px" }}
                  width={80}
                  height={80}
                  src="/assets/asake.png"
                  alt="MyWishlist-img"
                  className="rounded-t-lg "
                  loading="lazy"
                  // layout="fill"
                  // objectFit="cover"
                />
        </div>
      </div>
</div>}
      </div>
      <Footer />
    </>
  );
}
