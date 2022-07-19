import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import Header from './components/common/Header';
import Home from './pages/Home';
import Bank from './pages/Bank';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
