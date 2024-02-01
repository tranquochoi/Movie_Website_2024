import React from "react";
import { Autocomplete, InputBase } from "@mui/material";

interface SearchBarProps {
  searchTerm: string[];
  onSearchTermChange: (value: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchTermChange,
}) => {
  const getOptions = () => {
    if (searchTerm.length === 0) {
      return [];
    } else {
      return searchTerm.map((term) => term.toLowerCase());
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={getOptions()}
      renderInput={(params) => (
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            padding: "2px",
            width: "100%",
            marginBottom: "15px",
          }}
        >
          <InputBase
            {...params}
            sx={{
              borderRadius: "16px",
              background: "#3A3F47",
              width: "100%",
              height: "42px",
              color: "#67686D",
              padding: "4px",
              border: "1px solid #67686D",
              cursor: "pointer",
            }}
            placeholder="Search"
            inputProps={{
              ...params.inputProps,
              "aria-label": "search movies",
            }}
            value={searchTerm.join(" ")}
            onChange={(e) => onSearchTermChange(e.target.value.split(" "))}
          />
          <img
            src="/Search (1).png"
            alt="Search"
            style={{
              width: "15.807px",
              height: "16px",
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    />
  );
};

export default SearchBar;
