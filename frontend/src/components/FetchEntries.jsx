import { useEffect } from "react";
import axios from "axios";

export default function FetchEntries({ apiBase, setEntries, setLoading }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiBase}/api/entries`);
        setEntries(res.data);
      } catch (err) {
        console.error("Error fetching entries:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiBase, setEntries, setLoading]);

  return null; // This component only handles fetching
}
