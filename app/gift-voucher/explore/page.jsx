"use client";
import Footer from "@/app/components/footer";
import HomeHeader from "@/app/components/home/header";
import { PicksItems } from "@/app/components/userComponents/picksForMe/PicksItems";
import { picksData } from "@/app/components/userComponents/picksForMe/picksData";
import Image from "next/image";
import { useState } from "react";
import image from "/public/assets/DD/ticket.png";

export default function HomePicks() {
  const [list, setList] = useState(3);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [faq, setFaq] = useState(0);

  const slicedData = picksData.slice(0, list);

  return (
    <>
      <div className="gift-explore">
        <main>
          <div className="gift-explore__hero">
            <HomeHeader />

            <h1 className="gift-explore__hero__title">Explore Gift Vouchers</h1>
          </div>

         
<div className="gift-explore__main">
    <div className="gift-explore__main__inner">
        <div className="gift-explore__main__inner__card1">
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
            <div className="gift-explore__main__inner__card1__card">
                <div>
                    <div>Amount</div>
                    <div>₦5,000</div>
                </div>

                <button>Gift voucher</button>
            </div>
        </div>

        <div className="gift-explore__main__inner__card2">
            <div className="gift-explore__main__inner__card2__banner">
            Advertisement Banner

            </div>
        </div>
    </div>
</div>
         
        </main>

    
      
      </div>
      <Footer />
    </>
  );
}
