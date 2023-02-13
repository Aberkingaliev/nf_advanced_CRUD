"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const PORT = process.env.PORT || "8080";
const DB_URL = process.env.DB_URL || "<URL>";
app.use("/api", routes_1.default);
app.use(express_1.default.json());
function startApp(port, databaseUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(databaseUrl, () => {
                console.log("База подключена");
            });
            app.listen(port, () => {
                console.log("Сервер запустили");
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
startApp(PORT, DB_URL);
