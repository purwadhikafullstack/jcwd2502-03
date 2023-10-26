const opencageService = require("../services/opencageService");
const warehouseService = require("../services/warehouseService");
const db = require("../models")

module.exports = {
    addWarehouse : async (req, res, next) => {
        try {
            const loc = await opencageService.getLatLong(req.body)
            console.log({...req.body, ...loc});
            const add = await warehouseService.addWarehouse({...req.body, ...loc})
            console.log(add);
            res.status(200).send({
                isError : "false",
                message : "Success Add Warehouse"
            })
        } catch (error) {
            next(error)
        }
    },
    deleteWarehouse : async (req, res, next) => {
        try {
            const data = await warehouseService.deleteWarehouse(req.params)
            res.status(200).send({
                isError : "false",
                message : "Succes Delete Warehouse"
            })
        } catch (error) {
            next(error)
        }
    },
    restoreWarehouse : async (req, res, next) => {
        try {
            const data = await warehouseService.restoreWarehouse(req.params)
            res.status(200).send({
                isError : "false",
                message : "Succes Restore Warehouse"
            })
        } catch (error) {
            next(error)
        }
    },
    getAllWarehouse : async (req, res, next) => {
        try {
            const data = await warehouseService.getAllWarehouse()
            res.status(200).send({
                isError : "false",
                message : "Succes Get All Data Warehouse",
                data
            })
        } catch (error) {
            next(error)
        }
    },
    updateWarehouse : async (req, res, next) => {
        try {
            const data = await warehouseService.updateWarehouse({...req.query, ...req.body})
            res.status(200).send({
                isError : "false",
                message : "Success Update Warehouse"
            })
        } catch (error) {
            next(error)
        }
    },
    getWarehouseTerdekat : async (req, res, next) => {
        try {
            const {address_id} = req.body
            const city = await db.users_addresses.findByPk(address_id)
            console.log(city?.dataValues.cities_id);
            const loc = await opencageService.getLatLong(city?.dataValues.tb_ro_cities_id) //get lng lat berdasarkan cities_id
            // console.log({...loc, address_id});
            const data = await opencageService.getWarehouseTerdekat({...loc,address_id})
            // console.log(loc);
        } catch (error) {
            next(error)
        }
    }
};
