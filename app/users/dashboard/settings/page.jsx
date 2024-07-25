"use client";
import { Account } from "@/app/components/userComponents/settings/Account";
import { CreditBalance } from "@/app/components/userComponents/settings/CreditBalance";
import { GiftVouchers } from "@/app/components/userComponents/settings/GiftVouchers";
import { Notification } from "@/app/components/userComponents/settings/Notification";
import { Preferences } from "@/app/components/userComponents/settings/Preferences";
import { BillingInfo } from "@/app/components/userComponents/settings/Billing-Info";
import { useStatus } from "@/app/components/context/contexApi";

export default function Settings() {
  const { setting, setSetting, settingStatus } = useStatus();
  const renderView = () => {
    switch (setting) {
      case 'Account':
        return <Account />;
      case 'Billing Information':
        return <BillingInfo />;
      case 'Credit Balance':
        return <CreditBalance />;
      case 'Gift Vouchers':
        return <GiftVouchers />;
      case 'Notifications':
        return <Notification />;
      case 'Preferences':
        return <Preferences />;
      default:
        return <Account />;
    }
  };

  return (
    <div className="bg-[#fff] p-[24px] w-full rounded-lg border-[1px] shadow-sm font-inter  border-[#EAEBEA]">
      <main className=" border-b-[1px] border-b-[#EAEBEA]">
        <h1 className="text-[36px] text-[#13162D] syne">Settings</h1>
        <div className="flex pt-[32px] font-semibold items-center text-[16px] font-inter">
          {settingStatus.map((status) => (
            <button
              onClick={() => setSetting(status)}
              className={`cart-btn capitalize ${
                status === setting ? "active-cart-btn" : ""
              }`}
              key={status}
            >
              {status}
            </button>
          ))}
        </div>
      </main>
      <div className="mt-5">
      {renderView()}
      </div>
    </div>
  );
}
