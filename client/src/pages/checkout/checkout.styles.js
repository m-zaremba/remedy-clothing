import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 96%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;

    /* @media screen and (max-width: 800px) {
      width: unset;
      flex-grow: 1;
    } */
  }

  @media screen and (max-width: 800px) {
    width: unset;
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    margin-right: auto;
    margin-bottom: 30px;
  }
`;

export const WarningInfo = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
  color: red;
`;
