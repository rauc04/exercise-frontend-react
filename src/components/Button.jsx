import React from 'react';

const Button = ({label, type}) => (
   <button
    type={type}
    className='btn-primary'
    >
      {label} 
   </button>
)

export default Button;