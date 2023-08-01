"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routers
var homeRouter = require('./routes/home');
app.use("/", homeRouter);
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port, "/"));
});