import dotenv from "dotenv";
import express from "express";
import db from "./src/configurations/database/database.configuration.js";
import ProjectRoutes from "./src/routes/project.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("DB is connected");
    db.sync({ alter: true })
      .then((result) => {
        app.listen(process.env.PORT_NUMBER, () =>
          console.log(" \n Project-Management is started \n"),
        );
      })
      .catch((error) => {
        console.log("Error occurred: " + error);
      });
  })
  .catch((error) => {
    console.log("Project-Management cannot connect to database: " + error);
  });

app.use(ProjectRoutes);
