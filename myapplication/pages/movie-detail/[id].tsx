import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from "swr";
import Layout from '@/components/landing_page/layout';
import { NextPageWithLayout } from '../_app';
import NavDetail from '@/components/landing_page/NavDetail';
import TabDetail from '@/components/landing_page/TabDetail';
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { Movies } from './Models/Movies';
import config from '@/config';

const Detail: NextPageWithLayout = () => {
    const router = useRouter();
    const id=router.query.id;
    const { data, isLoading, error } = useSWR<Movies>(
        `/movie/${id}?language=en-US&append_to_response=videos,credits`
      );
    return (
        <>
            <NavDetail />
            <Box>
                fgsdf

            </Box>

            <TabDetail />
        </>
    )
}

Detail.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Detail;