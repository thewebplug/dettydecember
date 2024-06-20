import DefBlack from "@/app/components/DefBlack";
import BusinessFaqComp from "@/app/components/businessfaq";
import Footer from "@/app/components/footer";

export default function BusinessFaq() {
    return (
        <div className="business-faq">
            <div className="business-faq__hero">
        <h1 className="business-faq__hero__title">Frequently asked questions</h1>
        <h2 className="business-faq__hero__subtitle">Here’s everything you need to know about DettyDecember.
        </h2>
        <div className="business-faq__hero__button-group">
        </div>
      </div>
<BusinessFaqComp />
      <div className="business-faq__still">
      <div className="business-faq__still__inner">
      <h2 className="business-faq__still__inner__title">Still have questions?</h2>
        <h3 className="business-faq__still__inner__subtitle">Can’t find the answer you’re looking for? Please chat to our friendly team.</h3>
        <div className="business-faq__still__inner__button-group">
            <button>Learn more</button>
            <button>Get in touch</button>
        </div>
        </div>
       
      </div>
      <DefBlack />

      <Footer />
        </div>

        
    )
}