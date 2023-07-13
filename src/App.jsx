import React from 'react';
import { Space } from 'antd';
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
      <Space className='SideMenuAndPageContent'>
        <SideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  );
}

reportWebVitals();

export default App;
