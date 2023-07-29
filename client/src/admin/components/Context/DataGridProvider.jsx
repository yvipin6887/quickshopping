import React, {useState, createContext, useContext, useEffect} from "react";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import DataTable from 'react-data-table-component';
import Pagination from "../Pagination";
import { LayoutProvider } from "../LayoutProvider";

const DataGridContex = createContext({limit:10, offSet:0});
const MyContext = createContext(null);

// const GridRowRenderer = (key,props) => {
//     return (
//       <MyContext.Provider key={key} value={123}>
//         <Row {...props} />
//       </MyContext.Provider>
//     );
//   }

const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          fontSize: '14px',
          fontWeight: '500px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
};

export const DataGridProvider = ({dataGrid}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataGridList, setDataGridList] = useState({rows: [], columns: dataGrid.columns,pageSize: dataGrid.limit, totalItems: 18});

    const rows = [
         [
            { id: 1, code: 'sku', label: 'SKU', type: 'identifier' },
            { id: 2, code: 'name', label: 'Name', type: 'text' },
            { id: 3, code: 'price', label: 'Price', type: 'price' },
            { id: 4, code: 'title', label: 'Title', type: 'text' },
            { id: 5, code: 'qty', label: 'Qty', type: 'number' },
         ],
         [
            { id: 6, code: 'price', label: 'Price', type: 'price' },
            { id: 7, code: 'sku', label: 'SKU', type: 'identifier' },
            { id: 8, code: 'name', label: 'Name', type: 'text' },
            { id: 9, code: 'sku', label: 'SKU', type: 'identifier' },
            { id: 10, code: 'name', label: 'Name', type: 'text' },
         ],
         [
            { id: 11, code: 'price', label: 'Price', type: 'price' },
            { id: 12, code: 'sku', label: 'SKU', type: 'identifier' },
            { id: 13, code: 'name', label: 'Name', type: 'text' },
            { id: 14, code: 'price', label: 'Price', type: 'price' },
            { id: 15, code: 'sku', label: 'SKU', type: 'identifier' },
         ],
         [
            { id: 16, code: 'address', label: 'address', type: 'text' },
            { id: 17, code: 'price', label: 'Price', type: 'price' },
         ],
      ];

    useEffect(() => {
        dataGridList.rows = rows[ 0 !== currentPage ?currentPage-1: currentPage];
        setDataGridList({...dataGridList});
    },[currentPage]);

    const onRowClicked = (event) => {
        console.log(event)
    }

    return (
        <DataGridContex.Provider value={null}>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataGridList.totalItems}
                pageSize={dataGridList.pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <LayoutProvider className={'flex h-[600px] my-5'}>
                <DataTable 
                pagination={false}
                columns={dataGridList.columns} 
                data={dataGridList.rows} 
                selectableRows={true}
                highlightOnHover={true}
                responsive={true}
                noDataComponent={<><h1>No Record</h1></>}
                onRowClicked={onRowClicked}
                customStyles={customStyles} 
                />
            </LayoutProvider>
            
        </DataGridContex.Provider>
    );
}