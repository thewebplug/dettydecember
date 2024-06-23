"use client";
import React, { useState } from "react";
import { WishlistItem } from "@/app/components/userComponents/wishlist/WishlistItem";
import { wishlistData } from "@/app/components/userComponents/wishlist/wishlistData";
import arrowIcon from "/public/assets/DD/arrowDown.svg"
import Image from "next/image";

export default function MyWishlist() {
  const [list, setList] = useState(6);
  const slicedData = wishlistData.slice(0, list);

  const showMore = () => {
    setList((prev) => prev + 6);
  };
  return (
    <div className="bg-[#fff] px-12 py-12 w-full rounded-lg border-[1px shadow-sm font-inter border-[#EAEBEA]">
      <h1 className="text-[36px] text-[#13162D] syne">My Wishlists</h1>
      <main className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-24">
        {slicedData.map((data) => {
          return <WishlistItem key={data.id} {...data} />;
        })}
      </main>
      <div className="text-center flex justify-center pt-6">
        {list < wishlistData.length && (
          <button
            className=" text-center justify-center flex items-center gap-2 button-gray"
            onClick={showMore}
          >
            see more
            <Image src={arrowIcon} />
          </button>
        )}
      </div>
    </div>
  );
}
