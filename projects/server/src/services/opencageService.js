const db = require("../models");
const axios = require("axios");
const apiKey = "ae3e97cbd5794c5a9110d1c04da85bda";

module.exports = {

  getWarehouseTerdekat: async (datas, ids) => {
    try {
      const data = await db.warehouses.findAll({
        where: {
          id: {
            [db.Sequelize.Op.notIn]: ids,
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      let nearestWarehouse = null;
      let nearestDistance = Infinity;
      function degToRad(deg) {
        return deg * (Math.PI / 180);
      }
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius bumi dalam kilometer
        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(degToRad(lat1)) *
            Math.cos(degToRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return Math.ceil(distance);
      }

      data.forEach((warehouse) => {
        const distance = calculateDistance(
          datas.lat,
          datas.lng,
          warehouse.lat,
          warehouse.lng
        );
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestWarehouse = warehouse;
        }
      });
      // console.log("11");
      return nearestWarehouse;
    } catch (error) {
      return error;
    }
  },
};
