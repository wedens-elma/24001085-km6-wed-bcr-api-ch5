const express = require("express");
const router = express.Router();
const carOptionController = require("../controller/car_option");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/:id")
	.delete(
		authMiddleware(["user", "admin"]),
		carOptionController.removeCarOption
	);
router
	.route("/")
	.post(authMiddleware(["user", "admin"]), carOptionController.addCarOption);

module.exports = router;
