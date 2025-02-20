import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const CompanyLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default CompanyLayout;