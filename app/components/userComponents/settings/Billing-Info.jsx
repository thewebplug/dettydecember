import React, {useState} from 'react'
import { AddBankModal } from './Modals/AddBankModal'

export const BillingInfo = () => {
  const [OpenAddbankModal, setOpenAddbankModal] = useState(false)
  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center border-b-[1px] py-6 border-b-[#EAEBEA] font-inter">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[20px] text-textPrimary">
            Billing Information
          </h2>
          <p className="text-[14px] text-textTertiary">
            Manage your billing information and payment methods.
          </p>
        </div>
      </header>
      <section className='flex flex-col '>
        <main className='flex gap-24 border-b-[1px] py-6'>
          <div className='w-1/3 flex flex-col'>
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Buying tickets
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              Set the default payment method that will be charged when you buy tickets.
            </p>
          </div>
          <div className='w-2/3 flex justify-between items-center border-[1px]  rounded-[10px] p-4'>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              No credit/debit card added yet.
            </p>
            <button className='add-btn' onClick={()=>setOpenAddbankModal(!OpenAddbankModal)}> Add bank card</button>
          </div>
        </main>
        <main className='flex gap-24 border-b-[1px] py-6'>
          <div className='w-1/3 flex flex-col'>
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
            Selling tickets
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
            Get paid by direct deposit when you resell your tickets.
            </p>
          </div>
          <div className='w-2/3 flex justify-between items-center border-2 rounded-[10px] p-4'>
            <p className="text-[14px] text-textTertiary leading-[20px]">
            No bank account added yet.
            </p>
            <button className='add-btn'>Add bank account</button>
          </div>
        </main>
      </section>

      {OpenAddbankModal && <AddBankModal OpenBankModal={OpenAddbankModal} setOpenBankModal={setOpenAddbankModal} />}
    </div>
  )
}
