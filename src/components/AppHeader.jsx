import React from 'react';
import { Typography } from 'antd';
import footerImage from '../assets/footer.jpg';

function AppHeader() {
  return (
    <div className='AppHeader' style={{ backgroundColor: '#E6F7FF', display: 'flex', alignItems: 'center', padding: '12px' }}>
      <div style={{ marginRight: '16px' }}>
        <img width={40} src={footerImage} alt='Footer' />
      </div>
      <div style={{ flex: 1 }}>
        <Typography.Title level={3} style={{ marginBottom: 0, textAlign: 'center' }}>SISTEMA DE GESTIÓN DE ARCHIVÍSTICA</Typography.Title>
      </div>
    </div>
  );
}

export default AppHeader;
