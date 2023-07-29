import React, { useState, useEffect } from 'react';
import { MainLayout } from '../../../../components/MainLayout';
import { LayoutProvider } from '../../../../components/LayoutProvider';
import { MainLayoutAction } from '../../../../components/MainLayoutAction';
import { DataGridProvider } from '../../../../components/Context/DataGridProvider';
import { TreeView } from '../../../../components/treeview/TreeView';
import CreateCategory from './CreateCategory';
import ActionLayout from '../../../../components/ActionLayout';


function CategoryLayout() {
  // const { isOpenAction, setIsOpenAction } = useState(false);
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

      const treeData = [
        {
          key: "0",
          label: "Documents",
          children: [
            {
              key: "0-0",
              label: "Document 1-1",
              children: [
                {
                  key: "0-1-1",
                  label: "Document-0-1.doc",
                },
                {
                  key: "0-1-2",
                  label: "Document-0-2.doc",
                },
              ],
            },
          ],
        },
        {
          key: "1",
          label: "Desktop",
          children: [
            {
              key: "1-0",
              label: "document1.doc",
            },
            {
              key: "0-0",
              label: "documennt-2.doc",
            },
          ],
        },
        {
          key: "2",
          label: "Downloads",
          children: [],
        },
      ];
    
  return (
    <>
      <MainLayout>
        <LayoutProvider>
          <TreeView treeData={treeData}/>
        </LayoutProvider>
        {/* <MainLayoutAction ModalBody={CreateCategory} modalTitle="Attribute create"/>
        <DataGridProvider dataGrid={dataGrid}/>           */}
      </MainLayout>
    </>
  );
}

export default CategoryLayout;