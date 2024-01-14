import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from "swr";
import Layout from '@/components/landing_page/layout';
import NavDetail from '@/components/landing_page/NavDetail';
import TabDetail from '@/components/landing_page/TabDetail';
import { Box } from '@mui/material';


export default function Detail() {
  return (
    <>
    <NavDetail />
    <Box>
        àhshagfj
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