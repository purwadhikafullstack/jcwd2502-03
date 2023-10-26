const db = require("../models");
const axios = require("axios");
const apiKey = "ae3e97cbd5794c5a9110d1c04da85bda";

module.exports = {
  getLatLong: async ({city, province}) => {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${city},${province}&key=${apiKey}`;
      const data = await axios.get(url);
      return data.data.results[0].geometry;
    } catch (error) {
        return error
    }
  },
};
