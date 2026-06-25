const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");

const {
  uploadPropertyImages,
} = require("../controllers/property.controller");

const {
  protect,
  authorize,
} = require("../middleware/auth.middleware");

router.post(
  "/property-images",
  protect,
  authorize("admin", "agent", "super_admin"),
  upload.array("images", 10),
  uploadPropertyImages
);

module.exports = router;