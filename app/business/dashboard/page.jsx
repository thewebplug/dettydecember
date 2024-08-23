import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="business-dashboard">
      <div className="business-dashboard__main">
        <div className="business-dashboard__main__title">
          <div>
            <h1>Dashboard</h1>
            <h2>Welcome back, Livespot 360!</h2>
          </div>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.16675V15.8334M4.16669 10.0001H15.8334"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Create event
          </button>
        </div>

        <div className="business-dashboard__main__preview">
          <div className="business-dashboard__main__preview__title">
            <h3>Total balance</h3>
            <div>₦12,481,280.00</div>
          </div>

          <div className="business-dashboard__main__preview__button">
            <button>View history</button>
            <button>Request payout</button>
          </div>
        </div>

        <div className="business-dashboard__main__cards">
          <div className="business-dashboard__main__cards__card">
            <div className="business-dashboard__main__cards__card__title">
              Total events
            </div>
            <div className="business-dashboard__main__cards__card__value">
              203
            </div>
          </div>
          <div className="business-dashboard__main__cards__card">
            <div className="business-dashboard__main__cards__card__title">
              Total tickets available
            </div>
            <div className="business-dashboard__main__cards__card__value">
              12,056
            </div>
          </div>
          <div className="business-dashboard__main__cards__card">
            <div className="business-dashboard__main__cards__card__title">
              Total tickets sold
            </div>
            <div className="business-dashboard__main__cards__card__value">
              3,092
            </div>
          </div>
        </div>

        <div className="business-dashboard__main__stats">
          <div className="business-dashboard__main__stats__title">
            <div>Ticket sales performance</div>
            <button>View report</button>
          </div>

          <div className="business-dashboard__main__stats__filter">
            <div className="business-dashboard__main__stats__filter__active">12 months</div>
            <div>3 months</div>
            <div>30 days</div>
            <div>7 days</div>
            <div>24 hours</div>
          </div>
        </div>
      </div>
      <div className="business-dashboard__notifications">
        <div className="business-dashboard__notifications__title">
          Notifications
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
        <div className="business-dashboard__notifications__card">
          <Image
          width={32}
          height={32}
            alt=""
            src="/assets/Content.png"
            style={{borderRadius: "50%"}}
          />
          <div className="business-dashboard__notifications__card__title">
            <div>Demi Wikinson</div>
            <div>Purchased <span>Davido Live In Concert</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
