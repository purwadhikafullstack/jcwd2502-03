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
import { FaRegEdit } from "react-icons/fa";
import axiosInstance from "../../config/api";

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

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export default function StockWarehouses() {
  const [warehouse, setWarehouses] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    warehouses_id: 58,
    products_id: null,
    search: null,
  });
  const getData = async () => {
    try {
      const res = await axiosInstance.get(
        `/stock?warehouses_id=${filter.warehouses_id}&products_id=${filter.products_id}&search=${filter.search}`
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
  // if (currentData.length === 0) {
  //   <div>sabar</div>;
  // }
  // const nextPage = () => {
  //   if (endIndex < data.length) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (startIndex > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // console.log(warehouse);
  const getWarehouse = async () => {
    try {
      const data = await axiosInstance.get(`/warehouse`);
      setWarehouses(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    getWarehouse()
    if (filter.warehouses_id === null) {
      let newFilter = {...filter}
      newFilter.warehouses_id =Number(warehouse[0].id)
      setFilter(newFilter)
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
              }${user?.image?.substring(6)}`,
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
        return (
          <div className="relative flex items-center gap-2">
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip> */}
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
        {/* <div className="flex flex-col gap-2">
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
        </div> */}
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
    </div>
  );
}
