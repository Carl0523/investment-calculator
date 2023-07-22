import React, { useState } from "react";
import Heading from "./Heading";
import "./SavingForm.css";



function SavingForm(props) {
  const [currSaving, setCurrSaving] = useState("");
  const [annualSaving, setAnnualSaving] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");

  const [isEmptySaving, setIsEmptySaving] = useState(false);
  const [isEmptyAnnualSaving, setIsEmptyAnnualSaving] = useState(false);
  const [isEmptyInterest, setIsEmptyInterest] = useState(false);
  const [isEmptyDuration, setIsEmptyDuration] = useState(false);

  const savingHandler = (event) => {
    setCurrSaving(event.target.value);
    setIsEmptySaving(false);
  };
  const annualSavingHandler = (event) => {
    setAnnualSaving(event.target.value);
    setIsEmptyAnnualSaving(false);
  };
  const interestHandler = (event) => {
    setInterest(event.target.value);
    setIsEmptyInterest(false);
  };
  const durationHandler = (event) => {
    setDuration(event.target.value);
    setIsEmptyDuration(false);
  };


  /**
   * Trigger when submit the form: pass the state up to App.js
   * @param {EventListener} event 
   */
  const submitHandler = (event) => {
    event.preventDefault();

    if (currSaving.trim() === "" || annualSaving.trim() === "" || 
    interest.trim() === "" || duration.trim() === "")
    {
      setIsEmptySaving(true);
      setIsEmptyAnnualSaving(true);
      setIsEmptyInterest(true);
      setIsEmptyDuration(true);
      return;
    }

    const inputData = 
    {
        currentSaving : currSaving,
        yearlySaving : annualSaving,
        interestRate : interest,
        savingDuration : duration,
    }

    props.onAddUserData(inputData);

    

    setCurrSaving("");
    setAnnualSaving("");
    setInterest("");
    setDuration("");
  };

  const resetHandler = () =>
  {
    setCurrSaving("");
    setAnnualSaving("");
    setInterest("");
    setDuration("");
  }

  return (
    <div className="saving-form">
      {/* 1. The title and logo */}
      <Heading />

      {/* 2. The form that takes in user input regarding saving and buttons */}
      <form onSubmit={submitHandler}>
        <div className="saving-form__inputs">
          {/* a. The input for current saving */}
          <div className={`saving-form__input ${isEmptySaving  ? 'empty-input' : ''}`}>
            <label>Current Savings</label>
            <input type="number" value={currSaving} placeholder="$10000" onChange={savingHandler} />
            {isEmptySaving ? <p>This is a required field</p> : ""}
          </div>

          {/* b. The input for annual extra saving deposit */}
          <div className={`saving-form__input ${isEmptyAnnualSaving  ? 'empty-input' : ''}`}>
            <label>Annual Savings</label>
            <input
              type="number"
              value={annualSaving}
              placeholder="$2000"
              onChange={annualSavingHandler}
            />
            {isEmptyAnnualSaving ? <p>This is a required field</p> : ""}
          </div>

          {/* c. The input for annual interest rate */}
          <div className={`saving-form__input ${isEmptyInterest  ? 'empty-input' : ''}`}>
            <label>Expected Interest (annually %)</label>
            <input type="number" value={interest} placeholder="5%" onChange={interestHandler} />
            {isEmptyInterest ? <p>This is a required field</p> : ""}
          </div>

          {/* d. The input for year of saving */}
          <div className={`saving-form__input ${isEmptyDuration  ? 'empty-input' : ''}`}>
            <label>Investment Duration (years)</label>
            <input type="number" value={duration} placeholder="10" onChange={durationHandler} />
            {isEmptyDuration ? <p>This is a required field</p> : ""}
          </div>

        </div>

        {/* e. Buttons for submit and reset */}
        <div className="saving-form__actions">
          <button type="reset" className="reset-btn" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SavingForm;
