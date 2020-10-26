import React from 'react';
import Form from './Form';
import walk from '../walk.svg';

const Menu = () => {
   return (
      <div className='main'>
         <div className='container'>
            <div className='content-img'>
               <h1 className='title title-top'>How much do you walk a week?</h1>
               <img src={walk} alt='walk'/>
            </div>
            <div className='content-form'>
               <Form />
            </div>
         </div>
      </div>
   )
}

export default Menu;