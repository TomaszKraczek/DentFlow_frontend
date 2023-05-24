import styled from 'styled-components';

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 950px) {
    height: 200vh;
  }
`;

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  flex-direction: column;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  transition: 2s;

  @media(max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 2s;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Up = styled.div`
  flex: 1;
`;
export const Down = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  transition: 2s;
  @media only screen and (max-width: 950px){
    
    transition: 2s;
    align-items: center;
  }

  @media only screen and (max-width: 750px){
    transition: 2s;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.h1`
  padding-top: 50px;
  font-size: 54px;
  color: #1784B3;
  text-align: center;


  @media only screen and (max-width: 950px) {
    text-align: center;
  }
`;

export const Desc = styled.p`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 733px;
  height: 100px;
  font-size: 20px;
  color: #737373;
  @media only screen and (max-width: 950px) {
    padding: 20px;
    width: 333px;
    text-align: center;
    margin-bottom: 50px;
  }
`;
export const Cart = styled.div`
  width: 328px;
  height: 432px;
  margin-right: 50px;
  background: #1784B3;
  border-radius: 10px;
  margin-bottom: 50px;
  @media only screen and (max-width: 950px) {
    width: 283px;
    height: 380px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const DownCard = styled.div`
  width: 326px;
  height: 300px;
  margin-bottom: 0;
  background: #FFFFFF;
  border: 1px solid #1784B3;
  border-radius: 11px;
  align-items: center;
  @media only screen and (max-width: 950px) {
    width: 280px;
    height: 380px;
    margin-right: auto;
    margin-left: auto;
  }

  
`;

export const UpCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DescriptionCard = styled.p`
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 18px;
`;

export const IconCard = styled.div`
  width: 72px;
  height: 72px;
  margin: 38px 25px 38px;
  background: #FFFFFF;
  border-radius: 200px;
  text-align: center;
`;

export const DownCardDescription = styled.h6`
  width: 256px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  /* h6 */
  
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  /* or 171% */

  text-align: center;
  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;

`;
