import Image from 'next/image'
import React from 'react'
import nextArrow from "/public/assets/DD/nextArrow.svg"
import prevArrow from "/public/assets/DD/prevArrow.svg"

export const PaginationSection = ({  totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  
    const activePages = pageNumbers.slice(
      Math.max(0, currentPage - 1 - pageNumLimit),
      Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );
  
    const handleNextPage = () => {
      if (currentPage < pageNumbers.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Function to render page numbers with ellipsis
    const renderPages = () => {
      const renderedPages = activePages.map((page, idx) => (  
        <button key={idx} onClick={() => setCurrentPage(page)}  className={currentPage === page ? "active-pag-btn" : "pag-btn"}>
     {page}
        </button>
      ));
  
      // Add ellipsis at the start if necessary
      if (activePages[0] > 1) {
        renderedPages.unshift(
        
            <button  key="ellipsis-start" onClick={() => setCurrentPage(activePages[0] - 1)}>...</button>
 
        );
      }
  
      // Add ellipsis at the end if necessary
      if (activePages[activePages.length - 1] < pageNumbers.length) {
        renderedPages.push(
        
            <button key="ellipsis-end" onClick={() => setCurrentPage(activePages[activePages.length - 1] + 1)}>...</button>
     
        );
      }
  
      return renderedPages;
    };
  return (
    <main className="w-full border-t-[1px]  font-inter pt-[20px] flex text-[14px] font-medium leading-[20px] mt-[24px] justify-between items-baseline border-[#EAEBEA]">
    <button className=" prev-next-btn flex gap-2 items-center " onClick={handlePrevPage}><Image src={prevArrow} alt="prev-btn-icon"  />Previous </button>
    <div>
        {renderPages()}
    </div>
    <button className=" prev-next-btn flex gap-2 items-center "onClick={handleNextPage}>Next <Image src={nextArrow} alt="next-btn-icon" /></button>
  </main>
  )
}
