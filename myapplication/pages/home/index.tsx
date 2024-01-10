import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Link, Typography } from '@mui/material';
import useSWR from 'swr';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/landing_page/layout';
import axios from 'axios';

interface MovieList {
    results: Movie[];
}

interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

const HomeDetail: NextPageWithLayout = () => {
    const fetcher = (url: string) => axios.get(url).then((response) => response.data);
    const { data, error } = useSWR<MovieList>('/movie/upcoming', fetcher);

    if (!data) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography>Error loading data</Typography>;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 2,
            }}
        >
            {data.results.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <Link href={`/movie-detail/${movie.id}`} underline="none">
                        <Card elevation={5} className="zoom-card small-card" sx={{ height: '95%', width: '290%' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: '100%',
                                    objectFit: 'cover',
                                    width: 'auto',
                                }}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <CardContent></CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Box>
    );
};

HomeDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default HomeDetail;
