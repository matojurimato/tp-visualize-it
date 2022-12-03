import { useEffect, useState } from "react";
import axios from "axios";
import { TPointMonth } from "../models/types";

export default function useFetch(url: string) {
  const [fetchedData, setFetchedData] = useState<TPointMonth[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setFetchedData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { fetchedData, error, loading };
}
