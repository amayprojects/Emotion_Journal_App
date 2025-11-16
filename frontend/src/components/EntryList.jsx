export default function EntryList({ entries }) {
  const getEmotionClass = (emotion) => {
    switch (emotion) {
      case "Happy":
        return "emotion-happy";
      case "Sad":
        return "emotion-sad";
      case "Angry":
        return "emotion-angry";
      case "Calm":
        return "emotion-calm";
      default:
        return "emotion-neutral";
    }
  };

  return (
    <section className="entry-section">
      <h2 className="entry-heading">Past Entries</h2>

      {entries.length === 0 ? (
        <p className="entry-empty">
          No entries yet. Write your first one there 👈.
        </p>
      ) : (
        <div className="space-y-4">
          {entries.map((e) => (
            <article key={e._id} className="entry-card">
              <div className="entry-header">
                <span className={`entry-emotion ${getEmotionClass(e.emotion)}`}>
                  {e.emotion}
                </span>
                <time className="entry-time">
                  {new Date(e.createdAt).toLocaleString()}
                </time>
              </div>
              <p className="entry-note">{e.note}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
