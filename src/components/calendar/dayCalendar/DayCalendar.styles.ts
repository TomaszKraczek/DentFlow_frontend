import styled from 'styled-components';

export const DayBody = styled.div<{isOpen:boolean}>`
  float: left;
  width: ${props => props.isOpen ? '85%' : '100%'};
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;

export const VisitBody = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(2,1fr);
`
export const VisitOptions = styled.div`
  grid-column: 2;
  display:grid;
  grid-template-rows:repeat(3,1fr);
`
export const Descriptions = styled.div`
    grid-row: 1;
    display:flex;
    justify-content: space-between;
    
`
export const Description = styled.textarea`
    resize:none;    
    width:90%;
    margin-right:5%;
    background-color: white;
    margin-left:5%;
    height:80%;
    margin-bottom:5%;
    border:none;
      :focus {
        outline: none; 
      }
`
export const DescriptionTitle = styled.h3`
    font-size: 1.1rem;
    color: rgb(23,132,179)
`

export const DescriptionRow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:45%;
    border:1px solid rgb(23,132,179);
    border-radius:1rem;
    margin-right:3%;
`

export const ToothDescriptionSaveButton = styled.button`
  cursor: pointer;
    height:40px;
    width:50%;
    margin-left:26%;
    margin-bottom:3%;
    background-color:#FFBE5C;
    border:0;
    border-radius:10px;
    color:white;
  &:disabled{
    background-color: gray;
    filter: brightness(100%);
  }
`


export const TeethOptions = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-row:span 2;
   
`

export const ToothDescription = styled.div`
    display:flex;
    flex-direction:column;
    grid-column:1;
  //margin-right: 25px;
`

export const ToothStatus = styled.div`
    grid-column:2;
    display:flex;
    flex-direction:column;
    width:90%;
    margin-top:5%;
    margin-left:7%;
`

export const ToothNumberText = styled.h2`
  margin-left:40%;
`
export const ToothText = styled.h2`
    color:rgb(23,132,179);
`

export const StatusLabel = styled.label`
    background-color:white;
    width:90%;
    margin-left:2.5%;
    margin-top:3px;
    border-radius:10px;
    color: rgb(23,132,179);
`

export const StatusCheckbox = styled.input`
`

export const ToothDescriptionTextField = styled.textarea`
    resize: none;
    width: 26.7rem;
    margin-bottom:10px;
    height:10%;
    border:2px ridge rgb(23,132,179);
    border-radius:10px;
    text-align:center;
`

export const ToothDescriptionHistory = styled.div`
    border: 2px solid rgb(23,132,179);
    width: 27rem;
    border-radius:10px;
    text-align: center;
    
`

export const PatientInformation = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1rem;
  width: 45rem;
`

export const PatientInfoText = styled.div`
  
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      border: 1px solid rgb(23, 132, 179);
      border-radius: 15px;
      margin-right: 2rem;
      padding: 1%;
`
export const TextAreaButton = styled.button`
  float: right;
  cursor:pointer;
  color: white;
  background-color:#FFBE5C;
  border-radius:5px;
  height: 2rem;
  width: 4rem;
  border: 0;
  text-align: center;

  &:hover {
    filter: brightness(90%);
  }
`