import React from "react";

import { useState } from "react";

const UserInput = () => {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualReturn: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div id="input-group" className=" flex justify-between">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={UserInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number"
          value={UserInput.annualReturn}
          onChange={(event) =>
            handleChange("annualReturn", event.target.value)
          }
          
          required />
        </p>
      </div>
      <div id="input-group" className="flex justify-between">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number"
          value={UserInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", event.target.value)
          }
          required />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number"
          value={UserInput.duration}
          onChange={(event) =>
            handleChange("duration", event.target.value)
          }

          required />
        </p>
      </div>

     

    </section>
  );
};

export default UserInput;
