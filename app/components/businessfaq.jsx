"use client";
import { useState } from "react";

export default function BusinessFaqComp() {
  const [faq, setFaq] = useState(0);

  return (
    <div className="faq">
      <h2 className="faq__title">Frequently asked questions</h2>
      <h3 className="faq__subtitle">
        Here&rsquo;s everything you need to know about DettyDecember.
      </h3>

      <div className={faq === 1 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          What is the DettyDecember.xyz Business Platform?
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

        <div className="faq__card__answer">
          The DettyDecember.xyz Business Platform is a one-stop shop for event
          organisers, sponsors, and venues to list their Detty December
          experiences, reach a wider audience, and maximise ticket sales.{" "}
        </div>
      </div>
      <div className={faq === 2 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          What types of events can I promote on DettyDecember.xyz?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 2 : 0)}
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

        <div className="faq__card__answer">
          We welcome a wide range of events, including concerts, parties, tours,
          art shows, conferences, and more. If it adds to the Detty December
          experience, we want to help you promote it!
        </div>
      </div>
      <div className={faq === 3 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          Is there a cost to use the DettyDecember.xyz Business Platform?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 3 : 0)}
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

        <div className="faq__card__answer">
          Yes, we offer tiered pricing plans to suit your needs. Visit our
          Partner Portal for details.
        </div>
      </div>
      <div className={faq === 4 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          How do I get started with the DettyDecember.xyz Business Platform?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 4 : 0)}
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

        <div className="faq__card__answer">
          Simply visit our Partner Portal and sign up for an account. The
          process is quick and easy!
        </div>
      </div>
      <div className={faq === 5 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          How can I stay updated on new events and experiences?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 5 : 0)}
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

        <div className="faq__card__answer">
          By joining our waitlist, you&rsquo;ll receive email updates on new
          events and exclusive experiences. You can also follow us on social
          media for the latest news.
        </div>
      </div>
      <div className={faq === 6 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          How do I list my event on DettyDecember.xyz?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 6 : 0)}
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

        <div className="faq__card__answer">
          Our platform is designed for user-friendly event listing. You can
          create a detailed description, set ticket tiers and pricing, and
          manage sales – all from your dashboard.
        </div>
      </div>
      <div className={faq === 7 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          What marketing tools does DettyDecember.xyz offer?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 7 : 0)}
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

        <div className="faq__card__answer">
          We provide built-in marketing features to help you promote your event
          and targeted advertising options to reach your ideal audience.
        </div>
      </div>
      <div className={faq === 8 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          Do I get any sales data or insights?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 8 : 0)}
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

        <div className="faq__card__answer">
          Absolutely! We offer data-driven insights into attendee demographics
          and sales trends to help you refine your marketing strategies and
          maximize ticket sales.
        </div>
      </div>
      <div className={faq === 9 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          How can I reach potential customers through DettyDecember.xyz?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 9 : 0)}
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

        <div className="faq__card__answer">
          Our platform allows sponsors to reach a targeted audience actively
          searching for Detty December experiences. We offer prominent
          sponsorship placements to maximize brand awareness.
        </div>
      </div>
      <div className={faq === 10 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          Can I interact with the DettyDecember.xyz community?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 10 : 0)}
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

        <div className="faq__card__answer">
          Yes! We encourage sponsor engagement through promotions and
          interactive features, allowing you to connect with potential customers
          directly.
        </div>
      </div>
      <div className={faq === 11 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          Do you offer customer support for partners?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 11 : 0)}
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

        <div className="faq__card__answer">
          Yes, we have a dedicated account management team to provide
          personalized support and ensure your event runs smoothly on our
          platform.
        </div>
      </div>
      <div className={faq === 12 ? "faq__card faq__card-active" : "faq__card"}>
        <div className="faq__card__flex">
          Is DettyDecember.xyz secure for ticket sales?
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setFaq(faq === 0 ? 12 : 0)}
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

        <div className="faq__card__answer">
          Security is a top priority. We utilize a secure platform with
          integrated payment gateways to ensure safe and convenient transactions
          for both event organizers and attendees.
        </div>
      </div>
    </div>
  );
}
