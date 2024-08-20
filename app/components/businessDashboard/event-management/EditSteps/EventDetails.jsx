import React, {useState}  from "react";
import Select from "react-select";
import { TextField } from "@/app/components/userComponents/TextField";
import countryList from "react-select-country-list";

export const EventDetails = () => {
  const [value, setValue] = useState(null);
  const options = countryList().getData();
  console.log(options)
  // select country props
  const formatOptionLabel = ({ value, label }) => (

    <div className="flex gap-2 items-center">
      <div className="relative w-[20px] h-[20px] rounded-full">
        <Image
          src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
          alt={`Flag of ${label}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {label}
    </div>
  );
  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };
  return (
    <div className="flex flex-col gap-12 ">
      <main className=" flex flex-col ">
        <h2 className="font-bold text-[24px] text-textPrimary syne leading-[32px]">
          Event Details
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
          Input basic information about your event, and what makes it unique.
        </p>
      </main>
      <form action="" className="flex flex-col gap-6 w-full">
        <div className="w-full">
          <TextField
            id="EvenTitle"
            label={"Event Title"}
            type="text"
            placeholder="Event Name...."
          />
        </div>
        <div className="w-full">
          <TextField
            id="event-desc"
            label={"Event Description"}
            type="text"
            placeholder="Event Description...."
          /> 
          {/* <textarea name="" id=""></textarea> */}
        </div>
        <div className="w-full">
          <TextField
            id="venue-capacity"
            label={"Venue Capacity"}
            type="text"
            placeholder="Venue Capacity..."
          />
        </div>
        <main className=" flex flex-col ">
        <h2 className="font-bold text-[24px] text-textPrimary syne leading-[32px]">
          Location
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
        Set location and address for this event.
        </p>
      </main>
      <div className="w-full">
          <TextField
            id="address"
            label={"Address"}
            type="text"
            placeholder="Address..."
          />
        </div>
      <div className="w-full flex gap-6 items-center">
        <div className="w-1/2">
        <TextField
            id="town/city"
            label={"Town/City"}
            type="text"
            placeholder="Address..."
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4 " >
        <label htmlFor="state">State</label>
        <select name="state" id="state" className="py-[8px] px-[12px] w-full text-[16px] leading-[24px] text-textPrimary border-[1px] rounded-lg border-borderPrimary">
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
         </select>
        </div>
        </div>
      <div className="w-full flex gap-6 items-center">
      <div className="w-1/2 flex-col flex gap-4">
            <label htmlFor="country">Country Of Residence</label>
           <Select
              options={options}
              value={value}
              onChange={setValue}
              styles={customStyles}
              formatOptionLabel={formatOptionLabel}
            />
           </div>
        <div className="w-1/2">
        <TextField
            id="google-map-link"
            label={"Google maps link (Optional)"}
            type="text"
            placeholder="Google maps link..."
          />
        </div>
  
        </div>
        <main className=" flex flex-col ">
        <h2 className="font-bold text-[24px] text-textPrimary syne leading-[32px]">
          Date And Time
        </h2>
        <p className="text-[14px] text-textTertiary leading-[20px]">
        Set location and address for this event.
        </p>
      </main>

      </form>
      
    </div>
  );
};
