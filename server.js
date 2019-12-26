"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT || 5000;
app_1.default.listen({ port: PORT }, function () {
    return console.log("\n\uD83D\uDE80      GraphQL is now running on http://localhost:" + PORT + "/graphql");
});