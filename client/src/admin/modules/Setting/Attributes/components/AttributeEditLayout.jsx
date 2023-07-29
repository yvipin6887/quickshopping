import React, { useState } from 'react';
 import { MainLayout } from '../../../../components/MainLayout';
import AttributeEditForm from './AttributeEditForm';


function AttributeEditLayout() {
 
  const paginationData = {};

  return (
    <MainLayout>
      <AttributeEditForm />
    </MainLayout>
  );
}

export default AttributeEditLayout;