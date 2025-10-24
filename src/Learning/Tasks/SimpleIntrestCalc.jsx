import React, { useState } from 'react';

function SimpleInterestCalc() {
  const [principalAmt, setPrincipalAmt] = useState()
  const [years, setYears] = useState()
  const [interestRate, setInterestRate] = useState()
  const [loanType, setLoanType] = useState('')
  const [finalAmt, setFinalAmt] = useState(null)

  const Calculate = () => {
    const si = (principalAmt * interestRate * years) / 100;
    const total = principalAmt + si;
  
    if(!principalAmt|!interestRate|!years|!loanType){
      return alert( "pls enter all the required feilds") 
    }
    setFinalAmt({
      simpleInterest: si,
      totalAmount: total,
    })  
  }
  const reset = () => {
    setPrincipalAmt("");
    setYears("");
    setInterestRate("");
    setLoanType('');
    setFinalAmt(null);
  }
  return (
    <div>
      <h1>Simple Interest Calculator</h1>
      <p>
        <b>Loan Amount:</b>
        <input
          type="number"
          value={principalAmt}
          placeholder='enter Amount'
          onChange={(e) => setPrincipalAmt(Number(e.target.value))}
        />
      </p>

      <p>
        <b>Years:</b>
        <input
          type="number"
          placeholder='ex-10'
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
        <select value={loanType}  required onChange={(e) => setLoanType(e.target.value)}>
          <option value="">--Loan Type--</option>
          <option value="HomeLoan">Home Loan</option>
          <option value="EducationLoan">Education Loan</option>
          <option value="PersonalLoan">Personal Loan</option>
          <option value="CarLoan">Car Loan</option>
        </select>
      </p>

      <p>
        <b>Rate %:</b>
        <input
          type="number"
          placeholder='ex-8.3'
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </p>

      <button onClick={Calculate}>Calculate</button>
      <button onClick={reset}>Reset</button>

      {finalAmt && (
        <div>
          <h3>Result:</h3>
          <p><b>Loan Type:</b> {loanType}</p>
          <p><b>Simple Interest:</b> ${finalAmt.simpleInterest}</p>
          <p><b>Total Amount:</b> ${finalAmt.totalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleInterestCalc;
