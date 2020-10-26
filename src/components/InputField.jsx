import React from 'react';

const InputField = ({name, type = 'text', label = 'InputField', onChange, value, isRequired = false, autoComplete = 'off', error = false}) => {
   const placeholder = ' ';

   const classInput = `t-input ${error ? 't-input-error' : '' }`;
   const classLabel = `t-label ${error ? 't-label-error' : '' }`;

   /**{isRequired ? ' (required)' : ''}*/
   return (
      <div className="t-field">
         <input
          id = {name}
          name = {name}
          value = {value}
          className = {classInput}
          type = {type}
          placeholder = {placeholder}
          autoComplete = {autoComplete}
          onChange = {onChange}
         />
         <div className = {classLabel}>{label}</div>
     </div>
   )
}

export default InputField;