import { useState } from "react";
import JournalForm from "./components/JournalForm";
import EntryList from "./components/EntryList";
import FetchEntries from "./components/FetchEntries";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const addEntry = (entry) => setEntries((prev) => [entry, ...prev]);

  return (
    <div className="container">
      <h1 className="header">Emotion Journal App</h1>

      <main className="flex">
        <JournalForm onAddEntry={addEntry} apiBase={API_BASE} />

        {loading ? (
          <p className="entry-empty">Loading...</p>
        ) : (
          <EntryList entries={entries} />
        )}

        <FetchEntries
          apiBase={API_BASE}
          setEntries={setEntries}
          setLoading={setLoading}
        />
      </main>
    </div>
  );
}
