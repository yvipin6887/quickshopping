import React, {createContext, useContext} from "react";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import DataTable from 'react-data-table-component';

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

export const DataGridProvider = (tableData) => {

  const onRowClicked = (event) => {
    console.log(event)
  }

    return (
        <DataGridContex.Provider value={tableData.paginationData}>
            <DataTable 
            pagination
            columns={tableData.columns} 
            data={tableData.rows} 
            selectableRows={true}
            highlightOnHover={true}
            responsive={true}
            noDataComponent={<><h1>No Record</h1></>}
            onRowClicked={onRowClicked}
            customStyles={customStyles} 
             />
        </DataGridContex.Provider>
    );
}