import React, { useState } from 'react';
 import { MainLayout } from '../../../../components/MainLayout';
import AttributeGroupEditForm from './AttributeGroupEditForm';


function AttributeGroupEditLayout() {
 
  const paginationData = {};

  return (
    <MainLayout>
      <AttributeGroupEditForm />
    </MainLayout>
  );
}

export default AttributeGroupEditLayout;