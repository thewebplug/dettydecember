import React, { useState } from "react";

export const Preferences = () => {
  const questions = [
    {
      category: 'Music',
      options: ['Alternative Rock', 'Afrobeats', 'Cabaret', 'Classical', 'Comedy', 'Country and Folk','Festivals','R&B/Urban Soul','Rap and Hip-Hop','Rock and Pop','World Music','More Concerts']
    },
    {
      category: 'Sports',
      options: ['Alternative Rock', 'Afrobeats', 'Cabaret', 'Classical', 'Comedy', 'Country and Folk','Festivals','R&B/Urban Soul','Rap and Hip-Hop','Rock and Pop','World Music','More Concerts']
    },
    {
      category: 'Art & Theatre',
      options: ['Alternative Rock', 'Afrobeats', 'Cabaret', 'Classical', 'Comedy', 'Country and Folk','Festivals','R&B/Urban Soul','Rap and Hip-Hop','Rock and Pop','World Music','More Concerts']
    },
    {
      category: 'Family',
      options: ['Alternative Rock', 'Afrobeats', 'Cabaret', 'Classical', 'Comedy', 'Country and Folk','Festivals','R&B/Urban Soul','Rap and Hip-Hop','Rock and Pop','World Music','More Concerts']
    }
  ];

  const initialState = questions.reduce((acc, question) => {
    acc[question.category] = question.options.reduce((opts, option) => {
      opts[option] = false;
      return opts;
    }, {});
    return acc;
  }, {});

  const [options, setOptions] = useState(initialState);
  const [savedOptions, setSavedOptions] = useState(initialState);
 console.log(options)

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
            Preferences
          </h2>
          <p className="text-[14px] text-textTertiary">
          Manage your preferences to receive event suggestions tailored to your interests.
          </p>
        </div>
        <div>
          <button className="button-green"onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </main>
      {/* checked-box */}
      <section className="flex flex-col">
        {questions.map((question, index) => (
          <main className="flex gap-24 border-b-[1px] py-6 "key={question.category}>
            <div className="w-1/3 flex flex-col">
              <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                {question.category}
              </h2>
            </div>
            <div className="w-2/3 grid grid-cols-3 justify-between">
              {question.options.map((option, index) => (
                <div className="flex gap-4" key={option}>
               <div>
               <input
                    type="checkbox"
                    name={`${question.category}_${option}`}
                    id={`${question.category}_${option}`}
                    checked={!!options[question.category][option]} // Ensures boolean value
                    onChange={handleCheckboxChange(question.category, option)}
                    className="checkbox-green"
                  />
               </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                      {option}
                    </h2>
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

