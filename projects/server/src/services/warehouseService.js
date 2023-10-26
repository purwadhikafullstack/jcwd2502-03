const { where } = require("sequelize");
const db = require("../models");

module.exports = {
    addWarehouse: async ({name, status, cities_id, lng, lat}) => {
    try {
      const res = await db.warehouses.create({name,status : "Active",cities_id,lng,lat});
      return res;
    } catch (error) {
      return error;
    }
  },
  deleteWarehouse : async ({id}) => {
    try {
        const update = await db.warehouses.update({status : "Inactive"} , {where :{id}})
        const res = await db.warehouses.destroy({where : {id}})
        return res
    } catch (error) {
        return error
    }
  },
  restoreWarehouse : async ({id}) => {
    try {
        const res = await db.warehouses.restore({where : {id}})
        const update = await db.warehouses.update({status : "Active"} , {where :{id}})
        return res
    } catch (error) {
        return error
    }
  },
  getAllWarehouse : async () => {
    try {
        const res = await db.warehouses.findAll()
        return res
    } catch (error) {
        return error
    }
  },
  updateWarehouse : async ({id, name}) => {
    try {
        const data = await db.warehouses.findByPk(id)
        const newData = await db.warehouses.update({...data, name},{where:{id}})
        return newData
    } catch (error) {
        return error
    }
  }
};
