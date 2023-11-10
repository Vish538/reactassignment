import React, { useState } from 'react';
import './AgeCalculator.css'; // Create a separate CSS file for styling

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const ageDiff = today - birthDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <label htmlFor="birthdate">Enter your date of birth:</label><br></br><br></br>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      /><br></br><br></br>
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && (
        <b><h3>You are {age} years old.</h3></b>
      )}
    </div>
  );
}

export default AgeCalculator;
