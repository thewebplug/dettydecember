export default function Events() {
  return (
    <div className="admin-home">
      <div className="admin-home__title">Dashboard</div>
      <div className="admin-home__subtitle">
        Measure, track and get insights of DettyDecember.
      </div>
      <div className="admin-home__filter">
        <div className="admin-home__filter__days">
          <div className="admin-home__filter__days__active">12 months</div>
          <div>30 days</div>
          <div>7 days</div>
          <div>24 hours</div>
        </div>

        <div className="admin-home__filter__button-group">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                stroke="#565856"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Select dates
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66663 14.1667L9.99996 17.5M9.99996 17.5L13.3333 14.1667M9.99996 17.5V10M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613"
                stroke="#565856"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Export report
          </button>
        </div>
      </div>

      <div className="admin-home__stats">
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total users</div>
          <div className="admin-home__stats__card__subtitle">
            <div>593,092</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total users (event organizers)</div>
          <div className="admin-home__stats__card__subtitle">
            <div>593,092</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total users (buyers)</div>
          <div className="admin-home__stats__card__subtitle">
            <div>593,092</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total events created</div>
          <div className="admin-home__stats__card__subtitle">
            <div>593,092</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total tickets created</div>
          <div className="admin-home__stats__card__subtitle">
            <div>593,092</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
        <div className="admin-home__stats__card">
          <div className="admin-home__stats__card__title">Total tickets sold </div>
          <div className="admin-home__stats__card__subtitle">
            <div>1,412,056</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4150_4041)">
                  <path
                    d="M18.3334 14.1666L11.7762 7.60939C11.4461 7.27938 11.2811 7.11437 11.0909 7.05255C10.9235 6.99817 10.7432 6.99817 10.5758 7.05255C10.3856 7.11437 10.2206 7.27938 9.89054 7.60939L7.60949 9.89044C7.27948 10.2205 7.11447 10.3855 6.9242 10.4473C6.75683 10.5017 6.57654 10.5017 6.40917 10.4473C6.2189 10.3855 6.05389 10.2205 5.72388 9.89044L1.66669 5.83325M18.3334 14.1666H12.5M18.3334 14.1666V8.33325"
                    stroke="#F04438"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4150_4041">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              17%
            </div>
          </div>
        </div>
      </div>

      <div className="admin-home__overview">
        <div className="admin-home__overview__group">
          <div>
            <div className="admin-home__overview__group__title">
              Overview for users
            </div>
            <div className="admin-home__overview__group__subtitle">
              Evaluate the performance metrics provided above in comparison with
              each other.
            </div>
          </div>

          <button>
            Year: 2024
            <input type="radio" name="" id="" />
          </button>
        </div>
      </div>
      <div className="admin-home__overview">
        <div className="admin-home__overview__group">
          <div>
            <div className="admin-home__overview__group__title">
              Ticket sales performance
            </div>
          </div>

          <button>View report</button>
        </div>

        <div className="admin-home__overview__filter">
          <div className="admin-home__overview__filter__active">12 months</div>
          <div>3 months</div>
          <div>30 days</div>
          <div>7 days</div>
          <div>24 hours</div>
        </div>
      </div>

      <div className="admin-home__overview">
        <div className="admin-home__overview__group">
          <div>
            <div className="admin-home__overview__group__title">
              Events created by location
            </div>
            <div className="admin-home__overview__group__subtitle">
              View events created by event organizers on the map and ranked by
              states with the highest event created
            </div>
          </div>

        </div>
          <div className="admin-home__overview__stats">
            <div className="admin-home__overview__stats__card1"></div>
            <div className="admin-home__overview__stats__card2">
              <div className="admin-home__overview__stats__card2__title">
                120,357
              </div>
              <div className="admin-home__overview__stats__card2__card">
                <div className="admin-home__overview__stats__card2__card__title">
                Lagos
                </div>

                <div className="admin-home__overview__stats__card2__card__range">
                <div className="admin-home__overview__stats__card2__card__range__inner">
                    <div></div>
                    </div>

                    <div className="admin-home__overview__stats__card2__card__range__title">50%</div>

                </div>
              </div>
              <div className="admin-home__overview__stats__card2__card">
                <div className="admin-home__overview__stats__card2__card__title">
                Lagos
                </div>

                <div className="admin-home__overview__stats__card2__card__range">
                <div className="admin-home__overview__stats__card2__card__range__inner">
                    <div></div>
                    </div>

                    <div className="admin-home__overview__stats__card2__card__range__title">50%</div>

                </div>
              </div>
              <div className="admin-home__overview__stats__card2__card">
                <div className="admin-home__overview__stats__card2__card__title">
                Lagos
                </div>

                <div className="admin-home__overview__stats__card2__card__range">
                <div className="admin-home__overview__stats__card2__card__range__inner">
                    <div></div>
                    </div>

                    <div className="admin-home__overview__stats__card2__card__range__title">50%</div>

                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
