import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { GRID_CONFIG } from "../constants";

export const useSearch = (onSearch) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchText(value);
      if (onSearch) {
        onSearch(value);
      }
    }, GRID_CONFIG.DEBOUNCE_DELAY),
    [onSearch]
  );

  const handleSearchChange = useCallback(
    (value) => {
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const clearSearch = useCallback(() => {
    setSearchText("");
    if (onSearch) {
      onSearch("");
    }
  }, [onSearch]);

  return {
    searchText,
    handleSearchChange,
    clearSearch,
  };
};
