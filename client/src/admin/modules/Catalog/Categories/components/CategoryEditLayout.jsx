import React, { useState } from 'react';
 import { MainLayout } from '../../../../components/MainLayout';
import CategoryEditForm from './CategoryEditForm';


function CategoryEditLayout() {
 
  const paginationData = {};

  return (
    <MainLayout>
      <CategoryEditForm />
    </MainLayout>
  );
}

export default CategoryEditLayout;