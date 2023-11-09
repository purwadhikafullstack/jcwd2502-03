require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { join } = require("path");
const bearerToken = require("express-bearer-token");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(
  cors()
  //   {
  //     origin: [
  //         process.env.WHITELISTED_DOMAIN &&
  //             process.env.WHITELISTED_DOMAIN.split(","),
  //     ],
  // }
);
app.use(express.static('public'))
app.use(express.json());

//#region API ROUTES

// ===========================
// NOTE : Add your routes here
// Import Router
const {
  orderRouter,
  authRouter,
  userRouter,
  adminRouter,
} = require("./routers");
const { productRouter, categoryRouter, warehouseRouter, stockRouter, rajaOngkirRouter } = require("./routers");
app.use("/api/product", productRouter);
app.use(bearerToken());

app.use("/api/order", orderRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
// app.use("/profilepicture", express.static(`${__dirname}/public/profilePictures`));
// app.use("/products", express.static(`${__dirname}/public/products`));
app.use("/api/category", categoryRouter);
app.use("/api/warehouse", warehouseRouter);
app.use("/api/stock", stockRouter);
app.use("/api/rajaongkir", rajaOngkirRouter);

app.get("/api", (req, res) => {
  res.send(`Hello, this is my API`);
});

app.get("/api/greetings", (req, res, next) => {
  res.status(200).json({
    message: "Hello, Student !",
  });
});

// ===========================

// not found
// app.use((req, res, next) => {
//     if (req.path.includes("/api/")) {
//         res.status(404).send("Not found !");
//     } else {
//         next();
//     }
// });

// error
// app.use((err, req, res, next) => {
//     if (req.path.includes("/api/")) {
//         console.error("Error : ", err.stack);
//         res.status(500).send("Error !");
//     } else {
//         next();
//     }
// });
// app.use((err, req, res, next) => {
//     if (req.path.includes("/api/")) {
//         console.error("Error : ", err.stack);
//         res.status(500).send("Error !");
//     } else {
//         next();
//     }
// });

//#endregion

//#region CLIENT
const clientPath = "../../client/build";
app.use(express.static(join(__dirname, clientPath)));

// Serve the HTML page
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, clientPath, "index.html"));
});

// Centralized Error
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || "Error";

  return res.status(statusCode).send({
    isError: true,
    message: statusMessage,
    data: null,
  });
});

//#endregion

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});
