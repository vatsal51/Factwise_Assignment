import { useState, useMemo, useEffect, useCallback } from "react";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "./App.css";
import { calculateSummaryStats } from "./dataUtils";
import SummaryCard from "./SummaryCard";
import { useSearch } from "./hooks/useSearch";
import { useEmployeeData } from "./hooks/useEmployeeData";

import {
  getColumnDefs,
  getDefaultColDef,
  getGridOptions,
} from "./config/gridConfig";
import { COLORS } from "./constants";

ModuleRegistry.registerModules([AllCommunityModule]);

const App = () => {
  const { rowData, loading, error } = useEmployeeData();

  const [quickFilterText, setQuickFilterText] = useState("");

  const columnDefs = useMemo(() => getColumnDefs(), []);
  const defaultColDef = useMemo(() => getDefaultColDef(), []);
  const gridOptions = useMemo(() => getGridOptions(), []);

  const { handleSearchChange } = useSearch((value) => {
    setQuickFilterText(value);
  });

  const summaryStats = useMemo(() => calculateSummaryStats(rowData), [rowData]);

  const { totalEmployees, averageSalary, activeEmployees } = summaryStats;

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading employee data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error">Error loading data: {error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container ">
      <h1 className="dashboard-title">FactWise Employee Dashboard</h1>

      <div className="summary-cards">
        <SummaryCard
          title="Total Employees"
          value={totalEmployees}
          color={COLORS.PRIMARY}
        />
        <SummaryCard
          title="Average Salary"
          value={`$${averageSalary.toFixed(0).toLocaleString()}`}
          color={COLORS.INFO}
        />
        <SummaryCard
          title="Active Employees"
          value={activeEmployees}
          color={COLORS.SUCCESS}
        />
      </div>

      <div className="actions-bar">
        <input
          id="filter-text-box"
          name="filter-text-box"
          type="text"
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search all columns..."
        />
      </div>
      <div className="grid-container ag-theme-material">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilterText}
          rowSelection="multiple"
          domLayout="normal"
          groupDisplayType={"multipleColumns"}
          {...gridOptions}
        />
      </div>
    </div>
  );
};

export default App;
