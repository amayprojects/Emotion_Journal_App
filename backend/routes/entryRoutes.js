import express from "express";
import Entry from "../model/entryModel.js";

const router = express.Router();

// POST /api/entries
router.post("/", async (req, res) => {
  const { emotion, note } = req.body;

  if (!emotion || !note) {
    return res.status(400).json({ message: "Emotion and note are required." });
  }

  try {
    const newEntry = new Entry({ emotion, note });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Failed to save entry", error });
  }
});

// GET /api/entries
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch entries", error });
  }
});

export default router;
