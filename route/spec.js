const express = require("express");
const router = express.Router();
const specController = require("../controller/spec");
const { authMiddleware } = require("../middleware/auth");

router.route("/").post(authMiddleware(["admin"]), specController.createSpec);

router
	.route("/:id")
	.get(authMiddleware(["user", "admin"]), specController.getSpecById)
	.put(authMiddleware(["admin"]), specController.updateSpec)
	.delete(authMiddleware(["admin"]), specController.deleteSpec);

module.exports = router;
