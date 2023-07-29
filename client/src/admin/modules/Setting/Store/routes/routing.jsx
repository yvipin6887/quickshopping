import React, {useState} from 'react';
import {Route, useLocation} from 'react-router-dom';
import Store from "./../components/Store";
import StoreEditLayout from '../components/StoreEditLayout';


export default [
    <Route path='/admin/setting/store' key="admin-store" element={<Store />}></Route>,
    <Route path='/admin/setting/store/edit/:id' key="admin-store-edit" element={<StoreEditLayout />}></Route>,
];

// export default from './Dashboard';
// export * from './Setting';