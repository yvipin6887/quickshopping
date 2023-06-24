import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
  
// Import pages

import AdminApp from './admin/AdminApp';
import Analystics from "./admin/modules/Dashboard/Analystics";

function App() {
  // console.log(AdminApp);
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

        <Route path='/admin' key="admin" element={null}>
          {AdminApp.map(main => (
            
            <Route path={main.parentRoutes} key={main.name} element={ null}>
              {main.children.map(module => (
                <Route {...module.routeProps} key={module.name} /> 
              ))}
            </Route>
            
          ))}
        </Route>
        
    </Routes>
    </>
  );
}

export default App;
