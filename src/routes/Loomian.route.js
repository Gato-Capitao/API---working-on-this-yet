import { Router } from "express";
import { registrationLoomian, getAllLoomians } from "../controllers/Loomian.controller.js";

const loomiRouter = Router();
loomiRouter.post("/loomian", (req, res) => {
    const { id } = req.body;
    const newLoomian = registrationLoomian(id);
    res.json({
        message: "Loomian was sucessfuly added.",
        newLoomian: newLoomian
    });
});

loomiRouter.get("/loomian", (req, res) => {
    const list = getAllLoomians();
    res.json({ list });
});

export {loomiRouter}