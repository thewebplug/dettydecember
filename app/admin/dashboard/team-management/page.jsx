"use client";
import React, { useEffect, useState } from "react";
import { PaginationSection } from "../../../components/userComponents/Pagination/PaginationSection";
import Image from "next/image";
import { EventManagementViewModal } from "../../../components/businessDashboard/modals/EventModal";
import ShareModal from "../../../components/businessDashboard/modals/ShareModal";
import { ViewDropdown } from "../../../components/businessDashboard/modals/ViewDropdown";
import SearchIcon from "@/public/assets/DD/search.svg";
import { eventData } from "../../../components/businessDashboard/event-management/data";
import { Header } from "../../../components/businessDashboard/Header";
import FailModal from "@/app/components/failModal";

export default function Dashboard() {
  const [tab, setTab] = useState("All users");
  const [detailsTab, setDetailsTab] = useState("info");
  const [exportMenu, setExportMenu] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [profilePictureOpen, setProfilePictureOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [unsuspendOpen, setUnsuspendOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [eventStatus, seteventStatus] = useState("All events");
  const [OpenEventModal, setOpenEventModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const [unflagOpen, setUnflagOpen] = useState(false);
  const [adminRoleOpen, setAdminRoleOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [addRoleOpen, setAddRoleOpen] = useState(false);
  const [addDepartmentOpen, setAddDepartmentOpen] = useState(false);
  const [addTeamMemberOpen, setAddTeamMemberOpen] = useState(false);
  const [edit, setEdit] = useState(true);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [editDepartment, setEditDepartment] = useState(false);
  const [editTeamMember, setEditTeamMember] = useState(true);
  const statuses = ["All events", "Upcomming", "Cancelled", "Past"];
  const [ViewOpen, setViewOpen] = useState(false);
  const handleOpenView = (item) => {
    setSelectedItem(item);
    setViewOpen(!ViewOpen);
  };
  // Filter data by referStatus and searchFilter
  const filteredData = eventData.filter((item) => {
    const matchesStatus =
      eventStatus === "All events" || item.status === eventStatus;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  // pagination section
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  //   search filter by referring domain
  const handleSearchFilter = (e) => setSearchFilter(e.target.value);

  // HANDLE VIEW MODAL
  const handleViewClick = (id) => {
    const data = eventData.find((item) => item.id === id);
    setSelectedData(data);
    setOpenEventModal(true);
  };

  const handleAddRole = (item) => {
    if (item === "") return;
    console.log("item", item);
    console.log("!roles.includes(item)", !roles.includes(item));

    const temp = [...roles];
    if (!roles.includes(item)) {
      temp.unshift(item);
      setRoles([...temp]);
    }
  };
  const handleAddDepartment = (item) => {
    if (item === "") return;
    console.log("item", item);
    console.log("!roles.includes(item)", !selectedDepartments.includes(item));

    const temp = [...selectedDepartments];
    if (!selectedDepartments.includes(item)) {
      temp.unshift(item);
      setSelectedDepartments([...temp]);
    }
  };

  useEffect(() => {
    console.log("roles", roles);
  }, [roles]);
  const handleRemoveRole = (item) => {
    const temp = [...roles];
    const temp2 = temp.filter((value) => value !== item);
    setRoles([...temp2]);
  };

  return (
    <div className="admin-team-management">
      <div className="admin-team-management__title">
        <div>
          <h1>Team management</h1>
          <h2>Manage your team members and their account permissions here..</h2>
        </div>
        <div>
          <div>
            <button onClick={() => setAdminRoleOpen(!adminRoleOpen)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83325 12.4999L9.99992 16.6666L14.1666 12.4999M5.83325 7.49992L9.99992 3.33325L14.1666 7.49992"
                  stroke="#02A056"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Admin role and department
            </button>
            {adminRoleOpen && (
              <div className="admin-team-management__table__header__buttons__menu">
                <div
                onClick={() => {
                  setAdminRoleOpen(false);
                  setEdit(false);
                  setAddRoleOpen(true);
                }}
                >Create new admin role</div>
                <div
                 onClick={() => {
                  setAdminRoleOpen(false);
                  setEdit(true);
                  setAddRoleOpen(true);
                }}
                >Update existing admin role</div>
                <div
                 onClick={() => {
                  setAdminRoleOpen(false);
                  setEditDepartment(false)
                  setAddDepartmentOpen(true);
                }}
                >Create new department</div>
                <div
                onClick={() => {
                  setAdminRoleOpen(false);
                  setEditDepartment(true)
                  setAddDepartmentOpen(true);
                }}
                >Update existing department</div>
              </div>
            )}
          </div>
          <button
          onClick={() => {
            setEditTeamMember(false)
            setAddTeamMemberOpen(true)
          }}
          >
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
            Add team member
          </button>
        </div>
      </div>

      <div className="admin-team-management__table">
        <div className="admin-team-management__table__header">
          <div className="admin-team-management__table__header__admin-team-management">
            <div
              className={
                tab === "All team members" &&
                "admin-team-management__table__header__admin-team-management__active"
              }
              onClick={() => setTab("All team members")}
            >
              All team members
            </div>
            <div
              className={
                tab === "Online" &&
                "admin-team-management__table__header__admin-team-management__active"
              }
              onClick={() => setTab("Online")}
            >
              Online
            </div>
            <div
              className={
                tab === "Offline" &&
                "admin-team-management__table__header__admin-team-management__active"
              }
              onClick={() => setTab("Offline")}
            >
              Offline
            </div>
          </div>

          <div>
            <form
              action=""
              className="admin-team-management__table__header__form"
            >
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

            <div className="admin-team-management__table__header__buttons">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                    stroke="#565856"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Select dates
              </button>
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
              <div>
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
                  <div className="admin-team-management__table__header__buttons__menu">
                    <div>PDF Document (.pdf)</div>
                    <div>CSV Document (.csv)</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="admin-team-management__table__body">
          <div className="admin-team-management__table__body__heading">
            <div>Team ID</div>
            <div>Name</div>
            <div>Last active</div>
            <div>Date registered</div>
            <div>Department</div>
            <div>Status</div>
            <div></div>
            <div></div>
          </div>

          <div className="admin-team-management__table__body__inner">
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
                status: "online",
                department: ["Product", "Development"],
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
                status: "online",
                department: ["Product", "Design"],
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
                status: "online",
                department: ["Marketing", "Sales", "+2"],
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
                status: "offline",
                department: ["Development"],
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
                status: "offline",
                department: ["Finance"],
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
                status: "Upcoming",
                department: ["Finance"],
              },
            ]?.map((event) => (
              <div onClick={() => setSelectedEvent(event)}>
                <div>{event?.id}</div>

                <div className="admin-team-management__table__body__inner__event">
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

                <div className="admin-team-management__table__body__inner__ticket">
                  <div>22 Jan 2024</div>
                  <div></div>
                </div>
                <div className="admin-team-management__table__body__inner__ticket">
                  <div>22 Jan 2024</div>
                  <div></div>
                </div>

                <div className="admin-team-management__table__body__inner__statuses">
                  {event?.department?.map((item) => (
                    <div
                      className={`admin-team-management__table__body__inner__status admin-team-management__table__body__inner__status-${item
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      <div>{item}</div>
                    </div>
                  ))}
                </div>

                <div
                  className={`admin-team-management__table__body__inner__status admin-team-management__table__body__inner__status-${event?.status
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
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
                      fill={event?.status === "online" ? "#17B26A" : "#565856"}
                    />
                  </svg>
                  <div>{event?.status}</div>
                </div>

                <div onClick={() => {
                  setEditTeamMember(true)
                  setAddTeamMemberOpen(true);
                }}>Edit</div>
                <div
                  className="admin-team-management__table__body__inner__suspend"
                  onClick={() => setFlagOpen(true)}
                >
                  Remove
                </div>
              </div>
            ))}
          </div>

          <div className="admin-team-management__table__body__footer">
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
          {/* <div className="admin-team-management__table__body__empty">
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
              Tickets sold or Buyers will automatically appear <br /> here.
              Create event to sell your admin-team-management faster.
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

      {OpenEventModal && (
        <EventManagementViewModal
          OpenViewModal={OpenEventModal}
          setOpenViewModal={setOpenEventModal}
          data={selectedData}
        />
      )}

      {flagOpen && (
        <div className="admin-team-management__flagModal-cover"></div>
      )}

      {flagOpen && (
        <div className="admin-team-management__flagModal">
          <div className="admin-team-management__flagModal__close">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#FEE4E2"
              />
              <path
                d="M16 27C16 27 17 26 20 26C23 26 25 28 28 28C31 28 32 27 32 27V16C32 16 31 17 28 17C25 17 23 15 20 15C17 15 16 16 16 16M16 34L16 14"
                stroke="#D92D20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              className="pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setFlagOpen(false)}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#ACAFAC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="admin-team-management__flagModal__title">
            Flag event
          </div>
          <div className="admin-team-management__flagModal__subtitle">
            Are you sure you want to flag this event? This action can be undone.
          </div>

          <label htmlFor="">Flagging category</label>
          <select name="" id="">
            <option value="">Select flagging category</option>
          </select>
          <label htmlFor="">Reason(s)</label>
          <textarea
            name=""
            id=""
            placeholder="Enter detailed reason(s)..."
          ></textarea>

          <div className="admin-team-management__flagModal__footer">
            <button onClick={() => setFlagOpen(false)}>Cancel</button>
            <button>Yes, flag</button>
          </div>
        </div>
      )}

      <FailModal
        open={unflagOpen}
        setOpen={setUnflagOpen}
        // icon={
        //   <svg
        //     width="48"
        //     height="48"
        //     viewBox="0 0 48 48"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        //   >
        //     <path
        //       d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
        //       fill="#FEE4E2"
        //     />
        //     <path
        //       d="M16 27C16 27 17 26 20 26C23 26 25 28 28 28C31 28 32 27 32 27V16C32 16 31 17 28 17C25 17 23 15 20 15C17 15 16 16 16 16M16 34L16 14"
        //       stroke="#D92D20"
        //       stroke-width="2"
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //     />
        //   </svg>
        // }
        title="Delete team member"
        subtitle="Are you sure you want to delete this team member’s information? This action can not be undone."
        buttonText={["No cancel", "Yes, delete"]}
        callback={[() => setUnflagOpen(false), () => setUnflagOpen(false)]}
        group={true}
      />

      {addRoleOpen && (
        <div className="admin-team-management__add-user">
          <div className="admin-team-management__add-user__inner">
            <div className="admin-team-management__add-user__inner__title">
              <div>
                <div>
                  {edit
                    ? "Update existing admin role"
                    : "Create new admin role"}
                </div>
                <div>
                  {edit
                    ? "Update or edit existing admin role already created for the company."
                    : "Create new admin role for the company."}
                </div>
              </div>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setAddRoleOpen(false)}
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
            <div className="admin-team-management__add-user__inner__inner">
              {edit && (
                <>
                  <label htmlFor="">Admin role</label>
                  <select
                    name=""
                    id=""
                    // onChange={(e) => handleAddRole(e.target.value)}
                  >
                    <option value="">Select the admin role</option>
                    <option value="Read-only">Read-only</option>
                  </select>
                </>
              )}
              <label htmlFor="">Admin role name</label>
              <input type="text" />
              <label htmlFor="">Admin role name</label>
              <select
                name=""
                id=""
                onChange={(e) => handleAddRole(e.target.value)}
              >
                <option value="">
                  Select multiple permissions for this role
                </option>
                <option value="Read-only">Read-only</option>
              </select>
              <div className="admin-team-management__add-user__inner__inner__roles">
                {roles?.map((item) => (
                  <div>
                    {item}{" "}
                    <svg
                      className="pointer"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleRemoveRole(item)}
                    >
                      <path
                        d="M9.5 4.5L4.5 9.5M4.5 4.5L9.5 9.5"
                        stroke="#ACAFAC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-team-management__add-user__inner__footer">
              <button onClick={() => setAddRoleOpen(false)}>Close</button>
              <button onClick={() => setAddRoleOpen(false)}>
                Create admin role
              </button>
            </div>
          </div>
        </div>
      )}
      {addDepartmentOpen && (
        <div className="admin-team-management__add-user">
          <div className="admin-team-management__add-user__inner">
            <div className="admin-team-management__add-user__inner__title">
              <div>
                <div>
                  {editDepartment
                    ? "Update existing department"
                    : "Create new department"}
                </div>
                <div>
                  {editDepartment
                    ? "Update or edit existing department already created for the company."
                    : "Create new department for the company."}
                </div>
              </div>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setAddDepartmentOpen(false)}
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
            <div className="admin-team-management__add-user__inner__inner">
              {editDepartment && (
                <>
                  <label htmlFor="">Department</label>
                  <select name="" id="">
                    <option value="">Select the department</option>
                  </select>
                </>
              )}
              <label htmlFor="">Department name</label>
              <input type="text" placeholder="Enter the department name" />
            </div>

            <div className="admin-team-management__add-user__inner__footer">
              <button onClick={() => setAddDepartmentOpen(false)}>Close</button>
              <button onClick={() => setAddDepartmentOpen(false)}>
                Create department
              </button>
            </div>
          </div>
        </div>
      )}
      {addTeamMemberOpen && (
        <div className="admin-team-management__add-user">
          <div className="admin-team-management__add-user__inner">
            <div className="admin-team-management__add-user__inner__title">
              <div>
                <div>
                    {editTeamMember ? "Edit team member" : "Add team member"}
                </div>
                <div>
                 {editTeamMember ? "Edit team member information and access." : "Invite new team member to have access to the admin."}
                </div>
              </div>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setAddTeamMemberOpen(false)}
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
            <div className="admin-team-management__add-user__inner__inner">
              
              <label htmlFor="">First name</label>
              <input
                type="text"
                placeholder="Enter the team member’s first name"
              />
              <label htmlFor="">Last name</label>
              <input
                type="text"
                placeholder="Enter the team member’s last name"
              />
              <label htmlFor="">Email address</label>
              <input
                type="text"
                placeholder="Enter the team member’s email address"
              />
              <label htmlFor="">Department</label>
              <select
                name=""
                id=""
                onChange={(e) => handleAddDepartment(e.target.value)}
              >
                <option value="">Select department</option>
                <option value="Marketing">Marketing</option>
                <option value="Product">Product</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
              </select>

              {selectedDepartments?.length > 0 && <div className="admin-team-management__add-user__inner__inner__departments">
                {selectedDepartments?.map((item) => (
                  <div
                    className={`admin-team-management__add-user__inner__inner__departments__${item
                      ?.toLowerCase()
                      ?.split(" ")
                      ?.join("-")}`}
                  >
                     {item}{" "}
                      <svg
                        className="pointer"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 3L3 9M3 3L9 9"
                          stroke="#8098F9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                  </div>
                ))}
              </div>}
              <label htmlFor="">Admin role</label>
              <select name="" id="">
                <option value="">Select admin role</option>
              </select>
            </div>

            <div className="admin-team-management__add-user__inner__footer">
              <button onClick={() => setAddTeamMemberOpen(false)}>Close</button>
              <button onClick={() => setAddTeamMemberOpen(false)}>
                Create department
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
