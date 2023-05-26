import styled from "styled-components";

export const PatientData = styled.div`
  display: flex;
  flex-direction: column;
`

export const PatientInformations = styled.div`
  align-self: center;
  margin-top: 3rem;
  border: 2px solid rgb(23,132,179);
  width: 27rem;
  border-radius:10px;
  text-align: left;
  padding-bottom: 2rem;
`
export const PatientInformation = styled.strong`
  margin-left: 3rem;
`
export const PatientCard = styled.div`
  align-self: center;
  margin-top: 3rem;
  border: 2px solid rgb(23,132,179);
  width: 27rem;
  border-radius:10px;
  text-align: center;
`
export const Container = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 80%
`
export const PatientDetailsButton = styled.button`
 background-color: #FFBE5C;
  color: white;
  height: 1.5rem;
  width: 4rem;
  font-size: 1rem;

  cursor: pointer;
  border: none;
  border-radius: 10px;
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: #fff;
  width: fit-content;
  padding: 20px;
  border: 1px solid #1784b3;
  border-radius: 1rem;

`;