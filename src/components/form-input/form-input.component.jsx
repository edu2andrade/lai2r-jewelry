import React from 'react';

const FormInput = ({ handleChange, ...otherProps }) => (
  <div>
    <input
      className="bg-transparent border-b border-darkGray text-xs p-2 w-64 focus:outline-none"
      onChange={handleChange} {...otherProps} />
  </div>
)

export default FormInput;