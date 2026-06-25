const express = require("express");

const router = express.Router();

const {
  saveProperty,
  getSavedProperties,
  removeSavedProperty,
} = require(
  "../controllers/user.controller"
);

const {
  protect,
} = require(
  "../middleware/auth.middleware"
);

router.post(
  "/saved/:propertyId",
  protect,
  saveProperty
);

router.get(
  "/saved",
  protect,
  getSavedProperties
);

router.delete(
  "/saved/:propertyId",
  protect,
  removeSavedProperty
);

module.exports = router;