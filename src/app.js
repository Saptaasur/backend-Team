import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import organizationRoutes from "./routes/organizationRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/organizations", organizationRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/members", memberRoutes);

export default app;
