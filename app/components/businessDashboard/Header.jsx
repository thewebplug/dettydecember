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
          Events
          </h2>
          <p className="text-[16px] text-textTertiary">
          View and manage all your events here.
          </p>
        </div>
       
      </main>
    </div>
  )
}
