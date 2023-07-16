import React, { useState } from 'react';

import Sidebar from '../../../partials/Sidebar';
import Header from '../../../partials/Header';

import Banner from '../../../partials/Banner';
import { DataGridProvider } from '../../../components/Context/DataGridProvider';
import { LayoutProvider } from '../../../components/LayoutProvider';
import Modal from '../../../components/Modal';
import EditAttribute from './components/EditAttribute';
import CreateAttribute from './components/CreateAttribute';
import UserMenu from  '../../../components/DropdownProfile';
import ActionLayout from '../../../components/ActionLayout';


function Attributes() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpenAction, setIsOpenAction } = useState(false);


  const columns = [
    { selector: row => row.code, name: 'Code' , sortable: true},
    { selector: row => row.label, name: 'Label' , sortable: true},
    { selector: row => row.type, name: 'Type' , sortable: true},
    {
      cell: row => <ActionLayout size="small" row={row} isOpenAction={isOpenAction} setIsOpenAction={setIsOpenAction} />, 
      allowOverflow: true,
      button: true,
      width: '56px',
    },
  ];

  const actionData = ['edit', 'delete']
  

  const rows = [
    { id: 1, code: 'sku', label: 'SKU', type: 'identifier' },
    { id: 2, code: 'name', label: 'Name', type: 'text' },
    { id: 3, code: 'price', label: 'Price', type: 'price' },
  ];
  
  const paginationData = {};

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <LayoutProvider className={'h-[100px] my-5'}>
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5">
                  </div>
                  <div className="col-span-1">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={(e) => {
                          e.stopPropagation();
                          setModalOpen(true);
                        }}>
                        Create
                      </button>
                      <Modal id="attribute-create-modal"  modalOpen={modalOpen} setModalOpen={setModalOpen} title="Attribute create" modalBody={<CreateAttribute />} />
                  </div>
                </div>
                </LayoutProvider>
                <DataGridProvider columns={columns} rows={rows} paginationData={paginationData}/>
              </div>
          </main>
        <Banner />

      </div>
    </div>
  );
}

// const actionComponent = () => {

//   return (
//     <>
//       <div>Edit</div>
//       <div>Delete</div>
//     </>
//   );
// }

const LayoutBody = () => {
  return (
      <div className='flex'>
          <div>Edit</div>
          <div>Delete</div>
      </div>
  );
}

export default {
    routeProps: {
        path: 'attributes',
        exact: true,
        element: <Attributes />,
    },
    name: 'Attributes',    
};