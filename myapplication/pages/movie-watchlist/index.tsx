import type { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Link,
    Typography,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";

interface MovieList {
    results: Movie[];
}

interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

const HomeDetail: NextPageWithLayout = () => {
    const fetcher = (url: string) =>
        axios.get(url).then((response) => response.data);
    const { data, isLoading, error } = useSWR<MovieList>(
        "/movie/upcoming",
        fetcher
    );

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                width: "317px",
                color: "#FFF",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "normal"
            }}>
                What do you want to watch?
            </Box>
            <Box sx={{ height: "21px" }}>

            </Box >
            <Box
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: 2,
                    flexWrap: "nowrap",
                }}
            >
                {isLoading && <CircularProgress />}
                {error && <Typography>Error loading data</Typography>}
                {data?.results.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            flex: "0 0 auto",
                            marginRight: 2,
                        }}
                    >
                        <Link href={`/movie-detail/${movie.id}`} underline="none">
                            <Card elevation={5} className="zoom-card small-card" sx={{ height: "210px", width: "139.581px", borderRadius: "16px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: "100%",
                                        objectFit: "cover",
                                        width: "100%",
                                        borderRadius: "16px",
                                    }}
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <CardContent />
                            </Card>
                        </Link>
                    </Box>
                ))}
            </Box>
        </>
    );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomeDetail;
