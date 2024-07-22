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

            <h1 className="home-picks__hero__title">Davido</h1>
            <div className="home-picks__hero__info">
              <div>
                <div></div>
                <div>Lagos</div>
                <div>147 events</div>
              </div>

              <div>
                <div>Get ticket alerts</div>
                <div>Share this artist</div>
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
                        src="/assets/Content.png"
                        layout="fill"
                        objectFit="cover"
                        style={{borderRadius: "8px"}}
                      />
                    </div>

                    <div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/Content.png"
                          layout="fill"
                          objectFit="cover"
                          style={{borderRadius: "8px"}}
                        />
                      </div>
                      <div className="user-home__grid__picks__card1-covered__img-grid__img">
                        <Image
                          alt=""
                          src="/assets/Content.png"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel purus risus. Phasellus sit amet egestas enim. Nulla rhoncus tincidunt mauris, sed accumsan tortor viverra nec. In hac habitasse platea dictumst. Duis turpis arcu, consectetur non sapien eu, gravida consectetur arcu. Curabitur rhoncus pulvinar lectus id imperdiet. Nulla facilisi. Phasellus sed risus eget ipsum fringilla rhoncus. Ut vitae ligula efficitur, mattis dui quis, sollicitudin eros. Duis sed nunc id ante pretium scelerisque. Morbi eu odio turpis. Fusce non enim ultricies, tempus nibh a, lobortis metus. Nunc accumsan risus sit amet leo aliquam tristique. Donec sit amet rutrum magna, cursus ultrices sem. Sed non mi ut ipsum pharetra faucibus in at mauris.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel purus risus. Phasellus sit amet egestas enim. Nulla rhoncus tincidunt mauris, sed accumsan tortor viverra nec. In hac habitasse platea dictumst. Duis turpis arcu, consectetur non sapien eu, gravida consectetur arcu. Curabitur rhoncus pulvinar lectus id imperdiet. Nulla facilisi. Phasellus sed risus eget ipsum fringilla rhoncus. Ut vitae ligula efficitur, mattis dui quis, sollicitudin eros. Duis sed nunc id ante pretium scelerisque. Morbi eu odio turpis. Fusce non enim ultricies, tempus nibh a, lobortis metus. Nunc accumsan risus sit amet leo aliquam tristique. Donec sit amet rutrum magna, cursus ultrices sem. Sed non mi ut ipsum pharetra faucibus in at mauris.
                  </div>

                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  Listen to Davido:
                  </div>
                  <div className="user-home__grid__picks__card1-covered__artist-title">
                  To connect with Davido
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

                <button>
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
              <div className="user-home__grid__picks__card1__venues__card">
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/asake.png"
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
              <div className="user-home__grid__picks__card1__venues__card">
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/asake.png"
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
              <div className="user-home__grid__picks__card1__venues__card">
                <div className="user-home__grid__picks__card1__venues__card__img">
                  <Image
                    style={{ borderRadius: "12px 12px 0 0" }}
                    src="/assets/asake.png"
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
