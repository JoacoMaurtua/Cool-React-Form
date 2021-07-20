import React, {useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;

` 

export default function CoolForm() {

  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = () =>{
    setIsSubmit(true)
  }
  return (
    <>
      <FormContainer>
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
      </FormContainer>
    </>
  )
}




