import React from 'react';
import styled from 'styled-components';

const FormImg2 = styled.img`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const FormRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);

`

const Success = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: #fff;
`


export default function FormSuccess() {
  return (
    <FormRight>
      <Success>We have received your request!</Success>
      <FormImg2 src="img/img-3.svg" alt="succes-image"/> 
    </FormRight>
  );
}
