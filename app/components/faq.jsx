"use client"
import { useState } from "react";

export default function Faq() {
    const [faq, setFaq] = useState(0);

    return (
        <div className="faq">
        <h2 className="faq__title">Frequently asked questions</h2>
        <h3 className="faq__subtitle">
          Here’s everything you need to know about DettyDecember.
        </h3>

        <div
          className={
            faq === 1
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
            What is DettyDecember.xyz?
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
          DettyDecember.xyz is your go-to platform for curated events across Nigeria, offering seamless ticketing and exclusive access to the best concerts, parties, tours, and more from December 1st to January 15th.
          </div>
        </div>
        <div
          className={
            faq === 2
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          How can I join the waitlist?
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
          Simply click the "Join the Waitlist" button on our coming soon page and enter your email address. You'll receive updates and early access to event booking.
          </div>
        </div>
        <div
          className={
            faq === 3
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          When will the platform launch?
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
          We're working hard to launch the platform soon! Stay tuned for updates on our official launch date.
          </div>
        </div>
        <div
          className={
            faq === 4
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          What types of events will be available on DettyDecember.xyz?
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
          We offer a curated selection of concerts, parties, art shows, guided tours, and more. Expect a range of events that cater to different tastes and interests.
          </div>
        </div>
        <div
          className={
            faq === 5
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
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
          By joining our waitlist, you’ll receive email updates on new events and exclusive experiences. You can also follow us on social media for the latest news.
          </div>
        </div>
        <div
          className={
            faq === 6
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          Will I be able to buy tickets directly on the platform?
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
          Yes! Once the platform launches, you can purchase tickets directly on DettyDecember.xyz with a seamless and secure checkout process.

          </div>
        </div>
        <div
          className={
            faq === 7
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          Can I resell tickets on DettyDecember.xyz?
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
          Yes, our platform allows you to safely resell tickets. Details and guidelines will be available upon launch.
          </div>
        </div>
        <div
          className={
            faq === 8
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          Is my information safe with DettyDecember.xyz?
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
          Absolutely! We prioritise your privacy and security. Your data is protected using industry-standard measures.
          </div>
        </div>
        <div
          className={
            faq === 9
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          How can I contact DettyDecember.xyz for support or inquiries?
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
          You can reach out to us at admin@dettydecember.xyz for any questions or assistance. We're here to help!
          </div>
        </div>
        <div
          className={
            faq === 10
              ? "faq__card faq__card-active"
              : "faq__card"
          }
        >
          <div className="faq__card__flex">
          Will there be any special deals or offers?
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
          Yes, we plan to offer exclusive deals and discounts to our users. Keep an eye on your inbox and our social media for updates!
          </div>
        </div>
      </div>
    )
}