import React, { useState } from 'react';

import Sidebar from '../../../partials/Sidebar';
import Header from '../../../partials/Header';

import Banner from '../../../partials/Banner';

// import CustomDataGrid from '../../../components/DataGrid';
import AddStore from './components/AddStore';

function Store() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'Name' },
    { key: 'age', name: 'Age' },
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 },
  ];

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
                {/* <CustomDataGrid  /> */}
                <AddStore />
              </div>
          </main>
        <Banner />

      </div>
    </div>
  );
}

export default {
    routeProps: {
        path: '/admin/setting/store',
        exact: true,
        element: <Store />,
        subname: 'Store'
    },
    name: 'Setting',    
};