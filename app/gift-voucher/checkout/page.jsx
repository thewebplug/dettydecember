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
      <div className="checkout">
        <main>
          <div className="checkout__hero">
            <HomeHeader />

            <h1 className="checkout__hero__title">Checkout</h1>
          </div>

          <div className="checkout__main">
            <div className="checkout__main__inner">
                <div className="checkout__main__inner__card1">
                    <div className="checkout__main__inner__card1__title">
                        Payment method
                    </div>
                    <div className="checkout__main__inner__card1__subtitle">
                        Choose your preferred payment method.
                    </div>

                    <div className="checkout__main__inner__card1__card">
                        <div className="checkout__main__inner__card1__card__header">
                            <div>
                            <input type="radio" name="" id="" />
                            Credit balance
                            </div>
                        </div>

                        <div className="checkout__main__inner__card1__card__body">
                           
<div className="checkout__main__inner__card1__card__body__balance">
    <div>Available credit balance</div>
    <div>₦100, 000.00</div>
</div>
                            
</div>
                    </div>
                    <div className="checkout__main__inner__card1__card">
                        <div className="checkout__main__inner__card1__card__header">
                            <div>
                            <input type="radio" name="" id="" />
                            Credit or debit card
                            </div>
                        </div>

                        <div className="checkout__main__inner__card1__card__body">
                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                All transactions are secure and encrypted
                            </div>

                            <button className="checkout__main__inner__card1__card__body__button button-green">
                                Make payment
                            </button>

                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                By completing this purchase, you agree to DettyDecember's <span>Terms of Use</span> & <span>Privacy Policy</span>
                            </div>
</div>
                    </div>
                    <div className="checkout__main__inner__card1__card">
                        <div className="checkout__main__inner__card1__card__header">
                            <div>
                            <input type="radio" name="" id="" />
                            Bank Transfer
                            </div>
                        </div>

                        <div className="checkout__main__inner__card1__card__body">
                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                All transactions are secure and encrypted
                            </div>

                            <button className="checkout__main__inner__card1__card__body__button button-green">
                                Make payment
                            </button>

                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                By completing this purchase, you agree to DettyDecember's <span>Terms of Use</span> & <span>Privacy Policy</span>
                            </div>
</div>
                    </div>
                    <div className="checkout__main__inner__card1__card">
                        <div className="checkout__main__inner__card1__card__header">
                            <div>
                            <input type="radio" name="" id="" />
                            PayPal
                            </div>
                        </div>

                        <div className="checkout__main__inner__card1__card__body">
                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                All transactions are secure and encrypted
                            </div>

                            <button className="checkout__main__inner__card1__card__body__button button-green">
                                Make payment
                            </button>

                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                By completing this purchase, you agree to DettyDecember's <span>Terms of Use</span> & <span>Privacy Policy</span>
                            </div>
</div>
                    </div>
                    <div className="checkout__main__inner__card1__card">
                        <div className="checkout__main__inner__card1__card__header">
                            <div>
                            <input type="radio" name="" id="" />
                            Zelle
                            </div>
                        </div>

                        <div className="checkout__main__inner__card1__card__body">
                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                All transactions are secure and encrypted
                            </div>

                            <button className="checkout__main__inner__card1__card__body__button button-green">
                                Make payment
                            </button>

                            <div className="checkout__main__inner__card1__card__body__dsiclm">
                                By completing this purchase, you agree to DettyDecember's <span>Terms of Use</span> & <span>Privacy Policy</span>
                            </div>
</div>
                    </div>
                </div>
                <div className="checkout__main__inner__card2">
                <div className="checkout__main__inner__card2__summary">
              <div className="checkout__main__inner__card2__summary__title">
                Order Summary
                </div>
              <div className="checkout__main__inner__card2__summary__subtitle">
                <div>Tickets</div>
                <div>Amount</div>
                </div>

                <div className="checkout__main__inner__card2__summary__deets">
                    <div>
                        <div>Regular Tickets</div>
                        <div>
                           <div>Flex</div> 
                           <div>3 Tickets</div> 
                        </div>
                    </div>

                    <div>#195,500.00</div>
                </div>
                <div className="checkout__main__inner__card2__summary__deets">
                    <div>
                        <div>Regular Tickets</div>
                        <div>
                           <div>Flex</div> 
                           <div>3 Tickets</div> 
                        </div>
                    </div>

                    <div>#195,500.00</div>
                </div>

                <div className="checkout__main__inner__card2__summary__total">
                    <div>Total:</div>
                    <div>#195,500.00</div>
                </div>
              {/* <div className="checkout__main__inner__card2__summary__subsubtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel purus risus. Phasellus sit amet egestas enim. Nulla rhoncus tincidunt mauris
                </div> */}

<div className="checkout__main__inner__card1__card__body__dsiclm">
                                All transactions are secure and encrypted
                            </div>

                <button className="checkout__main__inner__card2__summary__button button-gray">
Make payment
                </button>

                <div className="checkout__main__inner__card1__card__body__dsiclm">
                Lorem ipsum dolor sit amet dolor sit amet  sit amet  <br /> elit. Integer vel purus risus. Phasellus Integer vel purus risus. Phasellus
                            </div>

              </div>
                </div>
            </div>
          </div>
         

         
        </main>

    
        {modalOpen && (
        <div className="user-register__modal">
          
          <div className="user-register__modal__inner">
            <div className="user-register__modal__inner__flex">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#DCFAE6"/>
<path d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#079455" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

           

              <svg className="pointer" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setModalOpen(false)}
              >
<path d="M28 16L16 28M16 16L28 28" stroke="#ACAFAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>

            <div className="user-register__modal__inner__title">
            Ticket purchased
            </div>
            <div className="user-register__modal__inner__subtitle">
           You have successfully purchased your ticket
            </div>

          

          
           <div className="user-register__modal__inner__buttons">
            <button>Cancel</button>
            <button>View ticket</button>
           </div>
          </div>
        
        </div>
       )} 
      </div>
      <Footer />
    </>
  );
}
