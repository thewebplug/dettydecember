import React, { useState } from "react";
import { PaginationSection } from "../Pagination/PaginationSection";
import { GiftVouchersData } from "./GiftVouchers/GiftVouchersData";
import { VouchersDetailsViewModal } from "./Modals/VouchersDetailView";
import Image from "next/image";
import cancelIcon from "/public/assets/DD/cancel.svg";

export const GiftVouchers = () => {
  const [OpenViewModal, setOpenViewModal] = useState(false)
  const [showVoucherModal, setShowVoucherModal] = useState(false)
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = GiftVouchersData.slice(firstPostIndex, lastPostIndex);

  const formatAmount = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits:2,
    }).format(value);
  };
  // HANDLE VIEW MODAL
  const handleViewClick = (id) => {
    const data = GiftVouchersData.find((item) => item.id === id);
    console.log(data)
    setSelectedData(data);

    setOpenViewModal(true);
  };
  return (
    <div className="flex flex-col gap-6 font-inter">
      <main className=" flex flex-col gap-4 border-b-[1px] py-4 border-b-[#EAEBEA]">
        <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
          Gift Vouchers
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
          Placeholder text, placeholder text, placeholder text.
        </p>
      </main>
      <main className=" flex justify-between items-center border-[1px]  p-6 border-[#EAEBEA] rounded-[10px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[14px] text-textTertiary  leading-[20px]">
            Vouchers Balance
          </h2>
          <p className="text-[36px] font-bold syne text-textPrimary leading-[20px]">
           {formatAmount(250000)}
          </p>
        </div>
        <div>
        <button className='add-btn' onClick={()=>setShowVoucherModal(true)}>Add Voucher</button>
        </div>
      </main>
      <main className=" flex flex-col py-6 gap-4 border-t-[#EAEBEA] border-t-[1px]">
        <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
          Gift voucher history
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
          View your gift voucher history here.
        </p>
      </main>

      <main className="w-full border-[1px] border-borderSecondary rounded-[10px] pb-4">
        <table className=" credit_balance_table text-textTertiary text-[12px] w-full ">
          <thead className="bg-[#F9FAFA]  ">
            <tr className="">
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((data) => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td className={`${data.amount > 0 ? "text-green" : ""}`}>
                  {formatAmount(data.amount)}.00
                </td>
                <td className="">
                  <button
                    className={`py-[4px] px-[6px] rounded-lg flex items-center  ${
                      data.status === "Successful"
                        ? "bg-[#ECFDF3] text-[#067647] "
                        : data.status === "Pending"
                        ? "bg-[#FFFAEB] text-[#B54708] "
                        : data.status === "Failed"
                        ? "bg-[#FEF3F2] text-[#B42318] "
                        : ""
                    } text-[12px] font-medium `}
                  >
                    {data.status}
                  </button>
                </td>
                <td onClick={()=>handleViewClick(data.id)} className="pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4">
          <PaginationSection
            totalPosts={GiftVouchersData.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
      {OpenViewModal && <VouchersDetailsViewModal OpenViewModal={OpenViewModal} setOpenViewModal={setOpenViewModal} data={selectedData} />}
      {showVoucherModal && <AddVouchersModal setShowVoucherModal={setShowVoucherModal} showVoucherModal={showVoucherModal} />}
    </div>
  );
};




 const AddVouchersModal =({setShowVoucherModal, showVoucherModal})=>{
   return(
    <div className=" font-inter w-full h-screen  bg-[#0F0F0F]/80 backdrop-blur-sm fixed top-0 left-0 z-10">
    <div className="h-screen flex justify-end">
      <div className="flex  w-[30%]  flex-col  h-screen gap-6 py-8  bg-[#ffff]   ">
        <div className="w-full flex flex-col justify-between h-full">
          <div className="flex flex-col gap-12">
            <main className="flex justify-between gap-24 pb-6 w-full border-b-[1px] px-8 border-b-borderSecondary">
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                  Add Voucher
                </h2>
                <p className="text-[14px] text-textTertiary leading-[20px]">
                  Here's a breakdown of your payment details.
                </p>
              </div>
              <Image
                src={cancelIcon}
                alt=""
                onClick={() => setShowVoucherModal(!showVoucherModal)}
                className="cursor-pointer"
              />
            </main>
          <div className="flex flex-col gap-6 px-8">
                <div className="flex flex-col gap-2 text-[14px] text-textSecondary">
                  <label htmlFor="voucher-type">Voucher Type</label>
                  <select name="vocher-type" id="voucher-type" className="w-full px-[8px] py-[12px] border-[1px] border-borderPrimary rounded-lg">
                    <option value="">DettyDecember Voucher</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 text-[14px] text-textSecondary">
                  <label htmlFor="voucher-type">Voucher Type</label>
                  <input type="number" name="voucher-number" id="voucher-number" className="w-full px-[8px] py-[12px] border-[1px] border-borderPrimary rounded-lg" />
                </div>
          </div>
          </div>
          <div className="flex justify-end p-8 border-t-[1px] border-borderSecondary">
            <button onClick={() => setOpenViewModal(false)} className="add-btn border-[1px] border-textSecondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
   )
 }
