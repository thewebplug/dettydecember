import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiExport } from "react-icons/ci";
export const Header = () => {
  const [exportOpen, setexportOpen] = useState(false)
  const handleExportView =()=>{
      setexportOpen(!exportOpen)
  }
  return (
    <div className='w-full font-inter'>
    <main className="flex justify-between items-center relative  font-inter">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[32px] text-textPrimary syne">
          Event management
          </h2>
          <p className="text-[16px] text-textTertiary">
          View and manage all your events here.
          </p>
        </div>
        <div className='flex items-start gap-4'>
      
      <button className="button-gray flex items-center justify-center gap-4" onClick={handleExportView}><CiExport className='text-textPrimary' />Exports</button>
        
    <div className='absolute top-20 bg-white z-[99999]'>
    {
            exportOpen && (
              <div className="flex flex-col bg-white p-6 text-[14px] text-textSecondary py-12 gap-6 shadow-lg z-[999999] transition-all">
                <p className='pointer'>PDF Document (.pdf)</p>
                <p className='pointer'>CSV Document (.csv)</p>
              </div>
            )
          }
    </div>
          <button className="green-btn flex items-center gap-4"><IoMdAdd className='text-white' />Create events</button>
        </div>
      </main>
    </div>
  )
}
