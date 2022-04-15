import React, { useMemo } from "react";
// import ReactTable from "react-table";  
import { useTable } from "react-table";
import { Columns } from "./Columns";
import "../styles/table.css";

const Table = () => {
  const columns = useMemo(() => Columns, []);

  const tableInstance = useTable({
    columns,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance ;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
            <h2>hai</h2>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
              prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                  {rows.cells.map((cell) => {
                      return  <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                  })

                  }
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
