import React, {useState} from 'react';

import AttributeLayout from "./../components/AttributeLayout";
import AttributeEditLayout from './../components/AttributeEditLayout';
import {Route, useLocation} from 'react-router-dom';

export default [
    <Route path='/admin/setting/attributes' key="admin-setting-attributes" element={<AttributeLayout />} />,
    <Route path='/admin/setting/attributes/edit/:id' key="admin-setting-attributes-edit" element={<AttributeEditLayout />} />

];