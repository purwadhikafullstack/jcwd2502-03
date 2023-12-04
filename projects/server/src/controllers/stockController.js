const stockServices = require("../services/stockServices")
const db = require("./../models");
const { sequelize } = require("./../models");
const { deleteFiles } = require("./../helper/deleteFile");
const stockMutasiService = require("../services/stockHistoriesService");
module.exports = {
    allStock : async (req, res, next) => {
        try {
            const hasil = await stockServices.getAllStock(req.query)
            res.status(200).send({
                isError: false,
                message: "All Product Stock Success",
                data: hasil,
              });
        } catch (error) {
            next(error)
        }
    },
    totalStockProduct : async (req, res, next) => {
        try {
            const hasil = await stockServices.totalProductStock(req.query)
            res.status(200).send({
                isError: false,
                message: "All Product Stock Success",
                data: hasil,
              });
        } catch (error) {
            next(error)
        }
    },
    // transactionStock : async (req, res, next) => {
    //             try {
    //                 // const hasil = await stockServices.kurangiStock({...req.query,...req.body})
    //                 const stockH = await stockMutasiService.createStockHistories({...req.query,...req.body, "Berkurang",  })
    //                 res.status(200).send({
    //                     isError: false,
    //                     message: "Success",
    //                     data: null,
    //                   });
    //             } catch (error) {
    //                 next(error)
    //             }
    //         }

    addStockProduct : async (req, res, next) => {
        try {
            const hasil = await stockServices.tambahStock({...req.query,...req.body})
            res.status(200).send({
                isError: false,
                message: "Success",
                data: null,
              });
        } catch (error) {
            next(error)
        }
    },

    minStockProduct : async (req, res, next) => {
        try {
            const hasil = await stockServices.kurangStock({...req.query,...req.body})
            res.status(200).send({
                isError: false,
                message: "Success",
                data: null,
              });
        } catch (error) {
            next(error)
        }
    },

    stockByWarehouse : async (req, res, next) => {
        try {
            const {id} = req.params
            console.log(id);
        } catch (error) {
            next(error)
        }
    }
};
