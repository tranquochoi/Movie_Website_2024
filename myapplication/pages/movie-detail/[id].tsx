import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress, Paper, Grid } from '@mui/material';
import Layout from '@/components/landing_page/layout';


const MovieDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<{ title: string; poster_path: string } | null>(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(`/movie/${id}?language=en-US`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
            }
        };

        if (id) {
            fetchMovieDetail();
        }
    }, [id]);

    if (!movie) {
        return <CircularProgress style={{ marginTop: '20px', minHeight: '100vh' }} />;
    }

    return (
        <Layout>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={5} style={{ maxWidth: '600px', padding: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid item xs={6} md={6}>
                            <CardMedia
                                component="img"
                                style={{ height: 'auto', objectFit: 'cover' }}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <CardContent style={{ textAlign: 'center', color: 'red' }}>
                                <Typography variant="h5" gutterBottom>
                                    {movie.title}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Layout>
    );
};

export default MovieDetail;
