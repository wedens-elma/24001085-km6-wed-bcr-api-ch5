const express = require("express");
const router = express.Router();
const carSpecController = require("../controller/car_spec");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/:id")
	.delete(authMiddleware(["user", "admin"]), carSpecController.removeCarSpec);

router
	.route("/")
	.post(authMiddleware(["user", "admin"]), carSpecController.addCarSpec);

module.exports = router;
