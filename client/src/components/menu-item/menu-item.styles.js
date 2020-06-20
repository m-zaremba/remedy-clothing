import styled, { css } from 'styled-components';

const largeStyle = css`
  height: 350px;
`;

const regularStyle = css`
  height: 240px;
`;

const getMenuItemButtonStyles = (props) => {
  return props.size ? largeStyle : regularStyle;
};

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const MenuItemContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  ${getMenuItemButtonStyles}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${MenuItemContentContainer} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 240px;
  }
`;

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  margin: 0;
  text-transform: uppercase;
`;

export const MenuItemSubtitle = styled.p`
  font-weight: lighter;
  font-size: 16px;
  margin: 0;
`;
