// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './modules/main/components/Home';
import UserDashboard from './modules/user/components/UserDashboard';
import CompanyDashboard from './modules/company/components/CompanyDashboard';
import styled, { createGlobalStyle } from 'styled-components';

const Header = styled.header`
  height: 100px;
  background-color: red;
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>Hello world</Header>
      <main>
        <Route path="/" component={Home} />
        <Route path="/user" component={UserDashboard} />
        <Route path="/company" component={CompanyDashboard} />
      </main>
    </BrowserRouter>
  );
}
