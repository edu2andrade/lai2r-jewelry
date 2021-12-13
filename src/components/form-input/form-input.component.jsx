import React from 'react';

const FormInput = ({ handleChange, ...otherProps }) => (
  <div>
    <input
      className="text-darkGray bg-transparent border-b border-darkGray text-sm p-2 my-2 w-64 focus:outline-none"
      onChange={handleChange} {...otherProps} />
  </div>
)

export default FormInput;