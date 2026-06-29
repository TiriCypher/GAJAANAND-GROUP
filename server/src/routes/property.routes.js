const express = require("express");

const router = express.Router();

const {
    createProperty,
    getAllProperties,
    attachPropertyImages,
    getPropertyById,
    getSimilarProperties,
    getFeaturedProperties,
} = require("../controllers/property.controller");


const { protect, authorize } = require("../middleware/auth.middleware");

const upload = require(
    "../middleware/upload.middleware"
);

const validate =
    require(
        "../middleware/validate.middleware"
    );

const {
    createPropertySchema
} = require(
    "../validators/property.validator"
);

const {
    saveProperty,
    sendInquiry,
    getSavedProperties,
} = require("../controllers/property.extra.controller");

// Only admin & agent can create properties
router.post(
    "/",
    protect,
    authorize(
        "admin",
        "agent",
        "super_admin"
    ),
    validate(
        createPropertySchema
    ),
    createProperty
);

router.post(
    "/:propertyId/images",
    protect,
    authorize(
        "admin",
        "agent",
        "super_admin"
    ),
    upload.array("images", 20),
    attachPropertyImages
);

router.get(
  "/saved",
  protect,
  getSavedProperties
);

router.post("/save", protect, saveProperty);

// 📩 INQUIRY
router.post("/inquiry", sendInquiry);

router.get(
    "/featured",
    getFeaturedProperties
);



router.get(
    "/:id",
    getPropertyById
);

router.get(
    "/:id/similar",
    getSimilarProperties
);
// Public listing
router.get("/", getAllProperties);

module.exports = router;