const express = require("express");

const router = express.Router();

const {
  createInquiry,
  scheduleVisit,
} = require(
  "../controllers/lead.controller"
);

router.post(
  "/inquiry",
  createInquiry
);

router.post(
  "/visit",
  scheduleVisit
);

module.exports = router;