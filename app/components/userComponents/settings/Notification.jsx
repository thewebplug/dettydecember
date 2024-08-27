"use client"
import React, { useState } from "react";

export const Notification = () => {
  const questions = [
    {
      category: "Category 1",
      header: "Tickets",
      paragraph:
        "Personalized emails that deliver the latest news and event details about all your favorite artist, teams, and venues.",
      options: [
        {
          name: "Option 1",
          header: "Ticket notification",
          paragraph: "Get a personalized list of upcoming events in your area.",
        },
        {
          name: "Option 2",
          header: "Team notification",
          paragraph:
            "Read about your favorite teams and leagues that are playing near you.",
        },
        {
          name: "Option 3",
          header: "Venue notification",
          paragraph:
            "Learn about the events happening at your favorite venues.",
        },
      ],
    },
    {
      category: "Category 2",
      header: "Special offers and packages",
      paragraph:
        "Personalized emails that deliver the latest news and event details about all your favorite artist, teams, and venues.",
      options: [
        {
          name: "Option 1",
          header: "Team notification",
          paragraph:
            "Read about your favorite teams and leagues that are playing near you.",
        },
        {
          name: "Option 2",
          header: "Ticket notification",
          paragraph: "Get a personalized list of upcoming events in your area.",
        },
        {
          name: "Option 3",
          header: "Venue notification",
          paragraph:
            "Learn about the events happening at your favorite venues.",
        },
      ],
    },
    {
      category: "Category 3",
      header: "News and updates",
      paragraph:
        "Personalized emails that deliver the latest news and event details about all your favorite artist, teams, and venues.",
      options: [
        {
          name: "Option 1",
          header: "Ticket notification",
          paragraph: "Get a personalized list of upcoming events in your area.",
        },
        {
          name: "Option 2",
          header: "Venue notification",
          paragraph:
            "Learn about the events happening at your favorite venues.",
        },
        {
          name: "Option 3",
          header: "Team notification",
          paragraph:
            "Read about your favorite teams and leagues that are playing near you.",
        },
      ],
    },
  ];

  const initialState = questions.reduce((acc, question) => {
    acc[question.category] = question.options.reduce((opts, option) => {
      opts[option.name] = false;
      return opts;
    }, {});
    return acc;
  }, {});

  const [options, setOptions] = useState(initialState);
  const [savedOptions, setSavedOptions] = useState(initialState);
//  console.log(options)

// handle checkbox change
  const handleCheckboxChange = (category, option) => (event) => {
    const { checked } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [category]: {
        ...prevOptions[category],
        [option]: checked,
      },
    }));
  };


// handle saved changes
const handleSaveChanges =()=>{
  setSavedOptions(options)
}

  return (
    <div className="flex flex-col  font-inter">
      <main className="flex justify-between items-center border-b-[1px] py-6 border-b-[#EAEBEA] font-inter">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[20px] text-textPrimary">
            Notification
          </h2>
          <p className="text-[14px] text-textTertiary">
            Get customised notifications based on your preferences.
          </p>
        </div>
        <div>
          <button className="button-green"onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </main>
      {/* checked-box */}
      <section className="flex flex-col">
        {questions.map((question, index) => (
          <main className="flex gap-24 border-b-[1px] py-6 " key={question.category}>
            <div className="w-1/3 flex flex-col">
              <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                {question.header}
              </h2>
              <p className="text-[14px] text-textTertiary leading-[20px]">
                {question.paragraph}
              </p>
            </div>
            <div className="w-2/3 flex flex-col gap-6">
              {question.options.map((option, index) => (
                <div className="flex  gap-4" key={option}>
               <div>
               <input
                    type="checkbox"
                    name={`${question.category}_${option.name}`}
                    id={`${question.category}_${option.name}`}
                    checked={options[question.category][option.name]} // Ensures boolean value
                    onChange={handleCheckboxChange(question.category, option.name)}
                    className="checkbox-green"
                  />
               </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                      {option.header}
                    </h2>
                    <p className="text-[14px] text-textTertiary leading-[20px]">
                      {option.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ))}
      </section>
      <div className="flex justify-end pt-6">
          <button className="button-green" onClick={handleSaveChanges}>Save Changes</button>
        </div>
    </div>
  );
};
