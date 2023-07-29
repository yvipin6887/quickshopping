import React, { useState } from 'react';
import { MainLayout } from '../../../../components/MainLayout';
import { MainLayoutAction } from '../../../../components/MainLayoutAction';
import { DataGridProvider } from '../../../../components/Context/DataGridProvider';
import CreateStore from './CreateStore';
import ActionLayout from '../../../../components/ActionLayout';

function Store() {

  const actionData = ['edit', 'delete']
  const dataGrid = {
    columns: [
      { selector: row => row.code, name: 'Code' , sortable: true},
      { selector: row => row.label, name: 'Label' , sortable: true},
      { selector: row => row.type, name: 'Type' , sortable: true},
      {
        cell: row => <ActionLayout size="small" row={row} actionData={actionData} />, 
        allowOverflow: true,
        button: true,
        width: '56px',
      },
    ],
    dataSource: '',
    limit: 5
  };

  return (
    <MainLayout>
        <MainLayoutAction ModalBody={CreateStore} modalTitle="Store create" />
        <DataGridProvider dataGrid={dataGrid}/>          
    </MainLayout>
  );
}

export default Store;