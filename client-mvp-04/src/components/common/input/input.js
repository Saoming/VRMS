import React, { useState } from 'react';

const Input = ({ placeholder, type, onChange, autoComplete, dataTestid, className, currentSkills }) => {
  if (!dataTestid) dataTestid = 'default-input';
  const [value, setVal] = useState({input: ''});
  // console.log(value.input);
  console.log(currentSkills);

  return (
    <div className="text-field-container">
      <input
        data-testid={dataTestid}
        type={type}
        name="default-input"
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        className={className}
        value={value.input}
        onChange={(e) => setVal({input: e.target.value})}
      />
    </div>
  );
};

export default Input;
