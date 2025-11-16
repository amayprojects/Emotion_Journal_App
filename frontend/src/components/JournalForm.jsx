import { useState } from "react";
import axios from "axios";

const JournalForm = ({ onAddEntry }) => {
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emotion || !note) return alert("Please fill all fields");

    try {
      const res = await axios.post("http://localhost:5000/api/entries", {
        emotion,
        note,
      });
      onAddEntry(res.data);
      setEmotion("");
      setNote("");
    } catch (error) {
      alert("Error saving entry", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="journal-form">
      <h2 className="journal-heading">Add New Entry</h2>
      <label htmlFor="emotion" className="journal-label">
        Emotion
      </label>
      <select
        id="emotion"
        className="journal-select"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        required
      >
        <option>Select Emotion</option>
        <option>Happy</option>
        <option>Sad</option>
        <option>Angry</option>
        <option>Calm</option>
        <option>Other</option>
      </select>

      <label htmlFor="note" className="journal-label">
        How are you feeling ?
      </label>
      <textarea
        id="note"
        className="journal-textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your thoughts..."
        required
      />

      <button type="submit" className="journal-button">
        Add Entry
      </button>
    </form>
  );
};

export default JournalForm;
