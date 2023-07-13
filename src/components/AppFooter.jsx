import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function AppFooter() {
  return (
    <div className='AppFooter' style={{ marginTop: 'auto', backgroundColor: '#EAF2F8', padding: '16px' }}>
      <div className='flex space-x-4'>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ margin: '0 5px' }}
        >
          <FaTwitter className='cursor-pointer' size={20} color='black' />
        </a>
        <a
          href=''
          target='_blank'
          rel='noopener noreferrer'
          style={{ margin: '0 5px' }}
        >
          <FaGithub className='cursor-pointer' size={20} color='black' />
        </a>

      </div>
    </div>
  );
}

export default AppFooter;
