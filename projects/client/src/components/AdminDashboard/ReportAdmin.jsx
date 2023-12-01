import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {users} from "./data";
import axiosInstance from "../../config/api";

export default function ReportAdmin() {
  // const [page, setPage] = React.useState(1);
  // const [users,setUsers] = useState([])

  // const getHistories = async() => {
  //   try {
  //     const res = await axiosInstance.get(`/admin/histories`)
  //     // console.log(res.data.result)
  //     setUsers(res.data.result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getHistories()
  // },[])

  // const rowsPerPage = 10;

  // const pages = Math.ceil(users.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return users.slice(start, end);
  // }, [page, users]);

  return (
    <div className="p-3 pt-28">
      <div className="pl-5 pb-5">
        REPORT SALES
      </div>

    {/* <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
            />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      >
      <TableHeader>
        <TableColumn key="id">ID</TableColumn>
        <TableColumn key="status">STATUS</TableColumn>
        <TableColumn key="quantity">QUANTITY</TableColumn>
        <TableColumn key="products_id">PRODUCTS</TableColumn>
        <TableColumn key="warehouses_id">WAREHOUSE</TableColumn>
        <TableColumn key="reference">REFERENCE</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table> */}
        </div>
  );
}
