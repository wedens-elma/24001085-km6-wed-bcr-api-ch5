const express = require("express");
const router = express.Router();
const optionController = require("../controller/option");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/")
	.post(authMiddleware(["admin"]), optionController.createOption);

router
	.route("/:id")
	.get(authMiddleware(["user", "admin"]), optionController.getOptionById)
	.put(authMiddleware(["admin"]), optionController.updateOption)
	.delete(authMiddleware(["admin"]), optionController.deleteOption);

module.exports = router;
