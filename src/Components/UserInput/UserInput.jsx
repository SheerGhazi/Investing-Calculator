import React from "react";

import { useState } from "react";

const UserInput = ( {onChange, UserInput}) => {

  return (
    <section id="user-input">
      <div id="input-group" className=" flex justify-between">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={UserInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number"
          value={UserInput.annualReturn}
          onChange={(event) =>
            onChange("annualReturn", event.target.value)
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
            onChange("expectedReturn", event.target.value)
          }
          required />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number"
          value={UserInput.duration}
          onChange={(event) =>
            onChange("duration", event.target.value)
          }

          required />
        </p>
      </div>

     

    </section>
  );
};

export default UserInput;
