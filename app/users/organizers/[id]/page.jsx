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
              Event Organizers
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
              Livespot 360
            </div>

            <h1 className="home-picks__hero__title">Livespot 360</h1>
            <div className="home-picks__hero__info">
              <div>
                <div>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52193 6.30205C7.67559 5.99076 7.75242 5.83511 7.85672 5.78538C7.94746 5.74211 8.05289 5.74211 8.14363 5.78538C8.24793 5.83511 8.32476 5.99076 8.47842 6.30205L9.9362 9.25536C9.98157 9.34726 10.0042 9.39321 10.0374 9.42889C10.0667 9.46048 10.1019 9.48607 10.141 9.50425C10.1852 9.52479 10.2359 9.5322 10.3373 9.54702L13.5982 10.0236C13.9415 10.0738 14.1132 10.0989 14.1927 10.1828C14.2618 10.2558 14.2943 10.356 14.2812 10.4557C14.266 10.5702 14.1417 10.6913 13.8931 10.9334L11.5345 13.2308C11.4609 13.3024 11.4242 13.3382 11.4004 13.3808C11.3794 13.4185 11.366 13.46 11.3608 13.5028C11.3549 13.5513 11.3636 13.6018 11.3809 13.703L11.9375 16.9479C11.9962 17.2902 12.0255 17.4613 11.9704 17.5628C11.9224 17.6512 11.8371 17.7132 11.7382 17.7315C11.6246 17.7526 11.4709 17.6717 11.1636 17.5101L8.24841 15.9771C8.15758 15.9293 8.11217 15.9054 8.06432 15.896C8.02196 15.8877 7.97839 15.8877 7.93602 15.896C7.88818 15.9054 7.84276 15.9293 7.75193 15.9771L4.83678 17.5101C4.52944 17.6717 4.37577 17.7526 4.26214 17.7315C4.16328 17.7132 4.07798 17.6512 4.02999 17.5628C3.97483 17.4613 4.00418 17.2902 4.06288 16.9479L4.61942 13.703C4.63677 13.6018 4.64545 13.5513 4.63958 13.5028C4.63438 13.46 4.6209 13.4185 4.5999 13.3808C4.57618 13.3382 4.53941 13.3024 4.46589 13.2308L2.1072 10.9334C1.8586 10.6913 1.73431 10.5702 1.71918 10.4557C1.70602 10.356 1.73853 10.2558 1.80766 10.1828C1.88712 10.0989 2.05881 10.0738 2.40219 10.0236L5.66304 9.54702C5.76445 9.5322 5.81515 9.52479 5.85931 9.50425C5.89841 9.48607 5.9336 9.46048 5.96295 9.42889C5.9961 9.39321 6.01878 9.34726 6.06415 9.25536L7.52193 6.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  4.4</div>
                  
                <div>(75,043 reviews)</div>
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.86364C2.04167 5.86364 1.62311 5.75189 1.24432 5.52841C0.86553 5.30114 0.5625 4.99811 0.335227 4.61932C0.111742 4.24053 0 3.82197 0 3.36364C0 2.90152 0.111742 2.48295 0.335227 2.10795C0.5625 1.72917 0.86553 1.42803 1.24432 1.20455C1.62311 0.977272 2.04167 0.863636 2.5 0.863636C2.96212 0.863636 3.38068 0.977272 3.75568 1.20455C4.13447 1.42803 4.43561 1.72917 4.65909 2.10795C4.88636 2.48295 5 2.90152 5 3.36364C5 3.82197 4.88636 4.24053 4.65909 4.61932C4.43561 4.99811 4.13447 5.30114 3.75568 5.52841C3.38068 5.75189 2.96212 5.86364 2.5 5.86364Z" fill="white"/>
</svg>

                <div>185k tickets sold</div>
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.86364C2.04167 5.86364 1.62311 5.75189 1.24432 5.52841C0.86553 5.30114 0.5625 4.99811 0.335227 4.61932C0.111742 4.24053 0 3.82197 0 3.36364C0 2.90152 0.111742 2.48295 0.335227 2.10795C0.5625 1.72917 0.86553 1.42803 1.24432 1.20455C1.62311 0.977272 2.04167 0.863636 2.5 0.863636C2.96212 0.863636 3.38068 0.977272 3.75568 1.20455C4.13447 1.42803 4.43561 1.72917 4.65909 2.10795C4.88636 2.48295 5 2.90152 5 3.36364C5 3.82197 4.88636 4.24053 4.65909 4.61932C4.43561 4.99811 4.13447 5.30114 3.75568 5.52841C3.38068 5.75189 2.96212 5.86364 2.5 5.86364Z" fill="white"/>
</svg>

                <div>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18H14M4 16V10.6667M6.66667 16V10.6667M9.33333 16V10.6667M12 16V10.6667M13.3333 8.66665L8.28267 5.50998C8.18012 5.44589 8.12885 5.41385 8.07386 5.40135C8.02524 5.3903 7.97476 5.3903 7.92614 5.40135C7.87115 5.41385 7.81988 5.44589 7.71733 5.50998L2.66667 8.66665H13.3333Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  79 events</div>
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

                  Share this event organizer</div>
              </div>
            </div>
          </div>
          <div className="user-home__nav">
            <div className="user-home__nav__active">Events</div>
            <div>About</div>
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

                      <button className="user-home__grid__picks__card1-covered__card__button-green">
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

                      <button className="user-home__grid__picks__card1-covered__card__button-gray">
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

                      <button className="user-home__grid__picks__card1-covered__card__button-gray">
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
                        src="/assets/org1.png"
                        layout="fill"
                        objectFit="cover"
                        style={{borderRadius: "8px"}}
                      />
                    </div>

                    <div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/org2.png"
                          layout="fill"
                          objectFit="cover"
                          style={{borderRadius: "8px"}}
                        />
                      </div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/org3.png"
                          layout="fill"
                          objectFit="cover"
                          style={{borderRadius: "8px"}}
                        />
                        <button>See all photos</button>
                      </div>
                    </div>
                  </div>

                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  About Livespot 360:
                  </div>
                  <div className="user-home__grid__picks__card1-covered__artist-subtitle">
                  Livespot is a 360 creative solutions company of the digital era, unified by a passion for developing disruptive ideas. We turn consumers into fans through human-centered storified experiences, engagement, and entertainment. Our work cuts across Media & Advertising, Experiential marketing, Audio/Visual production, Digital marketing & Tech innovation, and Entertainment.
<br /><br />
                  We were born out of the desire to do the impossible. With every project and endeavour we undertake, we go out of our way to raise the bar, hop over it, and raise it even higher                  </div>

                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  Listen to Davido:
                  </div>
                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  To connect with Davido
                  </div>
                </div>

                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>Reviews</div>

                    <div className="user-home__grid__picks__card1__title__review-title">
                      <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        4.4</div>
                      <div>(75,043 reviews)</div>
                      <button>Write a review</button>
                    </div>
                  </div>

                  <div className="user-home__grid__picks__card1__review-card">
                    <div className="user-home__grid__picks__card1__review-card__title">
                      <div>
                        <div>
                          <Image
                            style={{ borderRadius: "50%" }}
                            src="/assets/asake.png"
                            alt="MyWishlist-img"
                            // className="rounded-t-lg "
                            // width={32}
                            // height={32}
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>Wande Adams</div>
                        <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66536 5.33317V4.6665M6.66536 8.33317V7.6665M6.66536 11.3332V10.6665M3.46536 2.6665H12.532C13.2788 2.6665 13.6521 2.6665 13.9374 2.81183C14.1882 2.93966 14.3922 3.14363 14.52 3.39452C14.6654 3.67973 14.6654 4.0531 14.6654 4.79984V5.6665C13.3767 5.6665 12.332 6.71117 12.332 7.99984C12.332 9.2885 13.3767 10.3332 14.6654 10.3332V11.1998C14.6654 11.9466 14.6654 12.3199 14.52 12.6052C14.3922 12.856 14.1882 13.06 13.9374 13.1878C13.6521 13.3332 13.2788 13.3332 12.532 13.3332H3.46536C2.71863 13.3332 2.34526 13.3332 2.06004 13.1878C1.80916 13.06 1.60519 12.856 1.47736 12.6052C1.33203 12.3199 1.33203 11.9466 1.33203 11.1998V10.3332C2.6207 10.3332 3.66536 9.2885 3.66536 7.99984C3.66536 6.71117 2.6207 5.6665 1.33203 5.6665V4.79984C1.33203 4.0531 1.33203 3.67973 1.47736 3.39452C1.60519 3.14363 1.80916 2.93966 2.06004 2.81183C2.34526 2.6665 2.71863 2.6665 3.46536 2.6665Z"
                            stroke="#02A056"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_753_22381)">
                            <path
                              d="M4.0013 5.33317V3.99984M4.0013 2.6665H4.00464M7.33464 3.99984C7.33464 5.84079 5.84225 7.33317 4.0013 7.33317C2.16035 7.33317 0.667969 5.84079 0.667969 3.99984C0.667969 2.15889 2.16035 0.666504 4.0013 0.666504C5.84225 0.666504 7.33464 2.15889 7.33464 3.99984Z"
                              stroke="#ACAFAC"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_753_22381">
                              <rect width="8" height="8" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      </div>
                      <div>40 minutes ago</div>
                      
                    </div>

                    <div className="user-home__grid__picks__card1__review-card__stars">
                      <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </div>
                      <div>Eko Atlantic City</div>
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.13068C2.59896 5.13068 2.23272 5.03291 1.90128 4.83736C1.56984 4.63849 1.30469 4.37334 1.10582 4.0419C0.910275 3.71046 0.8125 3.34422 0.8125 2.94318C0.8125 2.53883 0.910275 2.17259 1.10582 1.84446C1.30469 1.51302 1.56984 1.24953 1.90128 1.05398C2.23272 0.855113 2.59896 0.755682 3 0.755682C3.40436 0.755682 3.7706 0.855113 4.09872 1.05398C4.43016 1.24953 4.69366 1.51302 4.8892 1.84446C5.08807 2.17259 5.1875 2.53883 5.1875 2.94318C5.1875 3.34422 5.08807 3.71046 4.8892 4.0419C4.69366 4.37334 4.43016 4.63849 4.09872 4.83736C3.7706 5.03291 3.40436 5.13068 3 5.13068Z" fill="#929692"/>
</svg>

                      <div>Lagos</div>
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subtitle">
                    An absolutely amazing artist and performance! 🫶🏻
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subsubtitle">
                    What an amazing night! This was a surprise for my daughter and while I liked Davido, the concert was mainly for my daughter. Ha, after seeing Davido in concert, I LOVE DAVIDO. What an amazing down to earth real person who is so talented. Just loved this concert! I have been to many, many concerts and his was one of the most entertaining I have ever watched. The talent was insane to watch and his crew was also amazing. I would love to see him again in concert!!!
                    </div>
                  </div>
                  <div className="user-home__grid__picks__card1__review-card">
                    <div className="user-home__grid__picks__card1__review-card__title">
                      <div>
                        <div>
                          <Image
                            style={{ borderRadius: "50%" }}
                            src="/assets/asake.png"
                            alt="MyWishlist-img"
                            // className="rounded-t-lg "
                            // width={32}
                            // height={32}
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>Wande Adams</div>
                        <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66536 5.33317V4.6665M6.66536 8.33317V7.6665M6.66536 11.3332V10.6665M3.46536 2.6665H12.532C13.2788 2.6665 13.6521 2.6665 13.9374 2.81183C14.1882 2.93966 14.3922 3.14363 14.52 3.39452C14.6654 3.67973 14.6654 4.0531 14.6654 4.79984V5.6665C13.3767 5.6665 12.332 6.71117 12.332 7.99984C12.332 9.2885 13.3767 10.3332 14.6654 10.3332V11.1998C14.6654 11.9466 14.6654 12.3199 14.52 12.6052C14.3922 12.856 14.1882 13.06 13.9374 13.1878C13.6521 13.3332 13.2788 13.3332 12.532 13.3332H3.46536C2.71863 13.3332 2.34526 13.3332 2.06004 13.1878C1.80916 13.06 1.60519 12.856 1.47736 12.6052C1.33203 12.3199 1.33203 11.9466 1.33203 11.1998V10.3332C2.6207 10.3332 3.66536 9.2885 3.66536 7.99984C3.66536 6.71117 2.6207 5.6665 1.33203 5.6665V4.79984C1.33203 4.0531 1.33203 3.67973 1.47736 3.39452C1.60519 3.14363 1.80916 2.93966 2.06004 2.81183C2.34526 2.6665 2.71863 2.6665 3.46536 2.6665Z"
                            stroke="#02A056"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_753_22381)">
                            <path
                              d="M4.0013 5.33317V3.99984M4.0013 2.6665H4.00464M7.33464 3.99984C7.33464 5.84079 5.84225 7.33317 4.0013 7.33317C2.16035 7.33317 0.667969 5.84079 0.667969 3.99984C0.667969 2.15889 2.16035 0.666504 4.0013 0.666504C5.84225 0.666504 7.33464 2.15889 7.33464 3.99984Z"
                              stroke="#ACAFAC"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_753_22381">
                              <rect width="8" height="8" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      </div>
                      <div>40 minutes ago</div>
                      
                    </div>

                    <div className="user-home__grid__picks__card1__review-card__stars">
                      <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </div>
                      <div>Eko Atlantic City</div>
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.13068C2.59896 5.13068 2.23272 5.03291 1.90128 4.83736C1.56984 4.63849 1.30469 4.37334 1.10582 4.0419C0.910275 3.71046 0.8125 3.34422 0.8125 2.94318C0.8125 2.53883 0.910275 2.17259 1.10582 1.84446C1.30469 1.51302 1.56984 1.24953 1.90128 1.05398C2.23272 0.855113 2.59896 0.755682 3 0.755682C3.40436 0.755682 3.7706 0.855113 4.09872 1.05398C4.43016 1.24953 4.69366 1.51302 4.8892 1.84446C5.08807 2.17259 5.1875 2.53883 5.1875 2.94318C5.1875 3.34422 5.08807 3.71046 4.8892 4.0419C4.69366 4.37334 4.43016 4.63849 4.09872 4.83736C3.7706 5.03291 3.40436 5.13068 3 5.13068Z" fill="#929692"/>
</svg>

                      <div>Lagos</div>
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subtitle">
                    An absolutely amazing artist and performance! 🫶🏻
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subsubtitle">
                    What an amazing night! This was a surprise for my daughter and while I liked Davido, the concert was mainly for my daughter. Ha, after seeing Davido in concert, I LOVE DAVIDO. What an amazing down to earth real person who is so talented. Just loved this concert! I have been to many, many concerts and his was one of the most entertaining I have ever watched. The talent was insane to watch and his crew was also amazing. I would love to see him again in concert!!!
                    </div>
                  </div>
                  <div className="user-home__grid__picks__card1__review-card">
                    <div className="user-home__grid__picks__card1__review-card__title">
                      <div>
                        <div>
                          <Image
                            style={{ borderRadius: "50%" }}
                            src="/assets/asake.png"
                            alt="MyWishlist-img"
                            // className="rounded-t-lg "
                            // width={32}
                            // height={32}
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>Wande Adams</div>
                        <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66536 5.33317V4.6665M6.66536 8.33317V7.6665M6.66536 11.3332V10.6665M3.46536 2.6665H12.532C13.2788 2.6665 13.6521 2.6665 13.9374 2.81183C14.1882 2.93966 14.3922 3.14363 14.52 3.39452C14.6654 3.67973 14.6654 4.0531 14.6654 4.79984V5.6665C13.3767 5.6665 12.332 6.71117 12.332 7.99984C12.332 9.2885 13.3767 10.3332 14.6654 10.3332V11.1998C14.6654 11.9466 14.6654 12.3199 14.52 12.6052C14.3922 12.856 14.1882 13.06 13.9374 13.1878C13.6521 13.3332 13.2788 13.3332 12.532 13.3332H3.46536C2.71863 13.3332 2.34526 13.3332 2.06004 13.1878C1.80916 13.06 1.60519 12.856 1.47736 12.6052C1.33203 12.3199 1.33203 11.9466 1.33203 11.1998V10.3332C2.6207 10.3332 3.66536 9.2885 3.66536 7.99984C3.66536 6.71117 2.6207 5.6665 1.33203 5.6665V4.79984C1.33203 4.0531 1.33203 3.67973 1.47736 3.39452C1.60519 3.14363 1.80916 2.93966 2.06004 2.81183C2.34526 2.6665 2.71863 2.6665 3.46536 2.6665Z"
                            stroke="#02A056"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_753_22381)">
                            <path
                              d="M4.0013 5.33317V3.99984M4.0013 2.6665H4.00464M7.33464 3.99984C7.33464 5.84079 5.84225 7.33317 4.0013 7.33317C2.16035 7.33317 0.667969 5.84079 0.667969 3.99984C0.667969 2.15889 2.16035 0.666504 4.0013 0.666504C5.84225 0.666504 7.33464 2.15889 7.33464 3.99984Z"
                              stroke="#ACAFAC"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_753_22381">
                              <rect width="8" height="8" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      </div>
                      <div>40 minutes ago</div>
                      
                    </div>

                    <div className="user-home__grid__picks__card1__review-card__stars">
                      <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#F4AA27" stroke="#F4AA27" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52047 2.30205C7.67412 1.99076 7.75095 1.83511 7.85525 1.78538C7.946 1.74211 8.05142 1.74211 8.14217 1.78538C8.24647 1.83511 8.3233 1.99076 8.47695 2.30205L9.93474 5.25536C9.9801 5.34726 10.0028 5.39321 10.0359 5.42889C10.0653 5.46048 10.1005 5.48607 10.1396 5.50425C10.1837 5.52479 10.2344 5.5322 10.3358 5.54702L13.5967 6.02364C13.9401 6.07383 14.1118 6.09893 14.1912 6.1828C14.2604 6.25576 14.2929 6.35603 14.2797 6.45569C14.2646 6.57022 14.1403 6.69129 13.8917 6.93342L11.533 9.23078C11.4595 9.3024 11.4227 9.33821 11.399 9.38081C11.378 9.41854 11.3645 9.45998 11.3593 9.50284C11.3534 9.55125 11.3621 9.60183 11.3795 9.703L11.936 12.9479C11.9947 13.2902 12.0241 13.4613 11.9689 13.5628C11.9209 13.6512 11.8356 13.7132 11.7367 13.7315C11.6231 13.7526 11.4694 13.6717 11.1621 13.5101L8.24695 11.9771C8.15612 11.9293 8.11071 11.9054 8.06286 11.896C8.0205 11.8877 7.97692 11.8877 7.93456 11.896C7.88671 11.9054 7.8413 11.9293 7.75047 11.9771L4.83531 13.5101C4.52798 13.6717 4.37431 13.7526 4.26068 13.7315C4.16182 13.7132 4.07651 13.6512 4.02852 13.5628C3.97336 13.4613 4.00271 13.2902 4.06141 12.9479L4.61796 9.703C4.63531 9.60183 4.64398 9.55125 4.63811 9.50284C4.63291 9.45998 4.61944 9.41854 4.59844 9.38081C4.57471 9.33821 4.53795 9.3024 4.46442 9.23078L2.10574 6.93342C1.85714 6.69129 1.73284 6.57022 1.71772 6.45569C1.70456 6.35603 1.73707 6.25576 1.8062 6.1828C1.88565 6.09893 2.05735 6.07383 2.40073 6.02364L5.66157 5.54702C5.76298 5.5322 5.81368 5.52479 5.85784 5.50425C5.89694 5.48607 5.93214 5.46048 5.96149 5.42889C5.99464 5.39321 6.01732 5.34726 6.06268 5.25536L7.52047 2.30205Z" fill="#D5D8D5" stroke="#D5D8D5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </div>
                      <div>Eko Atlantic City</div>
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.13068C2.59896 5.13068 2.23272 5.03291 1.90128 4.83736C1.56984 4.63849 1.30469 4.37334 1.10582 4.0419C0.910275 3.71046 0.8125 3.34422 0.8125 2.94318C0.8125 2.53883 0.910275 2.17259 1.10582 1.84446C1.30469 1.51302 1.56984 1.24953 1.90128 1.05398C2.23272 0.855113 2.59896 0.755682 3 0.755682C3.40436 0.755682 3.7706 0.855113 4.09872 1.05398C4.43016 1.24953 4.69366 1.51302 4.8892 1.84446C5.08807 2.17259 5.1875 2.53883 5.1875 2.94318C5.1875 3.34422 5.08807 3.71046 4.8892 4.0419C4.69366 4.37334 4.43016 4.63849 4.09872 4.83736C3.7706 5.03291 3.40436 5.13068 3 5.13068Z" fill="#929692"/>
</svg>

                      <div>Lagos</div>
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subtitle">
                    An absolutely amazing artist and performance! 🫶🏻
                    </div>
                    <div className="user-home__grid__picks__card1__review-card__subsubtitle">
                    What an amazing night! This was a surprise for my daughter and while I liked Davido, the concert was mainly for my daughter. Ha, after seeing Davido in concert, I LOVE DAVIDO. What an amazing down to earth real person who is so talented. Just loved this concert! I have been to many, many concerts and his was one of the most entertaining I have ever watched. The talent was insane to watch and his crew was also amazing. I would love to see him again in concert!!!
                    </div>
                  </div>
                  <div className="user-home__grid__picks__card1-covered__more">
                    <div className="user-home__grid__picks__card1-covered__more__bar">
                      <div>
                        <div></div>
                      </div>
                      <div>Loaded 10 out of 5,121 reviews</div>
                    </div>

                    <button>See more reviews</button>
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
                onClick={() => window.location.href ="/users/organizers"}
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
