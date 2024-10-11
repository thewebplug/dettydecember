export default function SuccessModal({open, setOpen, icon, title, subtitle,buttonText,  callback, group}) {
    return (
      open &&
        <div className="success-modal">
          <div className="success-modal__inner">
            <div className="success-modal__inner__flex">
            {icon ? icon : <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#DCFAE6"/>
<path d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#079455" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

            <div className="success-modal__inner__title">
              {title}
            </div>
            <div className="success-modal__inner__subtitle">
              {subtitle}
            </div>
            {!group && <button className="success-modal__inner__button" onClick={callback}>{buttonText}</button>}
            {!!group && 
            <div className="success-modal__inner__buttons">
            <button onClick={callback[0]}>{buttonText[0]}</button>
            <button onClick={callback[1]}>{buttonText[1]}</button>
          </div>
            }
          </div>
        </div>
    )
}