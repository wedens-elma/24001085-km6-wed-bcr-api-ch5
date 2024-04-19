const express = require("express");
const router = express.Router();
const specController = require("../controller/spec");
const { authMiddleware } = require("../middleware/auth");

router
	.route("/")
	.post(authMiddleware(["user", "admin"]), specController.createSpec);

router
	.route("/:id")
	.get(authMiddleware(["user", "admin"]), specController.getSpecById)
	.put(authMiddleware(["user", "admin"]), specController.updateSpec)
	.delete(authMiddleware(["user", "admin"]), specController.deleteSpec);

module.exports = router;
