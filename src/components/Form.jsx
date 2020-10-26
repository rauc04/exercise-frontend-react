import React from 'react';
import InputField from './InputField';
import Button from './Button';
import useForm from './useForm';
import validateForm from './validateForm';

const Form = () => {
   const {
      handleChange,
      formData,
      handleSubmit,
      errors,
      isSubmit 
   } = useForm(validateForm);
   
   const containsErrors = () => {
      return (Object.keys(errors).length === 0 && isSubmit) ? true : false;
   }

   return (
      !containsErrors() 
      ? 
         <form className='form__' onSubmit={handleSubmit}>
            <h1 className='title'>Enter your data</h1>
            <InputField label='Name' name='name' value={formData.name} error={ errors.name } onChange={handleChange} isRequired/>
            { errors.name && <p className='message-error'>{errors.name}</p>}
            <InputField label='Email' name='email' value={formData.email} error={ errors.email } type='email' onChange={handleChange} isRequired/>
            { errors.email && <p className='message-error'>{errors.email}</p>}
            <InputField label='Kilometres' name='kilometres' value={formData.kilometres} error={ errors.kilometres } type='number' onChange={handleChange} isRequired/>
            { errors.kilometres && <p className='message-error'>{errors.kilometres}</p>}
            <Button type="submit" label='Save'/>
         </form>
      :
         <div className='form__'>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong><i className='icon-km'></i> Kilometres:</strong> {formData.kilometres}</p>
            <h1 className='title'>{ formData.kilometres > 4  ? 'Congratulations': 'You must walk more' }</h1>
            <h4 className='title'>Thank's</h4>
         </div>
   )
}

export default Form;