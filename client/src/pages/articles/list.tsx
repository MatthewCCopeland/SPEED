/* eslint-disable react/jsx-key */
import React from "react";
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from "@pankod/refine-react-table";

import { useDelete, useNavigation, useOne } from "@pankod/refine-core";

import { IArticle } from "interfaces";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  CreateIcon,
  DeleteIcon,
  EditIcon,
  ShowIcon
} from "icons";

export const ArticleList: React.FC = () => {
  const { edit, create, show } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: "id",
        Header: "ID",
        accessor: "id"
      },
      {
        id: "title",
        Header: "Title",
        accessor: "title",
        filter: "contains"
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize, filters }
  } = useTable<IArticle>({ columns }, useFilters, useSortBy, usePagination);

  return (
    <div className="container mx-auto pb-4">
      <div className="mb-3 mt-1 flex items-center justify-between">
        <div>
          <label className="mr-1" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            type="text"
            className="rounded border border-gray-200 p-1 text-gray-700"
            placeholder="Filter by title"
            value={filters.find((filter: { id: string; }) => filter.id === "title")?.value}
            onChange={(event) => setFilter("title", event.target.value)}
          />
        </div>
        <button
          className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
          onClick={() => create("articles")}
        >
          {CreateIcon}
          <span>Create Article</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className="min-w-full table-fixed divide-y divide-gray-200 border"
          {...getTableProps()}
        >
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: { getHeaderProps: (arg0: any) => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>; getSortByToggleProps: () => any; render: (arg0: string) => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; isSorted: any; isSortedDesc: any; }) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 "
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="divide-y divide-gray-200 bg-white"
          >
            {page.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="transition hover:bg-gray-100"
                >
                  {row.cells.map((cell: { getCellProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>; render: (arg0: string) => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="whitespace-nowrap py-2 px-6 text-sm font-medium text-gray-900"
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
      <div className="mt-2 flex items-center justify-end gap-4">
        <div className="flex gap-1">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
          >
            {ChevronsLeftIcon}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
          >
            {ChevronLeftIcon}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
          >
            {ChevronRightIcon}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
          >
            {ChevronsRightIcon}
          </button>
        </div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-12 rounded border border-gray-200 p-1 text-gray-700"
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="rounded border border-gray-200 p-1 text-gray-700"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
