import { useState } from 'react';

const useForm = validate => { 
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      kilometres: 0
   });

   const [errors, setErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = event => {
      const { name, value } = event.target;
      setFormData({
         ...formData,
         [name]: value
      });
   }

   const handleSubmit = event => {
      event.preventDefault();
      setIsSubmit(true);

      setErrors(validate(formData));
   }

   return { handleChange, formData, handleSubmit, errors, isSubmit };
}

export default useForm;