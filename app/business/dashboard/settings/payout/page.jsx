"use client";

import { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("account");
  const [bankDetails, setBankDetails] = useState(false);
  const [payout, setPayout] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(false);
  const [paymentdetail, setPaymentdetail] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div className="business-settings">
      <h1 className="business-settings__title">Settings</h1>

      <div className="business-settings__tabs">
        <div
          className={tab === "account" && "business-settings__tabs__active"}
          onClick={() => setTab("account")}
        >
          Account
        </div>
        <div
          className={tab === "business" && "business-settings__tabs__active"}
          onClick={() => setTab("business")}
        >
          Business Information
        </div>
        <div
          className={tab === "payout" && "business-settings__tabs__active"}
          onClick={() => setTab("payout")}
        >
          Payout Information
        </div>
      </div>

      <div className="business-settings__subtitle">
        <div>
          <h2>Payout Information</h2>
          <h3>Manage your payouts information and payment methods.</h3>
        </div>
      </div>

      <div className="business-settings__group">
        <div className="business-settings__group__title">
          <div>Selling tickets</div>
          <div>Get paid by direct deposit when you sell your tickets.</div>
        </div>
        {/* <div className="business-settings__group__bank-account">
          <div>No bank account added yet.</div>
          <button onClick={() => setBankDetails(true)}>Add bank account</button>
        </div> */}
        <div className="business-settings__group__bank-account-filled">
          <div>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6C0 2.68629 2.68629 0 6 0H44C47.3137 0 50 2.68629 50 6V34C50 37.3137 47.3137 40 44 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F9FAFA"/>
<path d="M8.5 12C8.5 10.067 10.067 8.5 12 8.5H38C39.933 8.5 41.5 10.067 41.5 12V28C41.5 29.933 39.933 31.5 38 31.5H12C10.067 31.5 8.5 29.933 8.5 28V12Z" fill="white"/>
<path d="M8.5 12C8.5 10.067 10.067 8.5 12 8.5H38C39.933 8.5 41.5 10.067 41.5 12V28C41.5 29.933 39.933 31.5 38 31.5H12C10.067 31.5 8.5 29.933 8.5 28V12Z" stroke="#EAEBEA"/>
<path d="M20.3333 18.0001V23.3334M23.3333 18.0001V23.3334M26.6667 18.0001V23.3334M29.6667 18.0001V23.3334M19 24.4001L19 24.9334C19 25.3068 19 25.4935 19.0727 25.6361C19.1366 25.7615 19.2386 25.8635 19.364 25.9274C19.5066 26.0001 19.6933 26.0001 20.0667 26.0001H29.9333C30.3067 26.0001 30.4934 26.0001 30.636 25.9274C30.7614 25.8635 30.8634 25.7615 30.9273 25.6361C31 25.4935 31 25.3068 31 24.9334V24.4001C31 24.0267 31 23.84 30.9273 23.6974C30.8634 23.572 30.7614 23.47 30.636 23.4061C30.4934 23.3334 30.3067 23.3334 29.9333 23.3334H20.0667C19.6933 23.3334 19.5066 23.3334 19.364 23.4061C19.2386 23.47 19.1366 23.572 19.0727 23.6974C19 23.84 19 24.0267 19 24.4001ZM24.7686 14.0515L19.8353 15.1478C19.5372 15.214 19.3882 15.2472 19.277 15.3273C19.1789 15.398 19.1018 15.494 19.0541 15.6051C19 15.7311 19 15.8838 19 16.1891L19 16.9334C19 17.3068 19 17.4935 19.0727 17.6361C19.1366 17.7615 19.2386 17.8635 19.364 17.9274C19.5066 18.0001 19.6933 18.0001 20.0667 18.0001H29.9333C30.3067 18.0001 30.4934 18.0001 30.636 17.9274C30.7614 17.8635 30.8634 17.7615 30.9273 17.6361C31 17.4935 31 17.3068 31 16.9334V16.1891C31 15.8838 31 15.7311 30.9459 15.6051C30.8982 15.494 30.8211 15.398 30.723 15.3273C30.6118 15.2472 30.4628 15.214 30.1647 15.1478L25.2314 14.0515C25.145 14.0323 25.1019 14.0227 25.0582 14.0189C25.0195 14.0155 24.9805 14.0155 24.9418 14.0189C24.8981 14.0227 24.855 14.0323 24.7686 14.0515Z" stroke="#ACAFAC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div>
    <div>Account number ending in 1234</div>
    <div>First Bank of Nigeria</div>
</div>

          </div>
          <button onClick={() => setBankDetails(true)}>Update</button>
        </div>
      </div>

      <div className="business-settings__balance">
        <div>
          <div>Total balance</div>
          <div>₦0.00</div>
        </div>

        <button onClick={() => setPayout(true)}>Request payout</button>
      </div>

      <div className="business-settings__payout-table">
        <div className="business-settings__payout-table__title">
          <div>Payout history</div>
          <div>View your payout history here.</div>
        </div>

        <div className="business-settings__payout-table__header">
          <div>Date</div>
          <div>Description</div>
          <div>Amount</div>
          <div>Status</div>
        </div>

        <div className="business-settings__payout-table__inner">
          {/* <div className="business-settings__payout-table__inner__empty">
<svg width="152" height="120" viewBox="0 0 152 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="76" cy="52" r="52" fill="#EAEBEA"/>
<g filter="url(#filter0_dd_2408_9816)">
<path d="M77.6 16C66.8273 16 57.2978 21.3233 51.4987 29.4829C49.605 29.0363 47.6301 28.8 45.6 28.8C31.4615 28.8 20 40.2615 20 54.4C20 68.5385 31.4615 80 45.6 80L109.6 80C121.971 80 132 69.9712 132 57.6C132 45.2288 121.971 35.2 109.6 35.2C108.721 35.2 107.854 35.2506 107.002 35.349C102.098 23.9677 90.7797 16 77.6 16Z" fill="#F4F5F4"/>
<ellipse cx="45.6" cy="54.3998" rx="25.6" ry="25.6" fill="url(#paint0_linear_2408_9816)"/>
<circle cx="77.6016" cy="48" r="32" fill="url(#paint1_linear_2408_9816)"/>
<ellipse cx="109.599" cy="57.6002" rx="22.4" ry="22.4" fill="url(#paint2_linear_2408_9816)"/>
</g>
<circle cx="21" cy="19" r="5" fill="#EFF0EF"/>
<circle cx="18" cy="109" r="7" fill="#EFF0EF"/>
<circle cx="145" cy="35" r="7" fill="#EFF0EF"/>
<circle cx="134" cy="8" r="4" fill="#EFF0EF"/>
<g filter="url(#filter1_b_2408_9816)">
<path d="M52 86C52 72.7452 62.7452 62 76 62C89.2548 62 100 72.7452 100 86C100 99.2548 89.2548 110 76 110C62.7452 110 52 99.2548 52 86Z" fill="#344054" fill-opacity="0.4"/>
<path d="M86 82.5H66M66 86.5H69.5467C70.0869 86.5 70.357 86.5 70.6181 86.5466C70.85 86.5879 71.0761 86.6563 71.2919 86.7506C71.535 86.8567 71.7598 87.0065 72.2092 87.3062L72.7908 87.6938C73.2402 87.9935 73.465 88.1433 73.7081 88.2494C73.9239 88.3437 74.15 88.4121 74.3819 88.4534C74.643 88.5 74.9131 88.5 75.4533 88.5H76.5467C77.0869 88.5 77.357 88.5 77.6181 88.4534C77.85 88.4121 78.0761 88.3437 78.2919 88.2494C78.535 88.1433 78.7598 87.9935 79.2092 87.6938L79.7908 87.3062C80.2402 87.0065 80.465 86.8567 80.7081 86.7506C80.9239 86.6563 81.15 86.5879 81.3819 86.5466C81.643 86.5 81.9131 86.5 82.4533 86.5H86M66 81.2L66 90.8C66 91.9201 66 92.4802 66.218 92.908C66.4097 93.2843 66.7157 93.5903 67.092 93.782C67.5198 94 68.0799 94 69.2 94L82.8 94C83.9201 94 84.4802 94 84.908 93.782C85.2843 93.5903 85.5903 93.2843 85.782 92.908C86 92.4802 86 91.9201 86 90.8V81.2C86 80.0799 86 79.5198 85.782 79.092C85.5903 78.7157 85.2843 78.4097 84.908 78.218C84.4802 78 83.9201 78 82.8 78L69.2 78C68.0799 78 67.5198 78 67.092 78.218C66.7157 78.4097 66.4097 78.7157 66.218 79.092C66 79.5198 66 80.0799 66 81.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_2408_9816" x="0" y="16" width="152" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_2408_9816"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2408_9816"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect2_dropShadow_2408_9816"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_2408_9816" result="effect2_dropShadow_2408_9816"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2408_9816" result="shape"/>
</filter>
<filter id="filter1_b_2408_9816" x="44" y="54" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2408_9816"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2408_9816" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2408_9816" x1="25.9429" y1="37.4855" x2="71.2" y2="79.9998" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0D5DD"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_2408_9816" x1="53.0301" y1="26.8571" x2="109.602" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0D5DD"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_2408_9816" x1="92.3992" y1="42.8002" x2="131.999" y2="80.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0D5DD"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

<div>No payout history available</div>
    </div> */}

          {[
            {
              date: "Dec 1, 2024",
              description: " Bank transfer to ****2345 | First Bank of Nigeria",
              amount: "- ₦40,000.00",
              status: "Successful",
            },
            {
              date: "Dec 1, 2024",
              description: " Bank transfer to ****2345 | First Bank of Nigeria",
              amount: "+ ₦20,000.00",
              status: "Pending",
            },
            {
              date: "Dec 1, 2024",
              description: " Bank transfer to ****2345 | First Bank of Nigeria",
              amount: "- ₦40,000.00",
              status: "Failed",
            },
          ]?.map((item) => (
            <div className="business-settings__payout-table__inner__body"
            
            onClick={() => {
                setSelectedPayment(item);
                setPaymentdetail(true)
            }}>
              <div>{item?.date}</div>
              <div>{item?.description}</div>
              <div
                className={
                  item?.amount?.includes("+") &&
                  "business-settings__payout-table__inner__body__amount-green"
                }
              >
                {item?.amount}
              </div>
              <div>
                <div
                  className={`business-settings__payout-table__inner__body__status business-settings__payout-table__inner__body__status-${item?.status?.toLowerCase()}`}
                >
                  {item?.status}
                </div>
              </div>{" "}
              <div>View</div>
            </div>
          ))}
        </div>

        <div className="business-settings__payout-table__footer">
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 7.99992H3.33337M3.33337 7.99992L8.00004 12.6666M3.33337 7.99992L8.00004 3.33325"
                stroke="#565856"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Previous
          </button>
          <button>
            Next{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33325 7.99992H12.6666M12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L7.99992 12.6666"
                stroke="#565856"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {bankDetails ||
      payout ||
      passwordModal ||
      payoutSuccess ||
      paymentdetail ? (
        <div className="business-settings__bank-details-cover"></div>
      ) : (
        ""
      )}
      {bankDetails && (
        <div className="business-settings__bank-details">
          <div className="business-settings__bank-details__title">
            <div>
              <div>Update bank account</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setBankDetails(false)}
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ACAFAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              Get paid by direct deposit when you sell your tickets by adding
              your bank account.
            </div>
          </div>

          <div className="business-settings__bank-details__inner">
            <label htmlFor="">Country</label>
            <select>
              <option value="Nigeria">Nigeria</option>
            </select>
            <div className="business-settings__bank-details__inner__input-group">
              <div>
                <label htmlFor="">Bank</label>
                <select name="" id="">
                  <option value="Select bank"></option>
                </select>
              </div>
              <div>
                <label htmlFor="">Account number</label>
                <input type="text" placeholder="Enter your account number" />
              </div>
            </div>
            <div className="business-settings__bank-details__inner__input-group">
              <div>
                <label htmlFor="">First name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div>
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="business-settings__bank-details__inner__note">
              <div className="business-settings__bank-details__inner__note__title">
                Please take note that:
              </div>
              <div className="business-settings__bank-details__inner__note__subtitle">
                <input type="checkbox" name="" id="" />
                <div>
                  This bank account will be used to settle all the tickets I
                  sell.
                </div>
              </div>
              <div className="business-settings__bank-details__inner__note__subtitle">
                <input type="checkbox" name="" id="" />
                <div>
                  DettyDecember does not have access to your bank account.
                </div>
              </div>
            </div>

            <div className="business-settings__bank-details__inner__footer">
              <button>Cancel</button>
              <button>Update bank account</button>
            </div>
          </div>
        </div>
      )}
      {payout && (
        <div className="business-settings__bank-details">
          <div className="business-settings__bank-details__title">
            <div>
              <div>Request payout</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setPayout(false)}
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ACAFAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              Your payout will be processed after you've submitted your payout
              request.
            </div>
          </div>

          <div className="business-settings__bank-details__inner">
            <label htmlFor="">Payout amount</label>
            <input type="text" placeholder="₦0.00" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="business-settings__bank-details__inner__footer">
              <button 
              
              onClick={() => setPayout(false)}>Cancel</button>
              <button>Request payout</button>
            </div>
          </div>
        </div>
      )}
      {paymentdetail && (
        <div className="business-settings__bank-details">
          <div className="business-settings__bank-details__title">
            <div>
              <div>Payment details</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setPaymentdetail(false)}
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ACAFAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Here’s a breakdown of your payment details.</div>
          </div>

<div className="business-settings__bank-details__inner">
<div className="business-settings__bank-details__inner__summary">
            <div className={`business-settings__bank-details__inner__summary__status business-settings__bank-details__inner__summary__status-${selectedPayment?.status?.toLowerCase()}`}>{selectedPayment?.status}</div>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.9375 5.13068C2.53646 5.13068 2.17022 5.03291 1.83878 4.83736C1.50734 4.63849 1.24219 4.37334 1.04332 4.0419C0.847775 3.71046 0.75 3.34422 0.75 2.94318C0.75 2.53883 0.847775 2.17259 1.04332 1.84446C1.24219 1.51302 1.50734 1.24953 1.83878 1.05398C2.17022 0.855113 2.53646 0.755682 2.9375 0.755682C3.34186 0.755682 3.7081 0.855113 4.03622 1.05398C4.36766 1.24953 4.63116 1.51302 4.8267 1.84446C5.02557 2.17259 5.125 2.53883 5.125 2.94318C5.125 3.34422 5.02557 3.71046 4.8267 4.0419C4.63116 4.37334 4.36766 4.63849 4.03622 4.83736C3.7081 5.03291 3.34186 5.13068 2.9375 5.13068Z"
                fill="#D5D8D5"
              />
            </svg>

            <div>{selectedPayment?.date}</div>
          </div>

          <div className="business-settings__bank-details__inner__description">
            <div>Description:</div>
            <div>{selectedPayment?.description}</div>
          </div>

          <div className="business-settings__bank-details__inner__breakdown">
            <div className="business-settings__bank-details__inner__breakdown__header">
              Payment Breakdown
            </div>
            <div className="business-settings__bank-details__inner__breakdown__body">
              {selectedPayment?.description}
            </div>
            <div className="business-settings__bank-details__inner__breakdown__body">
              <div>Amount</div>
              <div>{selectedPayment?.amount}</div>
            </div>
            <div className="business-settings__bank-details__inner__breakdown__body">
              <div>Tax</div>
              <div>- ₦0.00</div>
            </div>
            <div className="business-settings__bank-details__inner__breakdown__body">
              <div>Fees</div>
              <div>- ₦0.00</div>
            </div>
            <div className="business-settings__bank-details__inner__breakdown__total">
              <div>Payout Total</div>
              <div>{selectedPayment?.amount}</div>
            </div>
          </div>

          <div className="business-settings__bank-details__inner__footer">
              <button
              
              onClick={() => setPaymentdetail(false)}>Close</button>
            </div>
</div>
         
        </div>
      )}

      {passwordModal && (
        <div className="business-settings__password-modal">
          <div className="business-settings__password-modal__title">
            <div>Enter your password</div>
            <svg
              className="pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPasswordModal(false)}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#ACAFAC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="business-settings__password-modal__subtitle">
            Re-enter your password to proceed.
          </div>

          <input type="password" placeholder="Enter your password" />

          <div className="business-settings__password-modal__buttons">
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        </div>
      )}

      {payoutSuccess && (
        <div className="business-settings__payout-success-modal">
          <div className="business-settings__payout-success-modal__flex">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#DCFAE6"
              />
              <path
                d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                stroke="#079455"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              className="pointer"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPayoutSuccess(false)}
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

          <div className="business-settings__payout-success-modal__title">
            Payout requested!
          </div>
          <div className="business-settings__payout-success-modal__subtitle">
            You have successfully requested for your payout, it will be
            processed shortly.
          </div>

          <button
            className="business-settings__payout-success-modal__button"
            onClick={() => setPayoutSuccess(false)}
          >
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
