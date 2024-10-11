export default function FailModal({open, setOpen, icon, title, subtitle,buttonText,  callback, group, loading}) {
    return (
        open && <div className="fail-modal">
          <div className="fail-modal__inner">
            <div className="fail-modal__inner__flex">
            {icon ? icon : <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#FEE4E2"/>
<path d="M28 18V17.2C28 16.0799 28 15.5198 27.782 15.092C27.5903 14.7157 27.2843 14.4097 26.908 14.218C26.4802 14 25.9201 14 24.8 14H23.2C22.0799 14 21.5198 14 21.092 14.218C20.7157 14.4097 20.4097 14.7157 20.218 15.092C20 15.5198 20 16.0799 20 17.2V18M22 23.5V28.5M26 23.5V28.5M15 18H33M31 18V29.2C31 30.8802 31 31.7202 30.673 32.362C30.3854 32.9265 29.9265 33.3854 29.362 33.673C28.7202 34 27.8802 34 26.2 34H21.8C20.1198 34 19.2798 34 18.638 33.673C18.0735 33.3854 17.6146 32.9265 17.327 32.362C17 31.7202 17 30.8802 17 29.2V18" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}


              <svg
                className="pointer"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setOpen(false)}
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

            <div className="fail-modal__inner__title">
              {title}
            </div>
            <div className="fail-modal__inner__subtitle">
              {subtitle}
            </div>
            {!group && <button className="fail-modal__inner__button" onClick={callback}>{buttonText}</button>}
            {!!group && <div className="fail-modal__inner__buttons">
              <button onClick={callback[0]}>{buttonText[0]}</button>
              <button onClick={callback[1]}>{loading ? "Loading..." : buttonText[1]}</button>
            </div>}
          </div>
        </div>
    )
}