import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`;

export const CollectionItemButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    min-width: unset;
    padding: 0 10px;
    opacity: 0.9;
  }
`;

export const CollectionItemFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const FooterItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const FooterItemPrice = styled.span`
  width: 10%;
`;
