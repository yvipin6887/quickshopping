import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
  
// Import pages

import AdminApp from './admin/AdminApp';
import Analystics from "./admin/modules/Dashboard/Analystics/components/Analystics";

function App() {
  // console.log(AdminApp[1].children[1]);
  const location = useLocation();
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
}, [location.pathname]);
 
 
  return (
    <>
      <Routes>
        {/* <Route exact path='/' element={<Dashboard />}/> */}

        <Route path='/admin' key="admin" element={<Analystics />}>
          
        </Route>
        {AdminApp[0].children[0].router}
        {AdminApp[1].children[0].router}
        {AdminApp[2].children[0].router}
        {AdminApp[2].children[1].router}
        {AdminApp[2].children[2].router}
        {/* {AdminApp.map(main => {
            
            {main.children.map(module => {
              console.log(module.router);
              {module.router}
            })}
          
        })} */}
        
    </Routes>
    </>
  );
}

export default App;
