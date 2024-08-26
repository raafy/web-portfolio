import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.get("/api/", (_req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});

app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
