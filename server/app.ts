import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import schema from "./schema";

const app: Application = express();
const server = new ApolloServer({
  schema
});

app.use("*", cors());
app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true
});
server.applyMiddleware({ app, path: "/graphql" });
const appServer = createServer(app);

export default appServer;
