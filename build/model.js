"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    content: { type: String, required: true },
    status: { type: String, enum: ["Todo", "Done", "Trash"], required: true },
});
const TodoModel = mongoose_1.default.model("Todo", TodoSchema);
exports.default = TodoModel;
