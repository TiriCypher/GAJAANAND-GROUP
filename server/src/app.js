const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");

const errorHandler = require("./middleware/errorHandler");

const propertyRoutes = require("./routes/property.routes");

const uploadRoutes = require("./routes/upload.routes");

const userRoutes = require("./routes/user.routes");

const leadRoutes = require("./routes/lead.routes");

const limiter = require("./config/rateLimiter");
const app = express();

app.set("trust proxy", 1);

/*
|--------------------------------------------------------------------------
| Security Middleware
|--------------------------------------------------------------------------
*/

app.use(helmet());

app.use(
    cors({
        origin:
            process.env.CLIENT_URL,

        credentials: true,
    })
);

app.use(compression());

app.use(cookieParser());
app.use(limiter);

/*
|--------------------------------------------------------------------------
| Body Parsers
|--------------------------------------------------------------------------
*/

app.use(express.json());

/*
|--------------------------------------------------------------------------
| Logging
|--------------------------------------------------------------------------
*/

if (
    process.env.NODE_ENV ===
    "development"
) {
    app.use(morgan("dev"));
}

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/api/properties", propertyRoutes);
app.use("/api/upload", uploadRoutes);


app.use(
    "/api/users",
    userRoutes
);

app.use(
    "/api/leads",
    leadRoutes
);






/*
|--------------------------------------------------------------------------
| Health Check Route
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "GAJAANAND GROUP API is running",
    });
});

app.use(
    "/api/auth",
    authRoutes
);

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

module.exports = app;