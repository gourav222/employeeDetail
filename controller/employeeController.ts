import employee from "../models/employeesSchema";
import catchAsyncFunction from "../middleware/catchAsyncFunction";
import { validateEmployee } from "../validations/validateEmployee";
import { employeeDataType } from "../types/employeeType";
import { Request, Response } from "express";
import auditLog from "../models/logsSchema";

//catchAsyncFunction automatically handles errors, effectively acting as a try and catch block.
const createEmployee = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { name, title, annualSalary, department }: employeeDataType =
      req.body;
    try {
      await validateEmployee.validateAsync({
        name,
        title,
        annualSalary,
        department,
      });
    } catch (error) {
      return res
        .status(403)
        .json({ message: "all attributes are mandatory", data: error });
    }
    const newEmployee = await employee.create(req.body);
    const logsData = {
      action: "Employee Created",
      details: req.body,
    };
    await auditLog.create(logsData);
    res.status(201).json({
      status: "success",
      data: {
        employee: newEmployee,
      },
    });
  }
);
//catchAsyncFunction automatically handles errors, effectively acting as a try and catch block.
const updateEmployee = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { name, title, annualSalary, department }: employeeDataType =
      req.body;
    try {
      await validateEmployee.validateAsync({
        name,
        title,
        annualSalary,
        department,
      });
    } catch (error) {
      return res
        .status(403)
        .json({ message: "all attributes are mandatory", data: error });
    }
    const updatedEmployee = await employee.findByIdAndUpdate(
      req.query.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    const logsData = {
      action: "Update Employee Details",
      details: req.body,
    };
    await auditLog.create(logsData);
    res.status(201).json({
      status: "success",
      data: {
        employee: updatedEmployee,
      },
    });
  }
);
//catchAsyncFunction automatically handles errors, effectively acting as a try and catch block.
const deleteEmployee = catchAsyncFunction(
  async (req: Request, res: Response) => {
    await employee.findByIdAndDelete(req.query.id);
    const logsData = {
      action: "Delete Employee",
      details: req.body,
    };
    await auditLog.create(logsData);
    res.status(200).json({
      status: "success",
      message: "Data successfully deleted",
    });
  }
);
//catchAsyncFunction automatically handles errors, effectively acting as a try and catch block.
const getAllEmployee = catchAsyncFunction(async (req: Request, res: Response) => {
  const employeeData: any = await employee.find();
  res.status(200).json({
    status: "success",
    data: {
      employeeData,
    },
  });
});

const getEmployeeById = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const employeeData: any = await employee.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        employeeData,
      },
    });
  }
);

export {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployeeById,
};
