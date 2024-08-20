"use client";
import React, { useState } from "react";
import { eventData } from "../components/businessDashboard/event-management/data";
import { PaginationSection } from "../components/userComponents/Pagination/PaginationSection";
import Image from "next/image";
import { EventManagementViewModal } from "../components/businessDashboard/modals/EventModal";
import { ViewDropdown } from "../components/businessDashboard/modals/ViewDropdown";
import SearchIcon from "@/public/assets/DD/search.svg";


export default function dashboard() {
  const [searchFilter, setSearchFilter] = useState("");
  const [eventStatus, seteventStatus] = useState("All events");
  const [OpenEventModal, setOpenEventModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalData, setModalData] = useState({
    totalAmount: 0,
    tax: 0,
    fees: 0,
    payoutTotal: 0,
  });
  const statuses = ["All events", "Upcomming", "Cancelled", "Past"];
  const [ViewOpen, setViewOpen] = useState(false);
  const handleOpenView = (item) => {
    setSelectedItem(item)
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

  return (
    <main className="border-[1px] border-borderSecondary rounded-[10px] font-inter ">
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="flex justify-between items-center p-6 text-[14px] font-medium leading-[20px]">
          <div className="flex items-center gap-6">
            {statuses.map((status) => (
              <button
                onClick={() => seteventStatus(status)}
                className={`cart-btn capitalize ${
                  status === eventStatus ? "active-event-btn" : ""
                }`}
                key={status}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="pl-4 py-4 ">
            <div className="relative">
              <input
                className="block text-[14px] text-gray-400 bg-transparent w-96 rounded-lg border-[1px] border-borderSecondary focus:outline-none px-12 py-4 "
                type="search"
                placeholder="Search"
                onChange={handleSearchFilter}
                name="search"
                id="search"
              />
              <Image
                src={SearchIcon}
                alt="search-icon"
                className=" absolute top-[25%] px-2"
              />
            </div>
          </div>
        </div>
        <main className="w-full border-bl-[1px] border-br-[1px] border-t-[1px] border-borderSecondary rounded-bl-[10px] rounded-br-[10px] pb-4">
          <table className=" credit_balance_table text-textTertiary text-[12px] w-full ">
            <thead className="bg-[#F9FAFA]  ">
              <tr className="">
                <th>Event ID</th>
                <th>Name</th>
                <th>Venue</th>
                <th>Date Created</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((data) => (
                <tr key={data.id} className="">
                  <td>{data.event}</td>
                  <td className="text-textPrimary">{data.name}</td>
                  <td>{data.venue}</td>
                  <td>{data.date}</td>

                  <td>
                    <button
                      className={`flex items-center gap-2 py-[4px] px-[6px] text-[12px] font-medium border-[1px] border-borderSecondary rounded-lg `}
                    >
                      <span
                        className={`w-2 h-2 rounded-full  ${
                          data.status === "Upcomming"
                            ? "bg-green "
                            : data.status === "Cancelled"
                            ? "bg-[#929692] "
                            : data.status === "Past"
                            ? "bg-[#F04438] "
                            : ""
                        }`}
                      ></span>
                      {data.status}
                    </button>
                  </td>
                  <td
                    onClick={() => handleViewClick(data.id)}
                    className="pointer"
                  >
                    View
                  </td>
                  <td className="relative">
                    <div className="pointer" onClick={()=>handleOpenView(data)}>...</div>
                    <div className="absolute top-12 -left-[160px] bg-white z-[99999]">
                      {ViewOpen && selectedItem.id === data.id && (
                        <ViewDropdown />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4">
            <PaginationSection
              totalPosts={filteredData.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </main>
        {/* {OpenEventModal && (
          <EventManagementViewModal
            OpenViewModal={OpenEventModal}
            setOpenViewModal={setOpenEventModal}
            data={selectedData}
          />
        )} */}
      </div>
    </main>
  );
}
