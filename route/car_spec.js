const express = require("express");
const router = express.Router();
const carSpecController = require("../controller/car_spec");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/:id")
	.delete(authMiddleware(["admin"]), carSpecController.removeCarSpec);

router.route("/").post(authMiddleware(["admin"]), carSpecController.addCarSpec);

module.exports = router;
