const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const {
    generateAccessToken,
    generateRefreshToken
} = require("../utils/generateToken");

exports.register = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    if (
        !firstName ||
        !lastName ||
        !email ||
        !password
    ) {
        return res.status(400).json(
            new ApiResponse(
                400,
                "All fields are required"
            )
        );
    }

    const existingUser = await User.findOne({
        email,
    });

    if (existingUser) {
        return res.status(400).json(
            new ApiResponse(
                400,
                "User already exists"
            )
        );
    }

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    const token = generateToken(user._id);

    return res.status(201).json(
        new ApiResponse(
            201,
            "User registered successfully",
            {
                token,
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                },
            }
        )
    );
});

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json(new ApiResponse(401, "Invalid credentials"));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json(new ApiResponse(401, "Invalid credentials"));
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Store refresh token in DB
    user.refreshToken = refreshToken;
    await user.save();

    // Set cookie for refresh token (HTTP ONLY)
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // true in production (HTTPS)
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(
        new ApiResponse(200, "Login successful", {
            accessToken,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            },
        })
    );
});

exports.getCurrentUser = asyncHandler(
    async (req, res) => {
        return res.status(200).json(
            new ApiResponse(
                200,
                "Current user fetched successfully",
                {
                    user: {
                        id: req.user._id,
                        firstName:
                            req.user.firstName,
                        lastName:
                            req.user.lastName,
                        email:
                            req.user.email,
                        role:
                            req.user.role,
                    },
                }
            )
        );
    }
);

exports.logout = asyncHandler(
    async (req, res) => {
        return res.status(200).json(
            new ApiResponse(
                200,
                "Logout successful"
            )
        );
    }
);

exports.refreshAccessToken = asyncHandler(async (req, res) => {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.status(401).json(
            new ApiResponse(401, "Refresh token missing")
        );
    }

    const decoded = jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== token) {
        return res.status(403).json(
            new ApiResponse(403, "Invalid refresh token")
        );
    }

    const newAccessToken = generateAccessToken(user._id);

    return res.status(200).json(
        new ApiResponse(200, "Access token refreshed", {
            accessToken: newAccessToken
        })
    );
});