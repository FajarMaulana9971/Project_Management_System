import Project from "../projcet.entity.js";
import Task from "../task.entity.js";
import User from "../user.entity.js";
import DailyReport from "../daily-report.entity.js";
import ReportTask from "../transactional-table/report-task.transactional.js";
import UserTask from "../transactional-table/user-task.transactional.js";
import Sprint from "../sprint.entity.js";

Project.hasMany(Task, {
  foreignKey: "project_id",
});

Project.hasMany(User, {
  foreignKey: "project_id",
});

User.hasMany(DailyReport, {
  foreignKey: "user_id",
});

Project.hasMany(Sprint, {
  foreignKey: "project_id",
});

Sprint.hasMany(Task, {
  foreignKey: "sprint_id",
});

DailyReport.belongsToMany(Task, {
  through: ReportTask,
  foreignKey: "report_id",
});
Task.belongsToMany(DailyReport, { through: ReportTask, foreignKey: "task_id" });

User.belongsToMany(Task, { through: UserTask, foreignKey: "user_id" });
Task.belongsToMany(Task, { through: UserTask, foreignKey: "task_id" });
