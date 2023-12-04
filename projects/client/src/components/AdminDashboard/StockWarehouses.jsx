import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import axiosInstance from "../../config/api";
import ModalEditStock from "./ComponentAdmin/ModalEditStock";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  // { name: "NO", uid: "no" },
  { name: "PRODUCT", uid: "product_name" },
  { name: "TOTAL_STOCK", uid: "stock" },
  { name: "PRICE", uid: "product_price" },
  { name: "ACTIONS", uid: "actions" },
];

export default function StockWarehouses() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [warehouse, setWarehouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    warehouses_id: 58,
    products_id: null,
    search: null,
  });
  // console.log("lala");
  const getData = async () => {
    try {
      const res = await axiosInstance.get(
        `/stock?warehouses_id=${filter.warehouses_id}`
      );
      // console.log(res.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);
  // console.log(currentData);
  if (currentData.length === 0) {
    <div>wait</div>;
  }
  const nextPage = () => {
    if (endIndex < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // console.log(warehouse);
  const getWarehouse = async () => {
    try {
      const data = await axiosInstance.get(`/warehouse`);
      setWarehouses(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getWarehouse();
    if (filter.warehouses_id === null) {
      let newFilter = { ...filter };
      newFilter.warehouses_id = Number(warehouse[0].id);
      setFilter(newFilter);
    }
  }, []);

  // console.log(data);
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "product_name":
        return (
          <User
            size="md"
            avatarProps={{
              radius: "md",
              src: `${
                process.env.REACT_APP_IMAGE_SERVER_URL_IMAGE
              }${user.image.substring(6)}`,
            }}
            description={user.category}
            name={user.product_name}
          >
            {user.category}
          </User>
        );
      case "stock":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.stock}</p>
          </div>
        );
      case "product_price":
        return (
          <h1 className="capitalize" size="sm" variant="flat">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(user.product_price)}
          </h1>
        );
      case "actions":
        const onEdit = async (id, product_id) => {
          try {
            console.log(id);
            const hasil = await axiosInstance.get(`/stock?warehouses_id=${id}&products_id=${product_id}`);
            localStorage.setItem("stock", JSON.stringify(hasil.data));
            // console.log(hasil.data);
            onOpen();
          } catch (error) {
            console.log(error);
          }
        };
        return (
          <div className="relative flex items-center gap-2">
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip> */}
            <Tooltip content="Edit user">
              <span
                // onPress={onOpen}
                onClick={() => onEdit(user.warehouse.id, user.product.id)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <FaRegEdit />
              </span>
            </Tooltip>
            {/* <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-3 my-3 underline">
        <span>Manage Stock</span>
        {/* <Button >Open Modal</Button> */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <ModalEditStock onPress={onClose} />
            )}
          </ModalContent>
        </Modal>
      </div>

      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              // align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={currentData}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {data && data.length > itemsPerPage - 1 ? (
        <div className="mt-7 flex flex-wrap justify-center gap-3 mb-4 w-full">
          <button
            className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full "
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <BsArrowLeft className="font-extrabold " />
          </button>
          <div className="flex flex-wrap gap-2">
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-[40px] h-[40px] flex items-center justify-center border-2 rounded ${
                    currentPage === i + 1 ? "bg-primaryOrange text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <button
            className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full "
            onClick={nextPage}
            disabled={endIndex >= data.length}
          >
            <BsArrowRight className="font-extrabold " />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
