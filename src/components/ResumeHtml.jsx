"use client"
import React, { useState } from 'react';
function ResumeHtml() {
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  
  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleDeleteField = (index) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };

  return (
    <div>
      {inputFields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => {
              const updatedFields = [...inputFields];
              updatedFields[index].value = e.target.value;
              setInputFields(updatedFields);
            }}
          />
          <button onClick={() => handleDeleteField(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add</button>
    </div>
  );
}

export default ResumeHtml
