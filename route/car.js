const express = require("express");
const router = express.Router();
const carController = require("../controller/car");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/")
	.get(authMiddleware(["user", "admin"]), carController.getAllCars)
	.post(authMiddleware(["user", "admin"]), carController.addCar);

router
	.route("/:id")
	.get(authMiddleware(["user", "admin"]), carController.getCar)
	.put(authMiddleware(["user", "admin"]), carController.updateCar)
	.delete(authMiddleware(["user", "admin"]), carController.deleteCar);

module.exports = router;
