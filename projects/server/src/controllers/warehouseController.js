const opencageService = require("../services/opencageService");
const warehouseService = require("../services/warehouseService");
const db = require("../models")

module.exports = {
    addWarehouse : async (req, res, next) => {
        try {
            const loc = await opencageService.getLatLong(req.body)
            const add = await warehouseService.addWarehouse({...req.body, ...loc})
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
    }
};
