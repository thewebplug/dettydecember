"use client"
import DefBlack from "@/app/components/DefBlack";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { useState } from "react";

export default function Support() {
const [loading, setLoading] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
// const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setModalOpen(true)
    }, 3000);
  }
  return (
    <div className="support">
      <div className="support__hero">
        <h1 className="support__hero__title">Our support system</h1>
        <h2 className="support__hero__subtitle">
        On-demand resources, our product experts, and your local account team are always there to help you get answers to questions when you need them.
        </h2>
        <div className="support__hero__button-group">
          <button>Get in touch</button>
        </div>
      </div>
      <div className="support__we">
        <h2 className="support__we__title">
        We’re always here to support
        </h2>
        <h3 className="support__we__subtitle">
        You know the dynamic needs of your business, so you deserve a partner that can support you – through every event, every game and every show.
        </h3>

        <div className="support__we__grid">
            <div className="support__we__grid__card">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#028C4B"/>
<path d="M18.0944 23.2288C18.0322 22.8282 18 22.4179 18 22C18 17.5817 21.6052 14 26.0526 14C30.4999 14 34.1052 17.5817 34.1052 22C34.1052 22.9981 33.9213 23.9535 33.5852 24.8345C33.5154 25.0175 33.4804 25.109 33.4646 25.1804C33.4489 25.2512 33.4428 25.301 33.4411 25.3735C33.4394 25.4466 33.4493 25.5272 33.4692 25.6883L33.8717 28.9585C33.9153 29.3125 33.9371 29.4895 33.8782 29.6182C33.8266 29.731 33.735 29.8205 33.6211 29.8695C33.4911 29.9254 33.3146 29.8995 32.9617 29.8478L29.7765 29.3809C29.6101 29.3565 29.527 29.3443 29.4512 29.3448C29.3763 29.3452 29.3245 29.3507 29.2511 29.3661C29.177 29.3817 29.0823 29.4172 28.893 29.4881C28.0097 29.819 27.0524 30 26.0526 30C25.6344 30 25.2237 29.9683 24.8227 29.9073M19.6316 34C22.5965 34 25 31.5376 25 28.5C25 25.4624 22.5965 23 19.6316 23C16.6667 23 14.2632 25.4624 14.2632 28.5C14.2632 29.1106 14.3603 29.6979 14.5395 30.2467C14.6153 30.4787 14.6532 30.5947 14.6657 30.6739C14.6786 30.7567 14.6809 30.8031 14.6761 30.8867C14.6714 30.9668 14.6514 31.0573 14.6113 31.2383L14 34L16.9948 33.591C17.1583 33.5687 17.24 33.5575 17.3114 33.558C17.3865 33.5585 17.4264 33.5626 17.5001 33.5773C17.5701 33.5912 17.6742 33.6279 17.8823 33.7014C18.4306 33.8949 19.0191 34 19.6316 34Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<h4 className="support__we__grid__card__title">
Dedicated account team
</h4>
<h5 className="support__we__grid__card__subtitle">
Every DettyDecember client has their own dedicated account team. Each team includes an account lead, an operations specialist and more.
</h5>


            </div>
            <div className="support__we__grid__card">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#028C4B"/>
<path d="M25.0008 14L16.0943 24.6879C15.7455 25.1064 15.5711 25.3157 15.5684 25.4925C15.5661 25.6461 15.6346 25.7923 15.7541 25.8889C15.8916 26 16.164 26 16.7089 26H24.0008L23.0008 34L31.9074 23.3121C32.2562 22.8936 32.4306 22.6843 32.4333 22.5075C32.4356 22.3539 32.3671 22.2077 32.2476 22.1111C32.1101 22 31.8377 22 31.2928 22H24.0008L25.0008 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<h4 className="support__we__grid__card__title">
Flexible training options
</h4>
<h5 className="support__we__grid__card__subtitle">
Sign-up for a live, expert led training session or listen back to a recording. There is no limit to the amount of trainings you can take.
</h5>


            </div>
            <div className="support__we__grid__card">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#028C4B"/>
<path d="M23 15H19.8C18.1198 15 17.2798 15 16.638 15.327C16.0735 15.6146 15.6146 16.0735 15.327 16.638C15 17.2798 15 18.1198 15 19.8V28.2C15 29.8802 15 30.7202 15.327 31.362C15.6146 31.9265 16.0735 32.3854 16.638 32.673C17.2798 33 18.1198 33 19.8 33H28.2C29.8802 33 30.7202 33 31.362 32.673C31.9265 32.3854 32.3854 31.9265 32.673 31.362C33 30.7202 33 29.8802 33 28.2V25M24 20H28V24M27.5 15.5V14M31.4393 16.5607L32.5 15.5M32.5103 20.5H34.0103M15 25.3471C15.6519 25.4478 16.3199 25.5 17 25.5C21.3864 25.5 25.2653 23.3276 27.6197 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<h4 className="support__we__grid__card__title">
AI powered support
</h4>
<h5 className="support__we__grid__card__subtitle">
Our help centre provides intelligent search with the most relevant answers, driven by cutting-edge AI and machine learning.
</h5>


            </div>
            <div>

            </div>
        </div>
      </div>

      <div className="support__form">
        <form className="support__form__inner" onSubmit={handleSubmit}>
            <div className="support__form__inner__title">Get in touch</div>
            <div className="support__form__inner__subtitle">Our friendly team would love to hear from you.</div>

            <div className="support__form__inner__input-flex">
                <div>
                    <label className="support__form__inner__label">First name</label>
                    <input type="text" className="support__form__inner__input" placeholder="First name" required/>
                </div>
                <div>
                    <label className="support__form__inner__label">Last name</label>
                    <input type="text" className="support__form__inner__input" placeholder="Last name" required />
                </div>
            </div>

            <label className="support__form__inner__label">Email</label>
                    <input type="email" className="support__form__inner__input" placeholder="you@company.com" required />
            <label className="support__form__inner__label">Phone number</label>
            <div className="support__form__inner__select-flex">
                <select name="" id="">
                    <option value="">NGN</option>
                </select>

                <input type="text" placeholder="+234 (555) 000-0000" required />
            </div>

            <label className="support__form__inner__label">Message</label>
                    <textarea type="email" className="support__form__inner__textarea" placeholder="Leave us a message..." />
<div className="support__form__inner__privacy">
    <input type="checkbox" name="" id="" required />
    You agree to our friendly <a href="">privacy policy</a>.
</div>
<button className="support__form__inner__button" type="submit">
{loading ? "Loading..." : "Send message"}
    </button>
        </form>
        <div className="support__form__img">
        <div className="support__form__img__inner">
            </div>

        </div>
      </div>

      <DefBlack />
      <Footer />

      {modalOpen && (
        <div className="support__modal">
          <div className="support__modal__inner">
            <div className="support__modal__inner__flex">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_76_36689)">
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="#02A056"
                  />
                  <path
                    d="M1.5 24C1.5 11.5736 11.5736 1.5 24 1.5C36.4264 1.5 46.5 11.5736 46.5 24C46.5 36.4264 36.4264 46.5 24 46.5C11.5736 46.5 1.5 36.4264 1.5 24Z"
                    fill="#02A056"
                  />
                  <path
                    d="M1.5 24C1.5 11.5736 11.5736 1.5 24 1.5C36.4264 1.5 46.5 11.5736 46.5 24C46.5 36.4264 36.4264 46.5 24 46.5C11.5736 46.5 1.5 36.4264 1.5 24Z"
                    stroke="#02A056"
                    stroke-width="3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.1925 14.7803L19.8725 28.6003L16.0725 24.5403C15.3725 23.8803 14.2725 23.8403 13.4725 24.4003C12.6925 24.9803 12.4725 26.0003 12.9525 26.8203L17.4525 34.1403C17.8925 34.8203 18.6525 35.2403 19.5125 35.2403C20.3325 35.2403 21.1125 34.8203 21.5525 34.1403C22.2725 33.2003 36.0125 16.8203 36.0125 16.8203C37.8125 14.9803 35.6325 13.3603 34.1925 14.7603V14.7803Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_76_36689">
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="pointer"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setModalOpen(false)}
              >
                <rect width="30" height="30" rx="15" fill="#EFF0F0" />
                <path
                  d="M20 10L10 20M10 10L20 20"
                  stroke="#9DA09F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* <div className="support__modal__inner__title">
              Congratulations! 🎉
            </div> */}
            <div className="support__modal__inner__subtitle">
              Thank you for reaching out. Our team will be in touch soon
            </div>
            <button className="support__modal__inner__button" onClick={() => setModalOpen(false)}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
}
