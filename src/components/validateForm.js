const validateForm = values => {
   
   let errors = {};
   // eslint-disable-next-line no-useless-escape
   const regexEmail = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');


   if(!values.name.trim()) errors.name = 'Enter name';

   if(!values.email) {
      errors.email = 'Enter email';
   }
   else if(!regexEmail.test(values.email)) {
      errors.email = 'Email is invalid';
   }

   if(values.kilometres <= 0) {
      errors.kilometres = 'Kilometres must be greater than 0';
   }


   return errors;
}

export default validateForm;