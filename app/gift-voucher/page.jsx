"use client";

import DefBlack from "@/app/components/DefBlack";
import Footer from "@/app/components/footer";
import Image from "next/image";
import HomeHeader from "../components/home/header";
import Faq from "../components/faq";

export default function SellTickets() {
  return (
    <div className="sell-ticket">
      <div className="sell-ticket__hero">
        <HomeHeader />

        <h1 className="sell-ticket__hero__title">
         Gift vouchers made for you
        </h1>
        <h2 className="sell-ticket__hero__subtitle">
          Discover all the ways DettyDecember is there for you through the
          entire ticketing process, from everything behind-the-scenes to
          backstage on the big day.{" "}
        </h2>
        <button className="sell-ticket__hero__button"
        onClick={() => window.location.href="/gift-voucher/explore"}
        >
          Explore gift voucher
        </button>

        <div className="sell-ticket__hero__mini-title">
          How it works
        </div>

        <div className="sell-ticket__hero__cards sell-ticket__hero__cards-max">
          <div className="sell-ticket__hero__cards__card">
            <div>1</div>
            <div className="sell-ticket__hero__cards__card__title">
              Select Tickets to Sell
            </div>
            <div className="sell-ticket__hero__cards__card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel purus risus. Phasellus sit amet egestas enim.
            </div>
          </div>
          
          <div className="sell-ticket__hero__cards__card">
            <div>2</div>
            <div className="sell-ticket__hero__cards__card__title">
              Select Tickets to Sell
            </div>
            <div className="sell-ticket__hero__cards__card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel purus risus. Phasellus sit amet egestas enim.
            </div>
          </div>
          
          <div className="sell-ticket__hero__cards__card">
            <div>3</div>
            <div className="sell-ticket__hero__cards__card__title">
              Select Tickets to Sell
            </div>
            <div className="sell-ticket__hero__cards__card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel purus risus. Phasellus sit amet egestas enim.
            </div>
          </div>
          
          <div className="sell-ticket__hero__cards__card">
            <div>4</div>
            <div className="sell-ticket__hero__cards__card__title">
              Select Tickets to Sell
            </div>
            <div className="sell-ticket__hero__cards__card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel purus risus. Phasellus sit amet egestas enim.
            </div>
          </div>
          
        </div>
      </div>

      
    

      <Faq />

      <DefBlack />
      <Footer />
    </div>
  );
}
