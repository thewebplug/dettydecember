export default function ShareModal({setOpen}) {
    return (
        <div className="share-modal">
<div className="share-modal__inner">
<div className="share-modal__inner__title">
<div>Share this event</div>
<svg className="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
onClick={() => setOpen(false)}
>
<path d="M18 6L6 18M6 6L18 18" stroke="#ACAFAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    </div>

    <div className="share-modal__inner__grid">
        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_9633)">
<path d="M1.66602 9.33342C1.66602 8.39999 1.66602 7.93328 1.84767 7.57676C2.00746 7.26316 2.26243 7.00819 2.57603 6.8484C2.93255 6.66675 3.39926 6.66675 4.33268 6.66675H10.666C11.5994 6.66675 12.0661 6.66675 12.4227 6.8484C12.7363 7.00819 12.9912 7.26316 13.151 7.57676C13.3327 7.93328 13.3327 8.39999 13.3327 9.33342V15.6667C13.3327 16.6002 13.3327 17.0669 13.151 17.4234C12.9912 17.737 12.7363 17.992 12.4227 18.1518C12.0661 18.3334 11.5994 18.3334 10.666 18.3334H4.33268C3.39926 18.3334 2.93255 18.3334 2.57603 18.1518C2.26243 17.992 2.00746 17.737 1.84767 17.4234C1.66602 17.0669 1.66602 16.6002 1.66602 15.6667V9.33342Z" fill="#232423"/>
<path d="M6.66602 6.66675V4.33341C6.66602 3.39999 6.66602 2.93328 6.84767 2.57676C7.00746 2.26316 7.26243 2.00819 7.57603 1.8484C7.93255 1.66675 8.39926 1.66675 9.33268 1.66675H15.666C16.5994 1.66675 17.0661 1.66675 17.4227 1.8484C17.7363 2.00819 17.9912 2.26316 18.151 2.57676C18.3327 2.93328 18.3327 3.39999 18.3327 4.33341V10.6667C18.3327 11.6002 18.3327 12.0669 18.151 12.4234C17.9912 12.737 17.7363 12.992 17.4227 13.1518C17.0661 13.3334 16.5994 13.3334 15.666 13.3334H13.3327M4.33268 18.3334H10.666C11.5994 18.3334 12.0661 18.3334 12.4227 18.1518C12.7363 17.992 12.9912 17.737 13.151 17.4234C13.3327 17.0669 13.3327 16.6002 13.3327 15.6667V9.33341C13.3327 8.39999 13.3327 7.93328 13.151 7.57676C12.9912 7.26316 12.7363 7.00819 12.4227 6.8484C12.0661 6.66675 11.5994 6.66675 10.666 6.66675H4.33268C3.39926 6.66675 2.93255 6.66675 2.57603 6.8484C2.26243 7.00819 2.00746 7.26316 1.84767 7.57676C1.66602 7.93328 1.66602 8.39999 1.66602 9.33341V15.6667C1.66602 16.6002 1.66602 17.0669 1.84767 17.4234C2.00746 17.737 2.26243 17.992 2.57603 18.1518C2.93255 18.3334 3.39926 18.3334 4.33268 18.3334Z" stroke="#232423" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2479_9633">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

            <div>Copy link</div>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.46675V14.948C20.0001 15.8127 19.6824 16.6447 19.1123 17.2732C18.5422 17.9018 17.7628 18.2793 16.934 18.3282L16.75 18.3334H3.25C2.41986 18.3335 1.62117 18.0026 1.01777 17.4088C0.414367 16.8149 0.0519987 16.003 0.00500011 15.1397L0 14.948V6.46675L9.652 11.7334C9.75938 11.792 9.87879 11.8226 10 11.8226C10.1212 11.8226 10.2406 11.792 10.348 11.7334L20 6.46675ZM3.25 1.66675H16.75C17.5556 1.66665 18.3325 1.9782 18.93 2.54098C19.5276 3.10377 19.9032 3.87767 19.984 4.71258L10 10.1605L0.016 4.71258C0.0935234 3.91082 0.44305 3.16416 1.00175 2.60681C1.56045 2.04947 2.29168 1.71798 3.064 1.67196L3.25 1.66675Z" fill="#232423"/>
</svg>

<div>Email</div>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_11340)">
<path d="M0.0833559 9.90989C0.0828703 11.6563 0.541247 13.3616 1.41284 14.8646L0 20L5.2791 18.622C6.73923 19.4133 8.3752 19.828 10.0377 19.8281H10.042C15.5302 19.8281 19.9977 15.3822 20 9.9177C20.0011 7.26975 18.9661 4.77979 17.0859 2.90648C15.2059 1.03333 12.7056 0.00120848 10.0416 0C4.55285 0 0.0857028 4.44561 0.0834369 9.90989" fill="url(#paint0_linear_2479_11340)"/>
<path d="M0.0835938 9.90997C0.0830469 11.6566 0.541406 13.3617 1.41281 14.8646L0 20L5.27898 18.622C6.73352 19.4115 8.37117 19.8278 10.0376 19.8284H10.0419C15.53 19.8284 19.9977 15.3821 20 9.91791C20.0009 7.26977 18.9659 4.7796 17.0859 2.90635C15.2057 1.03334 12.7057 0.00108887 10.0419 0C4.55281 0 0.0857813 4.44571 0.0835938 9.90997ZM3.22742 14.6058L3.03031 14.2943C2.20172 12.9827 1.76437 11.467 1.765 9.9106C1.76672 5.36884 5.47953 1.67375 10.045 1.67375C12.2559 1.67468 14.3337 2.53271 15.8966 4.08949C17.4593 5.64642 18.3192 7.71605 18.3187 9.91728C18.3166 14.459 14.6037 18.1546 10.0419 18.1546H10.0386C8.5532 18.1538 7.09641 17.7567 5.82594 17.0062L5.52359 16.8277L2.39094 17.6454L3.22742 14.6058Z" fill="url(#paint1_linear_2479_11340)"/>
<path d="M7.54236 5.84259C7.35804 5.43768 7.16406 5.42951 6.98877 5.42241C6.84524 5.4163 6.68116 5.41676 6.51723 5.41676C6.35314 5.41676 6.08655 5.47776 5.8612 5.72095C5.63563 5.96437 5 6.55261 5 7.74901C5 8.94549 5.88168 10.1017 6.00458 10.2641C6.12765 10.4262 7.70668 12.96 10.2075 13.9347C12.2859 14.7448 12.7088 14.5837 13.1599 14.5431C13.611 14.5026 14.6156 13.955 14.8206 13.3871C15.0257 12.8194 15.0257 12.3327 14.9642 12.231C14.9027 12.1296 14.7386 12.0688 14.4926 11.9472C14.2464 11.8256 13.0368 11.2373 12.8113 11.1561C12.5858 11.075 12.4217 11.0346 12.2577 11.2781C12.0936 11.5212 11.6224 12.0688 11.4788 12.231C11.3354 12.3935 11.1917 12.4138 10.9458 12.2921C10.6996 12.1701 9.9072 11.9136 8.96712 11.0853C8.2357 10.4407 7.7419 9.64467 7.59837 9.40118C7.45483 9.15806 7.583 9.02628 7.70637 8.9051C7.81691 8.79614 7.95249 8.62114 8.07563 8.47919C8.19831 8.33717 8.23925 8.23585 8.32129 8.07367C8.40341 7.91134 8.36231 7.76932 8.3009 7.64769C8.23925 7.52606 7.76114 6.32339 7.54236 5.84259Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_2479_11340" x1="1000" y1="2000" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#1FAF38"/>
<stop offset="1" stop-color="#60D669"/>
</linearGradient>
<linearGradient id="paint1_linear_2479_11340" x1="1000" y1="2000" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9F9F9"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<clipPath id="clip0_2479_11340">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>


<div>Whatsapp</div>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_9644)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.3686C15.5228 19.3686 20 15.0328 20 9.68429C20 4.3358 15.5228 0 10 0C4.47715 0 0 4.3358 0 9.68429C0 12.5932 1.32437 15.2026 3.42105 16.9778V18.9375C3.42105 19.7035 4.20123 20.2172 4.89683 19.9093L7.07153 18.9467C7.99773 19.221 8.98107 19.3686 10 19.3686Z" fill="url(#paint0_linear_2479_9644)"/>
<path d="M7.59179 7.84435L4.6747 12.1407C4.36193 12.6014 4.92441 13.1548 5.35264 12.8077L7.84349 10.789C8.09702 10.5835 8.45243 10.5807 8.70893 10.7822L10.9242 12.5226C11.349 12.8563 11.9562 12.7604 12.2655 12.3105L15.3248 7.86165C15.6421 7.40025 15.0753 6.84237 14.6465 7.19396L12.013 9.35292C11.7595 9.56082 11.4022 9.56464 11.1445 9.36221L8.93639 7.6275C8.50978 7.29235 7.89978 7.39073 7.59179 7.84435Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_2479_9644" x1="10" y1="0" x2="6.79125" y2="19.891" gradientUnits="userSpaceOnUse">
<stop stop-color="#00B1FF"/>
<stop offset="1" stop-color="#006BFF"/>
</linearGradient>
<clipPath id="clip0_2479_9644">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Messenger</div>

        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_9653)">
<path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
<path d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.33418 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.47287 20.0405 10.5271 20.0405 11.5625 19.8785V12.8906H13.8926Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2479_9653">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>


<div>Facebook</div>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_9663)">
<path d="M15.7508 0.833252H18.8175L12.1175 8.59997L20 19.1666H13.8283L8.995 12.7571L3.46333 19.1666H0.395L7.56167 10.859L0 0.834097H6.32833L10.6975 6.69252L15.7508 0.833252ZM14.675 17.3056H16.3742L5.405 2.59703H3.58167L14.675 17.3056Z" fill="#232423"/>
</g>
<defs>
<clipPath id="clip0_2479_9663">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>


<div>X (Twitter)</div>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_3088)">
<path d="M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z" fill="#0A66C2"/>
</g>
<defs>
<clipPath id="clip0_2479_3088">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Linkedin</div>

        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2479_8013)">
<path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
<path d="M10 0C4.47737 0 0 4.47737 0 10C0 14.2387 2.63374 17.8601 6.35391 19.3169C6.26337 18.5267 6.1893 17.3086 6.38683 16.4444C6.5679 15.6626 7.55556 11.4733 7.55556 11.4733C7.55556 11.4733 7.25926 10.8724 7.25926 9.99177C7.25926 8.60082 8.06584 7.56379 9.06996 7.56379C9.92593 7.56379 10.3374 8.20576 10.3374 8.97119C10.3374 9.82716 9.79424 11.1111 9.50617 12.3045C9.26749 13.3004 10.0082 14.1152 10.9877 14.1152C12.7654 14.1152 14.1317 12.2387 14.1317 9.53909C14.1317 7.14403 12.4115 5.47325 9.95062 5.47325C7.10288 5.47325 5.4321 7.60494 5.4321 9.8107C5.4321 10.6667 5.76132 11.5885 6.17284 12.0905C6.25514 12.1893 6.26337 12.2798 6.23868 12.3786C6.16461 12.6914 5.99177 13.3745 5.95885 13.5144C5.9177 13.6955 5.8107 13.7366 5.6214 13.6461C4.37037 13.0617 3.58848 11.2428 3.58848 9.76955C3.58848 6.61728 5.87654 3.72016 10.1975 3.72016C13.6626 3.72016 16.3621 6.1893 16.3621 9.49794C16.3621 12.9465 14.1893 15.7202 11.177 15.7202C10.1646 15.7202 9.20988 15.1934 8.88889 14.5679C8.88889 14.5679 8.38683 16.4774 8.26337 16.9465C8.04115 17.8189 7.4321 18.9053 7.02058 19.572C7.95885 19.8601 8.9465 20.0165 9.98354 20.0165C15.5062 20.0165 19.9835 15.5391 19.9835 10.0165C20 4.47737 15.5226 0 10 0Z" fill="#E60019"/>
</g>
<defs>
<clipPath id="clip0_2479_8013">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Pinterest</div>

        </div>
    </div>

</div>
        </div>
    )
}