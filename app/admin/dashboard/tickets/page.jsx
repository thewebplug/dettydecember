"use client";
import { ListingCard } from "@/app/components/userComponents/picksForMe/listing/ListingCard";
import Image from "next/image";
import { useState } from "react";

export default function Tickets() {
  const [tab, setTab] = useState("all");
  const [detailsTab, setDetailsTab] = useState("info");
  const [exportMenu, setExportMenu] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <div className="admin-tickets">
      <div className="admin-tickets__title">
        <div>
          <h1>Tickets</h1>
          <h2>Your ticket sales and summary.</h2>
        </div>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.16675V15.8334M4.16669 10.0001H15.8334"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Create event
        </button>
      </div>

      <div className="admin-tickets__table">
        <div className="admin-tickets__table__header">
          <div className="admin-tickets__table__header__admin-tickets">
            <div
              className={
                tab === "all" && "admin-tickets__table__header__admin-tickets__active"
              }
              onClick={() => setTab("all")}
            >
              All admin-tickets
            </div>
            <div
              className={
                tab === "sold" && "admin-tickets__table__header__admin-tickets__active"
              }
              onClick={() => setTab("sold")}
            >
              Sold
            </div>
            <div
              className={
                tab === "refunded" && "admin-tickets__table__header__admin-tickets__active"
              }
              onClick={() => setTab("refunded")}
            >
              Refunded
            </div>
            <div
              className={
                tab === "expired" && "admin-tickets__table__header__admin-tickets__active"
              }
              onClick={() => setTab("expired")}
            >
              Expired
            </div>
          </div>

          <div>
            <form action="" className="admin-tickets__table__header__form">
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

              <input type="text" placeholder="Search" />
            </form>

            <div className="admin-tickets__table__header__buttons">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                    stroke="#565856"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Filters
              </button>
              <button onClick={() => setExportMenu(!exportMenu)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 14.1667L9.99996 17.5M9.99996 17.5L13.3333 14.1667M9.99996 17.5V10M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613"
                    stroke="#565856"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Export
              </button>
              {exportMenu && (
                <div className="admin-tickets__table__header__buttons__menu">
                  <div>PDF Document (.pdf)</div>
                  <div>CSV Document (.csv)</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="admin-tickets__table__body">
          <div className="admin-tickets__table__body__heading">
            <div>Ticket ID</div>
            <div>Ticket type and amount</div>
            <div>Event image, name and venue</div>
            <div>Date purchased</div>
            <div>Created by</div>
            <div>Status</div>
          </div>

          <div className="admin-tickets__table__body__inner">
            {[
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "sold",
              },
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "expired",
              },
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "refunded",
              },
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "sold",
              },
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "expired",
              },
              {
                id: "395879WD",
                ticket: {
                  type: "Regular ticket",
                  price: "₦50,000.00",
                },
                event: {
                  name: "Davido Live In Concert",
                  location: "Eko Atlantic City, Lagos",
                },
                date: "22 Jan 2024",
                status: "refunded",
              },
            ]?.map((event) => (
              <div onClick={() => setSelectedEvent(event)}>
                <div>{event?.id}</div>
                <div className="admin-tickets__table__body__inner__ticket">
                  <div>{event?.ticket?.type}</div>
                  <div>{event?.ticket?.price}</div>
                </div>

                <div className="admin-tickets__table__body__inner__event">
                  <Image
                    width={32}
                    height={32}
                    alt=""
                    src="/assets/Content.png"
                    style={{ borderRadius: "4px" }}
                  />

                  <div>
                    <div>{event?.event?.name}</div>
                    <div>{event?.event?.location}</div>
                  </div>
                </div>

                <div>{event?.date}</div>

                
                <div className="admin-tickets__table__body__inner__event">
                  <Image
                    width={32}
                    height={32}
                    alt=""
                    src="/assets/Content.png"
                    style={{ borderRadius: "50%" }}
                  />

                  <div>
                    <div>Seyi Badejo</div>
                    <div>seyibadejo@gmail.com</div>
                  </div>
                </div>
                <div
                  className={`admin-tickets__table__body__inner__status admin-tickets__table__body__inner__status-${event?.status}`}
                >
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3"
                      cy="3"
                      r="3"
                      fill={
                        event?.status === "sold"
                          ? "rgba(1, 120, 65, 1)"
                          : event?.status === "expired"
                          ? "#B42318"
                          : "#565856"
                      }
                    />
                  </svg>
                  <div>{event?.status}</div>
                </div>

                <div>View</div>
              </div>
            ))}
          </div>

          <div className="admin-tickets__table__body__footer">
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 7.99992H3.33337M3.33337 7.99992L8.00004 12.6666M3.33337 7.99992L8.00004 3.33325"
                  stroke="#565856"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Previous
            </button>
            <button>
              Next{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33325 7.99992H12.6666M12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L7.99992 12.6666"
                  stroke="#565856"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* <div className="admin-tickets__table__body__empty">
            <svg
              width="152"
              height="120"
              viewBox="0 0 152 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="76" cy="52" r="52" fill="#EAEBEA" />
              <g filter="url(#filter0_dd_2397_43593)">
                <path
                  d="M77.6 16C66.8273 16 57.2978 21.3233 51.4987 29.4829C49.605 29.0363 47.6301 28.8 45.6 28.8C31.4615 28.8 20 40.2615 20 54.4C20 68.5385 31.4615 80 45.6 80L109.6 80C121.971 80 132 69.9712 132 57.6C132 45.2288 121.971 35.2 109.6 35.2C108.721 35.2 107.854 35.2506 107.002 35.349C102.098 23.9677 90.7797 16 77.6 16Z"
                  fill="#F4F5F4"
                />
                <ellipse
                  cx="45.6"
                  cy="54.4"
                  rx="25.6"
                  ry="25.6"
                  fill="url(#paint0_linear_2397_43593)"
                />
                <circle
                  cx="77.6"
                  cy="48"
                  r="32"
                  fill="url(#paint1_linear_2397_43593)"
                />
                <ellipse
                  cx="109.6"
                  cy="57.5999"
                  rx="22.4"
                  ry="22.4"
                  fill="url(#paint2_linear_2397_43593)"
                />
              </g>
              <circle cx="21" cy="19" r="5" fill="#EFF0EF" />
              <circle cx="18" cy="109" r="7" fill="#EFF0EF" />
              <circle cx="145" cy="35" r="7" fill="#EFF0EF" />
              <circle cx="134" cy="8" r="4" fill="#EFF0EF" />
              <g filter="url(#filter1_b_2397_43593)">
                <path
                  d="M52 86C52 72.7452 62.7452 62 76 62C89.2548 62 100 72.7452 100 86C100 99.2548 89.2548 110 76 110C62.7452 110 52 99.2548 52 86Z"
                  fill="#344054"
                  fill-opacity="0.4"
                />
                <path
                  d="M74 82V81M74 86.5V85.5M74 91V90M69.2 78H82.8C83.9201 78 84.4802 78 84.908 78.218C85.2843 78.4097 85.5903 78.7157 85.782 79.092C86 79.5198 86 80.0799 86 81.2V82.5C84.067 82.5 82.5 84.067 82.5 86C82.5 87.933 84.067 89.5 86 89.5V90.8C86 91.9201 86 92.4802 85.782 92.908C85.5903 93.2843 85.2843 93.5903 84.908 93.782C84.4802 94 83.9201 94 82.8 94H69.2C68.0799 94 67.5198 94 67.092 93.782C66.7157 93.5903 66.4097 93.2843 66.218 92.908C66 92.4802 66 91.9201 66 90.8V89.5C67.933 89.5 69.5 87.933 69.5 86C69.5 84.067 67.933 82.5 66 82.5V81.2C66 80.0799 66 79.5198 66.218 79.092C66.4097 78.7157 66.7157 78.4097 67.092 78.218C67.5198 78 68.0799 78 69.2 78Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_2397_43593"
                  x="0"
                  y="16"
                  width="152"
                  height="104"
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
                  <feMorphology
                    radius="4"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_2397_43593"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2397_43593"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="4"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect2_dropShadow_2397_43593"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="12" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2397_43593"
                    result="effect2_dropShadow_2397_43593"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2397_43593"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_2397_43593"
                  x="44"
                  y="54"
                  width="64"
                  height="64"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2397_43593"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2397_43593"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2397_43593"
                  x1="25.9429"
                  y1="37.4858"
                  x2="71.2"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D0D5DD" />
                  <stop offset="0.350715" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2397_43593"
                  x1="53.0286"
                  y1="26.8571"
                  x2="109.6"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D0D5DD" />
                  <stop offset="0.350715" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2397_43593"
                  x1="92.4"
                  y1="42.8"
                  x2="132"
                  y2="79.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D0D5DD" />
                  <stop offset="0.350715" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div>
              Tickets sold or refunded will automatically appear <br /> here.
              Create event to sell your admin-tickets faster.
            </div>

            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.16675V15.8334M4.16669 10.0001H15.8334"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Create event
            </button>
          </div> */}
        </div>
      </div>

      {selectedEvent && (
        <div className="admin-tickets__details">
          <div className="admin-tickets__details__title">
            <div>
              <div>Ticket information</div>
              <div>See more information about this ticket.</div>
            </div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer"
              onClick={() => setSelectedEvent(null)}
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
          <div className="admin-tickets__details__tabs">
            <div>
              <div
                className={
                  detailsTab === "info" && "admin-tickets__details__tabs__active"
                }
                onClick={() => setDetailsTab("info")}
              >
                Ticket Information
              </div>
              <div
                className={
                  detailsTab === "breakdown" && "admin-tickets__details__tabs__active"
                }
                onClick={() => setDetailsTab("breakdown")}
              >
                Ticket Breakdown
              </div>
            </div>

            <div>
              View event information
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L15 5M15 5H8.33333M15 5V11.6667"
                  stroke="#02A056"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {detailsTab === "info" &&
            [
              {
                id: 1,
                heading: " Davido Live In Concert",
                location: "Eko Atlantic",
                state: "Lagos",
                date: "Wed Aug 10, 2024",
                time: "6:00 PM",
                price: "₦ 5,000,000",
                order: "#39-52879/WDC",
                stats: "Sold",
              },
            ].map((listData) => {
              return <ListingCard key={listData.id} {...listData} />;
            })}
          {detailsTab === "info" && (
            <>
              <div className="admin-tickets__details__info">
                <div>Ticket ID</div>
                <div>{selectedEvent?.id}</div>
              </div>
              <div className="admin-tickets__details__info">
                <div>Ticket name</div>
                <div>{selectedEvent?.ticket?.type}</div>
              </div>
              <div className="admin-tickets__details__info">
                <div>Amount</div>
                <div>{selectedEvent?.ticket?.price}</div>
              </div>
              <div className="admin-tickets__details__info">
                <div>Date purchased</div>
                <div>{selectedEvent?.date}</div>
              </div>
              <div className="admin-tickets__details__status">
                <div>Status</div>
                <div
                  className={`admin-tickets__details__status__${selectedEvent?.status}`}
                >
                  {" "}
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3"
                      cy="3"
                      r="3"
                      fill={
                        selectedEvent?.status === "sold"
                          ? "rgba(1, 120, 65, 1)"
                          : selectedEvent?.status === "expired"
                          ? "#B42318"
                          : "#565856"
                      }
                    />
                  </svg>
                  {selectedEvent?.status}
                </div>
              </div>
            </>
          )}

         {detailsTab === "breakdown" && <div className="admin-tickets__details__breakdown">
            <div className="admin-tickets__details__breakdown__header">
              <div>S/N</div>
              <div>Description</div>
              <div>Amount</div>
            </div>
            <div className="admin-tickets__details__breakdown__body">
              <div>1</div>
              <div>
                <div>Regular ticket</div>
                <div>Davido Live In Concert</div>
              </div>
              <div>₦40,000.00</div>
            </div>
            <div className="admin-tickets__details__breakdown__body">
              <div>2</div>
              <div>Tax</div>
              <div>- ₦0.00</div>
            </div>
            <div className="admin-tickets__details__breakdown__body">
              <div>3</div>
              <div>Fees</div>
              <div>- ₦0.00</div>
            </div>
            <div className="admin-tickets__details__breakdown__footer">
              <div></div>
              <div>Total amount</div>
              <div>₦40,000.00</div>
            </div>
          </div>}
              <div className="admin-tickets__details__close">
                <button
                onClick={() => setSelectedEvent(null)}
                >Close</button>
              </div>
        </div>
      )}
    </div>
  );
}
