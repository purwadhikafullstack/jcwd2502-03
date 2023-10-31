import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../config/api";
import { FaRegEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import Input from "../Input/Input";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState(null);
  const getWarehouse = async () => {
    try {
      const data = await axiosInstance.get(`/warehouse`);
      setWarehouses(data.data.data);
    } catch (error) {
      toast.error("error");
    }
  };
  const handleEdit = async () => {
    try {
        
    } catch (error) {
        toast.error("error")
    }
  }
  console.log(warehouses);
  useEffect(() => {
    getWarehouse();
  }, []);
  // const [currentPage, setCurrentPage] = useState(0);
  // const perPage = 2; // Jumlah item per halaman

  // const handlePageClick = (selectedPage) => {
  //   setCurrentPage(selectedPage.selected);
  // }

  // const offset = currentPage * perPage;
  // const currentPageData = warehouses?.slice(offset, offset + perPage);
  return (
    <div className="container mx-auto px-2 rounded-sm">
        <div className="">
            <span>Create Warehouse</span>

            <Input inputCSS={""} placeholder={"Name Warehouse"} />
            
        </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Warehouse</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Action</th>
            {/* ...Tambahkan header lain jika diperlukan */}
          </tr>
        </thead>
        <tbody>
          {warehouses?.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 cursor-pointer hover:underline">{item.name}</td>
              <td className="border p-2">{item.city}</td>
              <td className="border p-2 flex justify-center gap-2">
                <button onClick={handleEdit} className="bg-sky-600 cursor-pointer font-semibold p-2 rounded-md"  >
                  Edit
                </button>
                <button className="bg-red-400 font-semibold cursor-pointer p-2 rounded-md">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  breakLabel={"..."}
  breakClassName={"break-me"}
  pageCount={Math.ceil(warehouses?.length / perPage)}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageClick}
  containerClassName={"flex gap-1 justify-center my-4"}
  subContainerClassName={"flex items-center space-x-2"}
  activeClassName={"bg-blue-500 text-white border border-blue-500 px-4 py-2 rounded"}
  pageClassName={"border border-gray-300 px-4 py-2 rounded"}
  previousClassName={"border border-gray-300 px-4 py-2 rounded"}
  nextClassName={"border border-gray-300 px-4 py-2 rounded"}
  disabledClassName={"opacity-50 cursor-not-allowed"}
/> */}
    </div>
  );
};

export default WarehouseList;
