import React, { useState } from "react";
import Image from "next/image";
import cancelIcon from "/public/assets/DD/cancel.svg";
import { picksData } from "@/app/components/userComponents/picksForMe/picksData";
import { PicksItems } from "@/app/components/userComponents/picksForMe/PicksItems";
 
export const EventManagementViewModal = ({
  OpenViewModal,
  setOpenViewModal,
  event,
  fees,
  tax,
  payoutTotal,
}) => {
  const [faq, setFaq] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [list, setList] = useState(3);
  const slicedData = picksData.slice(0, list);

  console.log("event from props", event);

  // format amount
  const formatAmount = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  return (
    
    <div className="view-event-cover">
      <div className="view-event">
        <div className="view-event__title">
          <div>
            <div>Events information</div>
            <div>See more information about this event.</div>
          </div>

          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer"
            onClick={() => setOpenViewModal(false)}

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

        <div className="view-event__nav">
          <div className="view-event__nav__active">About</div>
          <div>Tickets</div>
          <div>Venue</div>
          <div>Getting To The Venue</div>
          <div>FAQs</div>
        </div>
        <div className="view-event__inner">
          <div className="view-event__inner__inner">
          <div className="view-event__inner__inner__title">About</div>
          <div className="view-event__inner__inner__image">
          <Image
            src="/assets/davido2.png"
            alt="search-icon"
            className=""
            objectFit="cover"
            layout="fill"
            style={{borderRadius: "12px"}}
          />
          </div>
         

          <div className="view-event__inner__inner__subtitle">
            {event?.title}
          </div>

          <div className="view-event__inner__inner__info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>{event?.date}</div>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 6.59659C2.98438 6.59659 2.51349 6.47088 2.08736 6.21946C1.66122 5.96378 1.32031 5.62287 1.06463 5.19673C0.81321 4.7706 0.6875 4.29972 0.6875 3.78409C0.6875 3.2642 0.81321 2.79332 1.06463 2.37145C1.32031 1.94531 1.66122 1.60653 2.08736 1.35511C2.51349 1.09943 2.98438 0.971591 3.5 0.971591C4.01989 0.971591 4.49077 1.09943 4.91264 1.35511C5.33878 1.60653 5.67756 1.94531 5.92898 2.37145C6.18466 2.79332 6.3125 3.2642 6.3125 3.78409C6.3125 4.29972 6.18466 4.7706 5.92898 5.19673C5.67756 5.62287 5.33878 5.96378 4.91264 6.21946C4.49077 6.47088 4.01989 6.59659 3.5 6.59659Z"
                fill="#ACAFAC"
              />
            </svg>
            <div>{event?.time}</div>
          </div>

          <div className="view-event__inner__inner__info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                stroke="#929692"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{event?.address}</div>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 6.59659C2.98438 6.59659 2.51349 6.47088 2.08736 6.21946C1.66122 5.96378 1.32031 5.62287 1.06463 5.19673C0.81321 4.7706 0.6875 4.29972 0.6875 3.78409C0.6875 3.2642 0.81321 2.79332 1.06463 2.37145C1.32031 1.94531 1.66122 1.60653 2.08736 1.35511C2.51349 1.09943 2.98438 0.971591 3.5 0.971591C4.01989 0.971591 4.49077 1.09943 4.91264 1.35511C5.33878 1.60653 5.67756 1.94531 5.92898 2.37145C6.18466 2.79332 6.3125 3.2642 6.3125 3.78409C6.3125 4.29972 6.18466 4.7706 5.92898 5.19673C5.67756 5.62287 5.33878 5.96378 4.91264 6.21946C4.49077 6.47088 4.01989 6.59659 3.5 6.59659Z"
                fill="#ACAFAC"
              />
            </svg>
            <div>{event?.state}</div>
          </div>

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
                    {event?.title}
                 </div>
                 <div className="user-home__grid__picks__card1__events-subtitle">
                    <div>{event?.date}</div>
                    <div>{event?.time}</div>
                 </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Performers
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                    {event?.performers?.map((performer) =><div>{performer}</div> )}
                 </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Event Organizer(s)
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                 {event?.organizers?.map((organizer) =><div>{organizer}</div> )}
                    </div>
                 <div className="user-home__grid__picks__card1__events-title">
                    Sponsored By
                 </div>
                 <div className="user-home__grid__picks__card1__events-subsubtitle">
                 {event?.sponsors?.map((sponsor) =><div>{sponsor}</div> )}
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
              {slicedData.map((event) => {
                return <PicksItems key={event.id} {...event} />;
              })}
            </div>
          </div>
        </div>
              </div>
          </div>
          
        </div>

        <div className="view-event__footer">
          <button
          onClick={() => setOpenViewModal(false)}
          >Close</button>
        </div>
      </div>
    </div>
  );
};
