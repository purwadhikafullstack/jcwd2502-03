const Warehouse = require("../models/warehouses"); // Pastikan Anda memiliki model Warehouse
const RajaOngkirAPI = require("rajaongkir-api"); // Sesuaikan dengan API yang Anda gunakan untuk mendapatkan data provinsi, kota, dan kecamatan
const GeolocationAPI = require("geolocation-api"); // Sesuaikan dengan API yang Anda gunakan untuk mendapatkan data geolocation


// Fungsi untuk menampilkan semua data warehouse
module.exports = {
  getAllWarehouses: async (req, res) => {
    try {
      const warehouses = await Warehouse.find();
      res.json(warehouses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Fungsi untuk membuat warehouse baru
  createWarehouse: async (req, res) => {
    try {
      const newWarehouse = new Warehouse(req.body);
      await newWarehouse.save();
      res.status(201).json(newWarehouse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fungsi untuk memperbarui data warehouse
  updateWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedWarehouse = await Warehouse.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedWarehouse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fungsi untuk menghapus data warehouse
  deleteWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      await Warehouse.findByIdAndDelete(id);
      res.json({ message: "Warehouse berhasil dihapus" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fungsi untuk mendapatkan data provinsi, kota, dan kecamatan dari API RajaOngkir
  getRajaOngkirData: async (req, res) => {
    try {
      const rajaOngkirData = await RajaOngkirAPI.getData(); // Sesuaikan dengan metode API RajaOngkir yang digunakan
      res.json(rajaOngkirData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Fungsi untuk mendapatkan data geolocation dari API OpenCage atau sumber lainnya
  getGeolocationData: async (req, res) => {
    try {
      const geolocationData = await GeolocationAPI.getData(); // Sesuaikan dengan metode API geolocation yang digunakan
      res.json(geolocationData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
