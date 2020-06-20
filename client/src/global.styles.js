import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  background-clip: content-box;
  border: 4px solid transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 10px;
  color: rgb(109, 109, 109);
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
`;
