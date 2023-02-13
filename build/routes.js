"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("./model"));
const todoRouter = express_1.default.Router();
todoRouter.get("/get", (req, res) => {
    res.send(model_1.default.find());
});
todoRouter.get("/get/:id", (req, res) => {
    const { id } = req.params;
    res.send(model_1.default.findOne({ _id: id }));
});
todoRouter.post("/create", (req, res) => {
    const { body } = req;
    const newTodo = new model_1.default(body).save();
    res.send(newTodo);
});
todoRouter.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const deletedTodo = model_1.default.deleteOne({ _id: id });
    res.send(deletedTodo);
});
todoRouter.put("/update/:id", (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const updatedTodo = model_1.default.updateOne({ _id: id }, body);
    res.send(updatedTodo);
});
exports.default = todoRouter;
