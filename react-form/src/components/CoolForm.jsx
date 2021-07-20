import React, {useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

export default function CoolForm() {

  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = () =>{
    setIsSubmit(true)
  }
  return (
    <>
      <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img src="img/img-2.svg" alt="spaceship"
            className="form-img" />
          </div>
          {  
            (!isSubmit)?
            <FormSignup submitForm={submitForm}/>:
            <FormSuccess/>
          } 

      </div>
    </>
  )
}


