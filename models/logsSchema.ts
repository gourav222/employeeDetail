import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
  action: String,
  timestamp: { type: Date, default: Date.now },
  user: String,
  details: Object,
});

const auditLog = mongoose.model("AuditLog", auditLogSchema);

export default auditLog;
