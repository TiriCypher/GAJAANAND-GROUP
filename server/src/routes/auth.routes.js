const express = require("express");

const router = express.Router();

const {
    register,
    login,
    logout,
    getCurrentUser,
} = require(
    "../controllers/auth.controller"
);

const {
    authorize,
} = require(
    "../middleware/auth.middleware"
);

const {
    protect,
} = require(
    "../middleware/auth.middleware"
);

const {
    refreshAccessToken
} = require("../controllers/auth.controller");

router.post(
    "/register",
    register
);

router.post(
    "/login",
    login
);

router.post(
    "/logout",
    logout
);

router.get(
    "/me",
    protect,
    getCurrentUser
);

router.get(
    "/admin-test",
    protect,
    authorize(
        "admin",
        "super_admin"
    ),
    (req, res) => {
        res.json({
            success: true,
            message:
                "Welcome Admin",
        });
    }
);

router.post("/refresh", refreshAccessToken);

module.exports = router;