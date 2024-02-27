import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { format } from "date-fns";
import AppBarComponent from "./AppBarComponent";
import PaginationComponent from "./Pagination";
import MainContent from "./MainContent";
import Layout from "@/components/landing_page/layout";
import { NextPageWithLayout } from "../_app";
import SearchBar from "./SearchBar";
import { Movie } from "@/components/Models/Movies";

const SearchDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [moviesDisplayedCount, setMoviesDisplayedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const moviesPerPage = 20;

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        if (searchTerm.length === 0) {
          setSearchResults([]);
          setTotalMovies(0);
          setMoviesDisplayedCount(0);
          setDisplayedMovies([]);
          return;
        }

        const response = await fetcher(
          `/search/movie?query=${searchTerm.join("+")}&page=${currentPage}`
        );

        if (response.results.length > 0) {
          setSearchResults(response.results);
          setTotalMovies(response.total_results);
          setMoviesDisplayedCount(response.results.length);
          setDisplayedMovies(response.results.slice(0, moviesPerPage));
        } else {
          setMoviesDisplayedCount((prevCount) =>
            prevCount === 0 ? prevCount : prevCount + 1
          );
          setSearchResults([]);
          setTotalMovies(0);
          setDisplayedMovies([]);
          setCurrentPage(1);
        }
      } catch (error) {
        console.error("Error searching for movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [searchTerm, currentPage]);

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setIsLoading(true);
    try {
      setCurrentPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleInfoClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <AppBarComponent
        onBackClick={handleBackClick}
        onInfoClick={handleInfoClick}
      />

      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

      <MainContent displayedMovies={displayedMovies} isLoading={isLoading} />

      {totalMovies > moviesPerPage && (
        <PaginationComponent
          currentPage={currentPage}
          totalPageCount={Math.ceil(totalMovies / moviesPerPage)}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

SearchDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SearchDetail;
