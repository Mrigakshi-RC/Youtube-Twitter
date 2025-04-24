import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //It parses incoming requests with Content-Type: application/json and puts the resulting object on req.body.

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //extended -> to support nested objects

app.use(express.static('public'))//is used to serve static files (like HTML, CSS, JS, images, etc.) from a directory—in this case, the "public" folder.

app.use(cookieParser()) //Read cookies from the Cookie header in HTTP requests and make them easily accessible via req.cookies

export { app };
