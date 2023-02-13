import mongoose from "mongoose";

interface Todo {
  content: string;
  status: string;
}

const TodoSchema = new mongoose.Schema<Todo>({
  content: { type: String, required: true },
  status: { type: String, enum: ["Todo", "Done", "Trash"], required: true },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
