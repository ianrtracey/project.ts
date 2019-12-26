"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var http_1 = require("http");
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var schema_1 = __importDefault(require("./schema"));
var app = express_1.default();
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default
});
app.use("*", cors_1.default());
app.use(compression_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "client", "build")));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "client", "build", "index.html"));
});
mongoose_1.default.connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true
});
server.applyMiddleware({ app: app, path: "/graphql" });
var appServer = http_1.createServer(app);
exports.default = appServer;
