import express from "express";
import authenticate from "../middlewares/authenticate";

let router = express.Router();

router.use(authenticate);

router.post("/", (req, res) => {
  res.status(201).json({ error: "success" });
});

export default router;
