import React, { useState } from 'react';
import { MainLayout } from '../../../../components/MainLayout';
import StoreEditForm from './StoreEditForm';


function StoreEditLayout() {
 
  return (
    <MainLayout>
      <StoreEditForm />
    </MainLayout>
  );
}

export default StoreEditLayout;