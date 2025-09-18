import React from 'react'
import Box from '@mui/material/Box';
import IconBar from './IconBar/IconBar';
import MenuBar from './MenuBar/MenuBar';

const Sidebar = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <IconBar />
            <MenuBar />
        </Box>
    )
}

export default Sidebar;