import React, {useState} from "react";
import { CreditBalanceData } from "./CreditBalance/CreditBalanceData";
import { PaginationSection } from "../Pagination/PaginationSection";

export const CreditBalance = () => {

  // pagination section
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = CreditBalanceData.slice(firstPostIndex, lastPostIndex);

  // format amount
  const formatAmount = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col gap-6 font-inter">
      <main className=" flex flex-col gap-4 border-b-[1px] py-4 border-b-[#EAEBEA]">
        <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
          Credit Balance
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
          Placeholder text, placeholder text, placeholder text.
        </p>
      </main>
      <main className=" flex flex-col gap-4 border-[1px]  p-6 border-[#EAEBEA] rounded-[10px]">
        <h2 className="font-semibold text-[14px] text-textTertiary  leading-[20px]">
          Credit Balance
        </h2>
        <p className="text-[36px] font-bold syne text-textPrimary leading-[20px]">
          #0.00
        </p>
      </main>
      <main className=" flex flex-col py-6 gap-4 border-t-[#EAEBEA] border-t-[1px]">
        <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
          Credit balance history
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
          View your credit balance history here.
        </p>
      </main>

      <main className="w-full border-[1px] border-borderSecondary rounded-[10px] pb-4">
        <table className=" credit_balance_table text-textTertiary text-[12px] w-full ">
          <thead className="bg-[#F9FAFA]  ">
            <tr className="">
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((data) => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td className={`${ data.amount > 0 ? "text-green": ""}`}>{formatAmount(data.amount)}.00</td>
                <td>
                  <button
                    className={`flex items-center gap-2 py-[4px] px-[6px] text-[12px] font-medium border-[1px] border-borderSecondary rounded-lg `}
                  >
                  
                    <span
                      className={`w-2 h-2 rounded-full  ${
                        data.category === "Payout"
                          ? "bg-[#7A5AF8] "
                          : data.category === "Refund"
                          ? "bg-[#EE46BC] "
                          : data.category === "Purchase"
                          ? "bg-[#2E90FA] "
                          : ""
                      }`}
                    ></span>
                    {data.category}
                  </button>
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
                <td>View</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4">
        <PaginationSection totalPosts={CreditBalanceData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
        </div>
      </main>
    
    </div>
  );
};
