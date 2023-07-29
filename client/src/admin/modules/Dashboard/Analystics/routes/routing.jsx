import React, {useState} from 'react';

import Analystics from "./../components/Analystics";
import {Route, useLocation} from 'react-router-dom';

export default [
    <Route path='/admin/dashboard' key="admin-dashboard" element={<Analystics />}></Route>,
    <Route path='/admin/dashboard/analystics' key="admin-dashboard-analystics" element={<Analystics />}></Route>
];

// export default from './Dashboard';
// export * from './Setting';