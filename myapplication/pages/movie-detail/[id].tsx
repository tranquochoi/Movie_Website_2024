import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Typography,
    CardMedia,
    CircularProgress,
    Stack,
    Paper,
    Rating,
    Tab,
    Tabs,
} from '@mui/material';
import Layout from '@/components/landing_page/layout';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MovieDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<{
        title: string;
        poster_path: string;
        backdrop_path: string;
        vote_average: number;
        overview: string;
        runtime: number;
        release_date: string;
        reviews: string[];
        cast: { name: string; avatar: string }[];
        
    } | null>(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(`/movie/${id}?language=en-US&append_to_response=reviews,credits`,);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
            }
        };

        if (id) {
            fetchMovieDetail();
        }
    }, [id]);

    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    

    if (!movie) {
        return <CircularProgress style={{ marginTop: '20px', minHeight: '100vh' }} />;
    }

    return (
        <Layout>
            <Stack
                direction="column"
                spacing={2}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#242A32',
                    padding: '20px',
                }}
            >
                <CardMedia
                    component="img"
                    style={{ height: 'auto', objectFit: 'cover', borderRadius: '4px' }}
                    image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <Stack direction="row" spacing={2}>
                    <CardMedia
                        component="img"
                        style={{ height: '100px', width: 'auto', borderRadius: '4px' }}
                        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                        <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
                            {movie.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="body1" style={{ color: 'white' }}>
                                <StarBorderIcon sx={{ fontSize: 30, color: 'orange' }} /> {movie.vote_average}
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarTodayIcon style={{ color: 'white', marginRight: '5px' }} />
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {movie.release_date}
                            </Typography>
                            <AccessTimeIcon style={{ color: 'white', marginLeft: '10px', marginRight: '5px' }} />
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {movie.runtime} mins
                            </Typography>
                        </Stack>

                        
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="About Movie" />
                            <Tab label="Reviews" />
                            <Tab label="Cast" />
                        </Tabs>

                        
                        <Box>
                            {value === 0 && (
                                <Typography variant="body1" style={{ color: 'white' }}>
                                    {movie.overview}
                                </Typography>
                            )}

                            
                             {/* {value === 1 && (
                                <Stack direction="column">
                                    {movie.reviews.map((review, index) => (
                                        <Typography key={index} variant="body1" style={{ color: 'white' }}>
                                            {review}
                                        </Typography>
                                    ))}
                                </Stack>
                            )}
                            {value === 2 && (
                                <Stack direction="column">
                                    {movie.cast.map((actor, index) => (
                                        <Box key={index} display="flex" flexDirection="column" alignItems="center">
                                            <img
                                                src={actor.avatar}
                                                alt={actor.name}
                                                style={{ borderRadius: '50%', width: '60px', height: '60px' }}
                                            />
                                            <Typography variant="body2" style={{ color: 'white', marginTop: '5px' }}>
                                                {actor.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            )}  */}
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default MovieDetail;
