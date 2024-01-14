import React, { useState, useEffect } from "react";
import SearchBox from "./searching"; // Đường dẫn đến file SearchBox.tsx

const MovieSearchPage: React.FC = () => {
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`YOUR_MOVIE_API_ENDPOINT?query=${query}`);
      const data = await response.json();
      if (data && data.results) {
        const movieTitles = data.results.map((movie: any) => movie.title);
        setSearchResult(movieTitles);
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phim:", error);
      setSearchResult([]);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search</h1>
      <SearchBox onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResult.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearchPage;
