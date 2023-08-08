import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required filled"],
    maxLength: [50, "Max length should exceeds more than 50 characters"],
    minLength: [3, "Please enter valid name"],
  },
  title: {
    type: String,
    required: [true, "Title is required filled"],
    maxLength: [50, "Max length should exceeds more than 50 characters"],
    minLength: [3, "Please enter valid title"],
  },
  annualSalary: {
    type: Number,
    required: [true, "AnnualSalary is required filled"],
  },
  department: {
    type: String,
    required: [true, "Department is required filled"],
  },
});
const employee = mongoose.model("employees", employeeSchema);
export default employee;
