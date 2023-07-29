import React, {useState} from 'react';

import CategoryLayout from "./../components/CategoryLayout";
import CategoryEditLayout from './../components/CategoryEditLayout';
import {Route, useLocation} from 'react-router-dom';

export default [
    <Route path='/admin/catalog/categories' key="admin-catalog-categories" element={<CategoryLayout />} />,
    <Route path='/admin/catalog/category/edit/:id' key="admin-catalog-categorie-edit" element={<CategoryEditLayout />} />

];