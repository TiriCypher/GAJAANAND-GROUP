const bcrypt = require("bcryptjs");

const User = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const generateToken = require("../utils/generateToken");

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

    if (!email || !password) {
        return res.status(400).json(
            new ApiResponse(
                400,
                "Email and password are required"
            )
        );
    }

    const user = await User.findOne({
        email,
    }).select("+password");

    if (!user) {
        return res.status(401).json(
            new ApiResponse(
                401,
                "Invalid credentials"
            )
        );
    }

    const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isMatch) {
        return res.status(401).json(
            new ApiResponse(
                401,
                "Invalid credentials"
            )
        );
    }

    const token = generateToken(user._id);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Login successful",
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