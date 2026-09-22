import { useState, useEffect, useCallback } from "react";
import { processEmployeeData } from "../dataUtils";
import data from "../data.json";
import { GRID_CONFIG } from "../constants";

export const useEmployeeData = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) =>
        setTimeout(resolve, GRID_CONFIG.LOADING_DELAY)
      );

      if (!data || !data.employees) {
        throw new Error("Invalid data format");
      }

      const processedData = processEmployeeData(data);
      setRowData(processedData);
      console.log(`Successfully loaded ${processedData.length} employees`);
    } catch (err) {
      console.error("Failed to load employee data", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    rowData,
    loading,
    error,
    refetch,
  };
};
