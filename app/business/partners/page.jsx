"use client";

import DefBlack from "@/app/components/DefBlack";
import Org from "@/app/components/Orgs";
import PartnersComp from '@/app/components/PartnersCmp';
import Footer from "@/app/components/footer";

export default function Partners() {
    return (
        <div className="dd-partners">
            <div className="dd-partners__hero">
        <h1 className="dd-partners__hero__title">
        Our invaluable partners
        </h1>
        <h2 className="dd-partners__hero__subtitle">
        We’re trusted by the most recognized clients in sports, festivals, venues and brands around the world.        </h2>
        <div className="dd-partners__hero__button-group">
            <button
            onClick={() => window.location.href = "/events"}
            >Work with us</button>
            <button>Sign in</button>
        </div>

    </div>
    <Org />
    <PartnersComp partnerPage={true} />
    <DefBlack />
    <Footer />
        </div>
    )
}