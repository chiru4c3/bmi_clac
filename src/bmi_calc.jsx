import React, { useState } from "react";
import "./bmicalc.css";

function BmiCalc() {
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [bmi, setBmi] = React.useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (height <= 0 || weight <= 0) {
      setError("Please enter valid positive values for height and weight.");
      setBmi(null);
      setCategory("");
    } else {
      setError("");

      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);

      if (bmi < 18.5) {
        setCategory("UnderWeight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setCategory("NormalWeight");
      } else {
        setCategory("Obesed");
      }
    }
  };

  return (
    <div className="bmi-card">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label> weight (kg) </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter Your Weight"
          aria-label="Weight in kilograms"
        />
      </div>
      <div className="input-group">
        <label> Height (cm) </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter Your Height"
          aria-label="Height in centimeters"
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="btn-calculator" onClick={calculateBMI}>
        {" "}
        Calculate BMI{" "}
      </button>

      {bmi && (
        <div className="result">
          <h3>Your BMI : {bmi}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </div>
  );
}

export default BmiCalc;
