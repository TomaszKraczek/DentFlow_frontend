import styled from 'styled-components';
export const RecepcionistVisitInformationContainet = styled.div`
  grid-column: 4;
  display:grid;
`
export const Informations = styled.div`
    display:flex;
    border: 2px solid rgb(23 132 179);
    border-radius: 15px;
    margin: 5%;
    text-align: center;
    flex-direction: column;
    align-items: center;
    font-size: x-large;
    font-family: sans-serif;
    
`

export const DescriptionRowRecepcionist = styled.div`
        display:flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: x-large;
        margin:5%; 
        border:2px solid rgb(23 132 179);
        border-radius: 15px;
`

export const Description = styled.textarea`
    resize:none;    
    width:90%;
    background-color: white;
    height:80%;
    font-family: sans-serif;
    font-size: x-large;
    text-align: center;
    margin-bottom:3%;
    border:none;
    :focus{
        outline:none;
    }
`
export const LabelInfo = styled.h3`
   color:rgb(23 132 179);
`

export const ButtonContainer = styled.div`
    display: flex;
`

export const DeleteButton = styled.button`
    background-color: rgb(205 63 14);
  color: white;
  height: 3rem;
  width: 13rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  display: block;
  transition: 2s;
     &:hover {
       filter: brightness(85%);
     }
    &:disabled{
      background-color: gray;
      filter: brightness(100%);
    }
  
  @media(max-width: 1400px){
    height: 3rem;
    width: 13rem;
    font-size: 1.5rem;
    transition: 2s;
    
  @media(max-width: 950px){
    height: 2.5rem;
    width: 10rem;
    font-size: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: block;
    transition: 2s;
  }
`
