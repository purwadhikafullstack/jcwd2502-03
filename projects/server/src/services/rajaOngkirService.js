const db = require("../models");
const axios = require("axios");

const key = "444bbf4c27b3522ec578ebc1b1f75e95";

module.exports = {
  getShippingMethod: async (datas) => {
    try {
      console.log(datas);
      const config = {
        headers: {
          key: key,
        },
      };

      const payload = {
        origin: datas.userCity,
        destination: datas.nearestWarehouse,
        weight: datas.weight,
        courier: datas.courier,
      };
      
      console.log(payload);
      const requestUrl = "https://api.rajaongkir.com/starter/cost";
      const getShippingMethod = await axios.post(requestUrl, payload, config);
      return getShippingMethod.data;
    } catch (error) {
      return error;
    }
  },
};
