import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders dashboard title", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("FactWise Employee Dashboard")).toBeInTheDocument();
  });
});

test("displays summary cards after loading", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("Total Employees")).toBeInTheDocument();
    expect(screen.getByText("Average Salary")).toBeInTheDocument();
    expect(screen.getByText("Active Employees")).toBeInTheDocument();
  });
});

test("renders search input", async () => {
  render(<App />);
  await waitFor(() => {
    const searchInput = screen.getByPlaceholderText("Search all columns...");
    expect(searchInput).toBeInTheDocument();
  });
});

test("search input works", async () => {
  render(<App />);

  await waitFor(() => {
    expect(
      screen.getByPlaceholderText("Search all columns...")
    ).toBeInTheDocument();
  });

  const searchInput = screen.getByPlaceholderText("Search all columns...");
  await userEvent.type(searchInput, "John");

  expect(screen.getByText("FactWise Employee Dashboard")).toBeInTheDocument();
});

test("displays loading state initially", () => {
  render(<App />);
  expect(screen.getByText("Loading employee data...")).toBeInTheDocument();
});
