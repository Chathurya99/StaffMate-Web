/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function SalaryCalculation() {
  const [basicSalary, setBasicSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [deductions, setDeductions] = useState('');
  const [totalSalary, setTotalSalary] = useState(null);

  const calculateSalary = () => {
    // Assuming basicSalary, bonus, and deductions are numbers
    const total = parseFloat(basicSalary) + parseFloat(bonus) - parseFloat(deductions);
    setTotalSalary(total);
  };

  return (
    <div>
      <h2>Salary Calculator</h2>
      <form>
        <div>
          <label htmlFor="basicSalary">Basic Salary:</label>
          <input
            type="number"
            id="basicSalary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bonus">Bonus:</label>
          <input
            type="number"
            id="bonus"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="deductions">Deductions:</label>
          <input
            type="number"
            id="deductions"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateSalary}>
          Calculate Salary
        </button>
      </form>
      {totalSalary !== null && (
        <div>
          <h3>Total Salary: {totalSalary}</h3>
        </div>
      )}
    </div>
  );
}

export default SalaryCalculation;


