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
              Event Organizers
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
              Livespot 360
            </div>

            <h1 className="home-picks__hero__title">Livespot 360</h1>
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
            <div>Reviews</div>
          </div>

          <div className="user-home__grid">
            <div>
              <div className="user-home__grid__picks">
                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>About</div>
                  </div>

                 
                 <div className="user-home__grid__picks__card1__events-img">
                 <Image
                        alt=""
                        src="/assets/concert.png"
                        layout="fill"
                        objectFit="cover"
                        style={{borderRadius: "12px"}}
                      />
                 </div>

                 <div className="user-home__grid__picks__card1__events-title">
                    Davido Live In Concert
                 </div>
                 <div className="user-home__grid__picks__card1__events-subtitle">
                    <div>May 20, 20204</div>
                    <div>8:00 PM</div>
                 </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Performers
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                 </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Event Organizer(s)
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Sponsored By
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    <div>Davido</div>
                    <div>Wizkid</div>
                    <div>Davido</div>
                    </div>
                </div>

                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>Tickets</div>
                  </div>
                  <div className="user-home__grid__picks__card1__subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel purus risus. Phasellus sit amet egestas enim. Nulla rhoncus tincidunt mauris
                  </div>

<div className="user-home__grid__picks__card1__ticket-pocket">
    <div className="user-home__grid__picks__card1__ticket-pocket__title">
        <div>
        <div>Regular Ticket</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="#565856" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    
    
</div>

<div className="user-home__grid__picks__card1__ticket-pocket">
    <div className="user-home__grid__picks__card1__ticket-pocket__title">
        <div>
        <div>VIP Ticket</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="#565856" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    </div>

    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    
</div>
<div className="user-home__grid__picks__card1__ticket-pocket">
    <div className="user-home__grid__picks__card1__ticket-pocket__title">
        <div>
        <div>Gold Table Ticket</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="#565856" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    </div>

    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    
</div>
<div className="user-home__grid__picks__card1__ticket-pocket">
    <div className="user-home__grid__picks__card1__ticket-pocket__title">
        <div>
        <div>Premium Table Ticket</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="#565856" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    <div className="user-home__grid__picks__card1__ticket-pocket__card">
    <div className="user-home__grid__picks__card1__ticket-pocket__card__inner">
    <div>
        <input type="radio" name="" id="" />
           <div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__title">Flex</div>
           <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__subtitle">Placeholder text, placeholder text,  <br />placeholder text, placeholder text.</div>
           </div>
        </div>

<div>
<div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__price">#63,000.00</div>
            <div className="user-home__grid__picks__card1__ticket-pocket__card__inner__avlb">12,456 available</div>
        </div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M14.167 20H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="user-home__grid__picks__card1__ticket-pocket__card__inner__number">0</div>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
className="pointer"
>
<path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F4F5F4"/>
<path d="M20.0003 14.167V25.8337M14.167 20.0003H25.8337" stroke="#D5D8D5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       
        </div>
        
    </div>
    
</div>

                  
                </div>

              
                <div className="user-home__grid__picks__card1 user-home__grid__picks__card1-covered">
                  <div className="user-home__grid__picks__card1__title">
                    <div>Venue</div>
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
                    <div>Going To The Venue</div>
                  </div>

<div className="user-home__grid__picks__card1__venue-nav">
    <div className="user-home__grid__picks__card1__venue-nav__active">Directions</div>
    <div>Shuttlers</div>
    <div>Uber</div>
</div>
<div className="user-home__grid__picks__card1__subtitle">
To drive from Oshodi, Lagos to Victoria Island, Lagos, start by heading southeast on Agege Motor Road and continue until you reach the ramp to Apapa/Oshodi Expressway. Merge onto Apapa/Oshodi Expressway and stay on it, passing by the National Stadium on your right. Take the exit toward Eko Bridge and continue on it, which turns into Funsho Williams Avenue. Follow signs for Ozumba Mbadiwe Avenue and keep left, staying on Ozumba Mbadiwe Avenue as you pass by the Civic Centre on your right and the Radisson Blu Anchorage Hotel on your left. Continue straight, and you will arrive at Victoria Island, Lagos. Be sure to check for traffic updates, as Lagos can experience heavy traffic at various times of the day. Safe travels!</div>
                
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
              <div>You might also like...</div>

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

                <button
                onClick={() => window.location.href = "/users/top-events"}
                >
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

            <div className="user-home__grid__picks__card1__filter">
              <button 
              className={selectedFilter === "All Dates" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("All Dates")}>All Dates</button>
              <button 
              className={selectedFilter === "Today" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("Today")}>Today</button>
              <button 
              className={selectedFilter === "This Weekend" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Weekend")}>This Weekend</button>
              <button 
              className={selectedFilter === "This Week" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Week")}>This Week</button>
              <button 
              className={selectedFilter === "This Month" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("This Month")}>This Month</button>
              <button 
              className={selectedFilter === "Next 30 Days" ? "user-home__grid__picks__card1__filter-active" : ""}
              onClick={() => setSelectedFilter("Next 30 Days")}>Next 30 Days</button>
            </div>

            <div className="user-home__grid__picks__card1__grid">
              {slicedData.map((data) => {
                return <PicksItems key={data.id} {...data} />;
              })}
            </div>
          </div>
        </div>
              </div>
            </div>
            <div className="user-home__grid__card2">
              <div className="user-home__grid__card2__summary">
              <div className="user-home__grid__card2__summary__title">
                Ticket Summary
                </div>
              <div className="user-home__grid__card2__summary__subtitle">
                <div>Tickets</div>
                <div>Amount</div>
                </div>

                <div className="user-home__grid__card2__summary__deets">
                    <div>
                        <div>Regular Tickets</div>
                        <div>
                           <div>Flex</div> 
                           <div>3 Tickets</div> 
                        </div>
                    </div>

                    <div>#195,500.00</div>
                </div>
                <div className="user-home__grid__card2__summary__deets">
                    <div>
                        <div>Regular Tickets</div>
                        <div>
                           <div>Flex</div> 
                           <div>3 Tickets</div> 
                        </div>
                    </div>

                    <div>#195,500.00</div>
                </div>

                <div className="user-home__grid__card2__summary__total">
                    <div>Total:</div>
                    <div>#195,500.00</div>
                </div>
              {/* <div className="user-home__grid__card2__summary__subsubtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel purus risus. Phasellus sit amet egestas enim. Nulla rhoncus tincidunt mauris
                </div> */}

                <button className="user-home__grid__card2__summary__button button-bland"
                onClick={() => window.location.href = "/users/checkout"}
                >
Buy Tickets
                </button>

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
