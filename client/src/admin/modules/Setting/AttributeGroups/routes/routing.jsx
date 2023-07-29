import React, {useState} from 'react';

import AttributeGroupLayout from "./../components/AttributeGroupLayout";
import AttributeGroupEditLayout from './../components/AttributeGroupEditLayout';
import {Route, useLocation} from 'react-router-dom';

export default [
    <Route path='/admin/setting/attribute-group' key="admin-setting-attribute-group" element={<AttributeGroupLayout />} />,
    <Route path='/admin/setting/attribute-group/edit/:id' key="admin-setting-attribute-group-edit" element={<AttributeGroupEditLayout />} />

];