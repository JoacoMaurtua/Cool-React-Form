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

const CloseBtn = styled.span`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  cursor: pointer;
`

const FormContentLeft = styled.div`
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;
`

const FormImg = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function CoolForm() {

  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = () =>{
    setIsSubmit(true)
  }
  return (
    <>
      <FormContainer>
          <CloseBtn>x</CloseBtn>
          <FormContentLeft>
            <FormImg src="img/img-2.svg" alt="spaceship"
            className="form-img" />
          </FormContentLeft>
          {  
            (!isSubmit)?
            <FormSignup submitForm={submitForm}/>:
            <FormSuccess/>
          } 
      </FormContainer>
    </>
  )
}




