import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu/SideMenu';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Row className='SideMenuAndPageContent'>
        <Col xs={24} sm={24} md={6} lg={6} xl={4}>
          <SideMenu />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={20}>
          <PageContent />
        </Col>
      </Row>
      <AppFooter />
    </div>
  );
}

reportWebVitals();

export default App;
