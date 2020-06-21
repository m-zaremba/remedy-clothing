import styled, { css } from 'styled-components';

const descriptionStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  ${descriptionStyles}
`;

export const Price = styled.div`
  ${descriptionStyles}
`;

export const Quantity = styled.div`
  ${descriptionStyles}
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`;
