"use client";

export default function DefBlack() {
    return (
        <div className="discover">
        <div className="discover__inner">
          <div className="discover__inner__title">
          Define the future of events with us
          </div>
          <div className="discover__inner__subtitle">
          Discover how our world-class solutions and local teams can work with you to maximize your event potential.          </div>

          <div className="discover__inner__button-group">
                <button
                onClick={() => window.location.href = "https://docs.google.com/forms/d/1_MFXEajDoFMAWkYKWEkUrnfa8Qn0WscFjqJT1_voQCE/viewform?edit_requested=true"}
                >Work with us</button>
                <button>Sign in</button>
            </div>
          
        </div>
      </div>  
    )
}