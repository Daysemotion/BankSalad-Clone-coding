import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Button from './components/modules/Buttons/Button';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>asddsa</h1>
      <Button color={theme.buttonViolet}>dsadas</Button>
      <Button color={theme.buttonMustard}>dsadas</Button>
      <Button color={theme.buttonGreen}>dsadas</Button>
      <Button color={theme.buttonWhite}>dsadas</Button>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </ThemeProvider>
  );
};

export default App;
