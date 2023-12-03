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
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import axiosInstance from "../../config/api";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalAddProduct from "./ComponentAdmin/ModalAddProduct";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
const columns = [
  { name: "PRODUCT", uid: "product_name" },
  { name: "STOCK", uid: "stock" },
  { name: "PRICE", uid: "product_price" },
  { name: "WEIGHT", uid: "product_weight" },
  { name: "ACTIONS", uid: "actions" },
];

export default function ProductsAdmin() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  const [product, setProduct] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getProduct = async () => {
    try {
      const res = await axiosInstance.get("/product");
      // console.log(res.data);
      setProduct(res.data);
      
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (id) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      const result = await swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "you want to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        const response = await axiosInstance.delete(`/product/${id}`);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: response.data.message,
          icon: "success",
        });
        getProduct()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Delete has been cancelled",
          icon: "error",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    // {`http://localhost:8000${user.products_images[0].substring(6)}`}
    switch (columnKey) {
      case "product_name":
        // user.products_images[0]
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: `http://localhost:8000${user.products_images[0].image.substring(
                6
              )}`,
            }}
            description={user.products_category.category}
            name={cellValue}
          >
            {user.products_category.category}
          </User>
        );
      case "stock":
        return (
          <div className="flex flex-col">
            <p className={`text-bold text-sm capitalize`}>
              {cellValue ? cellValue : "-"}
            </p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "product_price":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant=""
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        const onEdit = async (id) => {
          try {
            const hasil = await axiosInstance.get(`/product/${id}`)
            localStorage.setItem("product", JSON.stringify(hasil.data))
            console.log(hasil.data);
            onOpen()
          } catch (error) {
            console.log(error);
          }
        }
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span onClick={()=>onEdit(user.id)} className="text-xl text-default-400 cursor-pointer active:opacity-50">
                <FaRegEdit  />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-xl text-danger cursor-pointer active:opacity-50">
                <MdDelete onClick={() => handleDelete(user.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-3 my-3">
        <span>PRODUCTS</span>
        <div className="flex flex-col gap-2">
          <Button onPress={onOpen} className="max-w-fit">
            Tambah Products
          </Button>
          <Modal
            isOpen={isOpen}
            placement={modalPlacement}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalAddProduct onPress={onClose} />
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={product}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
