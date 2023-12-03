import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import axiosInstance from "../../../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ModalAddCategory = ({ isOpen, setModalIsOpen }) => {
  const [input, setInput] = useState({
    category: "",
  });
  const [dataKategori, setDataKategori] = useState({
    category: "",
  });
  const [idKategori, setIdKategory] = useState(null);
  const [images, setImages] = useState([]);
  const nav = useNavigate();
  const getKategori = async () => {
    try {
      const idKategori = localStorage.getItem("kategori");
      setIdKategory(idKategori);
      const res = await axiosInstance.get(`/category/${idKategori}`);
      console.log(res.data);
      setInput({
        category: res.data.category,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const onSelectImages = (event) => {
    try {
      const files = [...event.target.files];
      files.forEach((value) => {
        if (value.size > 10000000)
          throw {
            message: `${value.name} Size Harus Dibawah 1MB`,
          };
        if (value.type.split("/")[0] !== "image") {
          throw {
            message: `${value.name} Harus Gambar`,
          };
        }
      });
      setImages(files);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    let newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleClose = () => {
    localStorage.removeItem("kategori");
    isOpen = false;
    setModalIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      if (!idKategori) {
        const fd = new FormData();
        fd.append("data", JSON.stringify(input));
        images.forEach((value) => {
          fd.append("images", value);
        });
        // console.log(fd.get("data"));
        // console.log(fd.get("images"));
        const res = await axiosInstance.post(`/category`, fd);
        setTimeout(() => {
          toast.success(res.data.message);
        }, 500);
        //   handleClose();
        setTimeout(() => {
          window.location.reload();
          // nav("/admin/category")
        }, 2000);
        localStorage.removeItem("kategori");
      } else {
        // console.log("lala");
        const res = await axiosInstance.put(`/category/${idKategori}`, input);
        setTimeout(() => {
          toast.success(res.data.message);
        }, 500);
        //   handleClose();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        localStorage.removeItem("kategori");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const customStyle = {
    content: {
      //   width: "800px",
      //   height: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      z: "50",
    },
  };

  useEffect(() => {
    getKategori();
  }, [setModalIsOpen, isOpen]);

  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[900] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpen}
    >
      <div className="relative h-full">
        <div className="w-full flex flex-col justify-center items-center">
          {idKategori ? (
            <span className="mb-3">Update Nama Kategori</span>
          ) : (
            <span className="mb-3">Membuat Kategori Baru</span>
          )}
          <div className="form grid gap-4 items-center justify-center">
            <div>
              <label>Nama Kategori</label>
              <Input
                onChange={handleChange}
                name={"category"}
                value={input.category}
                type={"text"}
                placeholder={"Nama Kategori..."}
              />
            </div>
            {!idKategori && (
              <div>
                <label>Gambar Kategori</label>
                <Input
                  multiple="multiple"
                  onChange={(e) => onSelectImages(e)}
                  type={"file"}
                  placeholder={"Nama Kategori..."}
                />
              </div>
            )}

            <Button
              onClick={handleSubmit}
              btnName={"Submit"}
              btnCSS={"rounded-md max-w-[100px]"}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handleClose} className="bg-gray-400">
            Tutup
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddCategory;
