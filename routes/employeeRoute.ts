import express from "express";
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployeeById,
} from "../controller/employeeController";
const router = express();

router.route("/employee").post(createEmployee);
router.route("/updateEmployee").patch(updateEmployee);
router.route("/deleteEmployee").delete(deleteEmployee);
router.route("/getAllEmployees").get(getAllEmployee);
router.route("/getEmployeeById").get(getEmployeeById);

export default router;
