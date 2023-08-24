import React, { useState } from "react";
import chroma from "chroma-js";
import CreatableSelect, { StylesConfig } from "react-select/creatable";
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "payment_processing_fees", label: "Payment Processing Fees" },
    { value: "payroll_bonus_ga", label: "Payroll Bonus G&A" },
    { value: "payroll_bonus_sm", label: "Payroll Bonus S&M" },
    { value: "hosting_fees", label: "Hosting Fees" },
    { value: "discount", label: "Discount" },
    { value: "payroll_tax", label: "Payroll Tax" },
    { value: "salary_increase_month", label: "Salary Increase Month" },
  ];

  const regex = /[-+\*/\(\){}]/;
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
      };
    },
    multiValue: (styles, { data }) => {
      console.log(regex.test(data.value));
      return {
        ...styles,
        backgroundColor: regex.test(data.value) ? "transparent" : "#e6e6e6",
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      display: regex.test(data.value) ? "none" : "flex",
    }),
  };

  return (
    <div className="p-5">
      <h4>Multi Select Input</h4>
      <CreatableSelect
        className="React"
        classNamePrefix="my-select"
        value={selectedOptions}
        options={options}
        isMulti
        name="selectedOptions"
        onChange={(selectedOption) => {
          setSelectedOptions(selectedOption);
        }}
        styles={colourStyles}
      />
    </div>
  );
}

export default App;
