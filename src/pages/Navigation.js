import React, {useState} from 'react';

import Navbar from '../components/Navbar/Navbar.js';
import Sidebar from '../components/Navbar/Sidebar';

function Navigation() {
    
 const [showSidebar, setShowSidebar] = useState(false)

 console.log(showSidebar)

    return (
        <>
          {showSidebar && <Sidebar
                            showSidebar={showSidebar}
                            setShowSidebar={setShowSidebar}/>}


          <Navbar 
           showSidebar={showSidebar}
           setShowSidebar={setShowSidebar}
           />
        </>
    )
};


export default Navigation;
