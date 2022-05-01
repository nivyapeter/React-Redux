import React from "react";
import { useTable, usePagination,useSortBy} from "react-table";



const DataTable = ({ columns, data,title }) => {
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    
    useSortBy,
    usePagination,
  );

  const { pageIndex, pageSize } = state;
  return (
    <div className="flex flex-col w-full ">
      <div className="-my-2 pb-2 pt-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
        <h2 className="text-center font-extrabold text-xl -mt-2 pb-4 text-white">{title}</h2>
          <table
            className="divide-y divide-gray-200 bg-gray-500 md:w-full"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                   <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                   {column.render('Header')}
                   {/* Add a sort direction indicator */}
                 </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
              {...getTableBodyProps()}
            >
              
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="md:px-6 py-2 px-4 text-center whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex md:justify-end md:gap-12 gap-2 items-center pt-4">
        <span>
          page{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {""}
        </span>
        <select className="h-[4vh]"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5,10,25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </div>
  );
};
export default DataTable;