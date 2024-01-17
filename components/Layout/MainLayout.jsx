import React from 'react';
import Footer from '../common/Footer/Footer';;
import Navbar from '../common/Navbar/Navbar';

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