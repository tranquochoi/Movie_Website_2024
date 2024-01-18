import React, { useState } from "react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search"
          style={{
            marginRight: "12px",
            width: "100%",
            padding: "10px 19px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            color: "black",
            backgroundImage: `url("/Images/Search.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
            backgroundSize: "20px",
            margin: "auto",
          }}
        />
        <img
          src="/Images/Search.png"
          alt="search-icon"
          style={{
            position: "absolute",
            top: "50%",
            right: "30px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            visibility: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
