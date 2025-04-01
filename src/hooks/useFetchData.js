"use client";
import { useState, useEffect } from "react";

const useFetchData = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(`Error fetching data from: ${endpoint}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchData;
