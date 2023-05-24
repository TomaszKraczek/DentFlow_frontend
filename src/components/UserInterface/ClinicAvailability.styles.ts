import styled from "styled-components";

export const HeaderLabel = styled.h1`
  text-align: center;
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Time = styled.div`
  //cursor: pointer;
  border: 2px solid #1784b3;
  width: 100px;
  font-size: 1.5rem;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  
  //:hover{
  //  opacity: 80%;
  //  background-color: lightgray;
  //}
`;
export const Div = styled.div<{isOpen:boolean}>`
  width: ${props => props.isOpen ? '85%' : '100%'};
  float: right;
`;
export const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: #fff;
  width: 350px;
  text-align: center;
  padding: 20px;
  height: 450px;
  border: 1px solid #1784b3;
  border-radius: 1rem;
  @media(max-width: 1950px){
    width: 20rem;
  }
  @media(max-width: 1200px){
    width: 15rem;
  }
`;