const opencageService = require("../services/opencageService");
const warehouseService = require("../services/warehouseService");
const db = require("../models")

module.exports = {
    addWarehouse : async (req, res, next) => {
        try {
            const {name, cities_id} = req.body
            const loc = await opencageService.getLatLong(cities_id)
            // console.log({...req.body, ...loc});
            const data = {
                name : req.body.name,
                cities_id : req.body.cities_id,
                lng : loc.lng,
                lat : loc.lat,
            }
            const add = await warehouseService.addWarehouse(data)
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
            // console.log(city?.dataValues.cities_id);
            const loc = await opencageService.getLatLong(city?.dataValues.cities_id) //get lng lat berdasarkan cities_id
            // console.log(loc);
            const datas = {
                address_id : address_id,
                lat : loc.lat,
                lng : loc.lng
            }
            const data = await opencageService.getWarehouseTerdekat(datas)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
};
