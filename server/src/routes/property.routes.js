const express = require("express");

const router = express.Router();

const {
    createProperty,
    getAllProperties,
} = require("../controllers/property.controller");

const { protect, authorize } = require("../middleware/auth.middleware");

// Only admin & agent can create properties
router.post(
    "/",
    protect,
    authorize("admin", "agent", "super_admin"),
    createProperty
);

// Public listing
router.get("/", getAllProperties);

module.exports = router;