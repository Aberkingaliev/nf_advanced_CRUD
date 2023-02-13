import express, { Router } from "express";
import mongoose from "mongoose";
import TodoModel from "./model";

const todoRouter: Router = express.Router();

todoRouter.get("/get", async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
});

todoRouter.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  const foundedTodo = await TodoModel.findOne({ _id: id });
  res.send(foundedTodo);
});

todoRouter.post("/create", (req, res) => {
  const { body } = req;
  const newTodo = new TodoModel(body);
  newTodo.save();
  res.send(newTodo);
});

todoRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await TodoModel.deleteOne({ _id: id });
  res.send(deletedTodo);
});

todoRouter.put("/update/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const updatedTodo = await TodoModel.updateOne({ _id: id }, body);
  res.send(updatedTodo);
});

export default todoRouter;
