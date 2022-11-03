const express = require("express");
const controller = require("../controller");
const router = express.Router();
/*  const Controller = require("../controller/ManyToMany/index");  */

router.get("/get", (req, res) => {
  res.send("<h1>Router Page</h1>");
});

router.post("/addUser", async (req, res) => {
  let data = await controller.UserController.addUser(req.body);
  res.json(data);
});

router.post("/addProduct", async (req, res) => {
  let data = await controller.OneProductController.addProduct(req.body);
  res.json(data);
});

router.post("/addProductMany", async (req, res) => {
  let data = await controller.ManyProductController.addProductMany(req.body);
  res.json(data);
});

router.get("/onetoone", async (req, res) => {
  let data = await controller.association.getUser();
  res.json(data);
});

router.get("/onetoonebelongsTo", async (req, res) => {
  let data = await controller.association.getUserbelongsto();
  res.json(data);
});

router.get("/onetomany", async (req, res) => {
  let data = await controller.association.getUserhasmany();
  res.json(data);
});

//  ------ Many to many -------

router.post("/firstcontroller", async (req, res) => {
  let data = await controller.ManytoMany.firstController.addfirst(req.body);
  res.json(data);
});

router.post("/secondcontroller", async (req, res) => {
  let data = await controller.ManytoMany.secondController.addsecond(req.body);
  res.json(data);
});

router.post("/commancontroller", async (req, res) => {
  let data = await controller.ManytoMany.commanController.addcomman(req.body);
  res.json(data);
});

router.get("/manytomany", async (req, res) => {
  let data = await controller.ManytoMany.queryController.getAllUser();
  res.json(data);
});

module.exports = router;
