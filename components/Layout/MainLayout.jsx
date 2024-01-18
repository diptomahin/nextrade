import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

const MainLayout = ({ children }) => {
     return (
          <div className=''>
          <Navbar />
            {children}
            <Footer />
          </div>
     );
};

export default MainLayout;