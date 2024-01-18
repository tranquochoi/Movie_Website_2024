import React from 'react';
import InputBase from '@mui/material/InputBase';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const router = useRouter();

    const handleSearchClick = () => {
        router.push('/movie-search');
    };

    return (
        <div
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                padding: '2px',
                width: '100%',
            }}
            onClick={handleSearchClick}
        >
            <InputBase
                sx={{
                    borderRadius: '16px',
                    background: '#3A3F47',
                    width: '100%',
                    height: '42px',
                    color: '#67686D',
                    padding: '8px',
                    border: '1px solid #67686D',
                    cursor: 'pointer',
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <img
                src="/Search (1).png"
                alt="Search"
                style={{
                    width: '15.807px',
                    height: '16px',
                    position: 'absolute',
                    top: '50%',
                    right: '15px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                }}
            />
        </div>
    );
};

export default SearchBar;
