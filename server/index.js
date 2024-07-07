import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";
import { routeNotFound, errorHandler } from "./middleware/errorMiddlewares.js";

dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow requests with no origin (e.g., mobile apps, curl requests)
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true, // Ensure cookies are allowed
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
