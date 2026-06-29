const express = require("express");

const router = express.Router();

const {
    getDashboardStats,
    getAllUsers,
    getAllProperties,
    deleteProperty,
    getAllLeads,
    getAllInquiries,
    createProperty,
    getPropertyById,
    updateProperty,
} = require("../controllers/admin.controller");

const {
    protect,
    authorize,
} = require(
    "../middleware/auth.middleware"
);

router.get(
    "/dashboard",
    protect,
    authorize(
        "admin",
        "super_admin"
    ),
    getDashboardStats
);

router.post(
    "/properties",
    protect,
    authorize(
        "admin",
        "super_admin"
    ),
    createProperty
);

router.get(
    "/properties/:id",
    protect,
    authorize("admin", "super_admin"),
    getPropertyById
);

router.put(
    "/properties/:id",
    protect,
    authorize("admin", "super_admin"),
    updateProperty
);

router.get(
    "/users",
    protect,
    authorize(
        "admin",
        "super_admin"
    ),
    getAllUsers
);

router.get(
    "/properties",
    protect,
    authorize("admin", "super_admin"),
    getAllProperties
);

router.delete(
    "/properties/:id",
    protect,
    authorize(
        "admin",
        "super_admin"
    ),
    deleteProperty
);

router.get(
    "/leads",
    protect,
    authorize("admin", "super_admin"),
    getAllLeads
);

router.get(
    "/inquiries",
    protect,
    authorize("admin", "super_admin"),
    getAllInquiries
);

module.exports = router;