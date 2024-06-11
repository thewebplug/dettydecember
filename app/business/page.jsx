"use client";

import Image from "next/image";
import { useState } from "react";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Org from "../components/Orgs";
import DefBlack from "../components/DefBlack";
import Partners from "../components/PartnersCmp";

export default function BusinessHome() {
    const [nav, setNav] = useState(0);

    return (
        <div className="home">
            <div className="home__hero">
            <h1 className="home__hero__title">
            Define the future of events with us
            </h1>
            <h2 className="home__hero__subtitle">
            Discover how our world-class solutions and local teams can work with you to maximize your event potential.
            </h2>
            <div className="home__hero__button-group">
                <button
                 onClick={() => window.location.href = "/events"}
                >Work with us</button>
                <button>Sign in</button>
            </div>

           <div className="home__hero__img"></div>
        </div>

        <Org />

        <div className="home__solutions">
            <h2 className="home__solutions__title">Overflowing with innovative solutions</h2>
            <h2 className="home__solutions__subtitle">With access to the best live entertainment tools in the industry, we’ll help you unlock your venue’s potential like never before.</h2>

            <div className="home__solutions__navigation">
                <div className="home__solutions__navigation__nav">
                    <div className={nav === 0 ? "home__solutions__navigation__nav__item" : " home__solutions__navigation__nav__item-inactive"} onClick={() => setNav(0)}>
                        <div>Event Creation and Management</div>
                        <div>Placeholder text, placeholder text, placeholder text, placeholder text, placeholder text, placeholder text.</div>
                    </div>
                    <div className={nav === 1 ? "home__solutions__navigation__nav__item" : " home__solutions__navigation__nav__item-inactive"} onClick={() => setNav(1)}> 
                        <div>Event Creation and Management</div>
                        <div>Placeholder text, placeholder text, placeholder text, placeholder text, placeholder text, placeholder text.</div>
                    </div>
                    <div className={nav === 2 ? "home__solutions__navigation__nav__item" : " home__solutions__navigation__nav__item-inactive"} onClick={() => setNav(2)}>
                        <div>Event Creation and Management</div>
                        <div>Placeholder text, placeholder text, placeholder text, placeholder text, placeholder text, placeholder text.</div>
                    </div>
                </div>

<div className="home__solutions__navigation__img">
<button className="home__solutions__navigation__img__button">Learn more <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<div className="home__solutions__navigation__img__img">
<Image alt=""
                  src="/assets/Content.png"
                  layout="fill"
                  objectFit="cover"
                />

               
</div>
</div>

            </div>


        </div>

      <Partners />
        <div className="home__steps">
            <div className="home__steps__inner">
            <h2 className="home__steps__inner__title">Let’s take the next step together</h2>
            <h3 className="home__steps__inner__subtitle">
            We are the global leader in live entertainment, and we’re doing more than ever to help power your business. Discover why thousands of clients trust us as their ticketing partner.
            </h3>

            <div className="home__steps__inner__grid">
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Industry-Leading Tools
</div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Dedication to Innovation
</div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Best-In-Class Fan Experience
</div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Largest Database of Ticket Buyers
</div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
The First Place Fans Look for Tickets
</div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#F8A94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Dedicated Account Team of Industry Experts
</div>
            </div>
            </div>
        </div>

        <Faq />

        <DefBlack />

      <Footer />
        </div>
    )
}