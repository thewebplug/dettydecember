import React from 'react'

export const EventCategory = () => {
  const category = "Event category"; // Define category name
  return (
    <div className='flex flex-col gap-12'>
       <main className=" flex flex-col ">
        <h2 className="font-bold text-[24px] text-textPrimary syne leading-[32px]">
          Event category
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
        Select any of the categories that best fit your event.
        </p>
      </main>
      <div className="grid md:grid-cols-2 gap-6">
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] text-textPrimary border-borderSecondary rounded-[10px]'>
            <main className='w-[20px] h-[20px] border-[2px] border-[#565856]  rounded-full'></main>
            <h2 className='text-[16px] font-semibold'>Music</h2>
           </main>
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] border-borderSecondary rounded-[10px]'>
            <span className='w-[20px] h-[20px] border-[1px] rounded-full'></span>
            <h2 className='text-[16px]'>Sports</h2>
           </main>
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] border-borderSecondary rounded-[10px]'>
            <span className='w-[20px] h-[20px] border-[1px] rounded-full'></span>
            <h2 className='text-[16px]'>Header</h2>
           </main>
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] border-borderSecondary rounded-[10px]'>
            <span className='w-[20px] h-[20px] border-[1px] rounded-full'></span>
            <h2 className='text-[16px]'>Header</h2>
           </main>
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] border-borderSecondary rounded-[10px]'>
            <span className='w-[20px] h-[20px] border-[1px] rounded-full'></span>
            <h2 className='text-[16px]'>Header</h2>
           </main>
           <main className='md:w-[322px] flex flex-col gap-6 p-4 border-[1px] border-borderSecondary rounded-[10px]'>
            <span className='w-[20px] h-[20px] border-[1px] rounded-full'></span>
            <h2 className='text-[16px]'>Header</h2>
           </main>
      </div>
    </div>
  )
}
