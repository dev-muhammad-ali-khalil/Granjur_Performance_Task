import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { iconMapping } from '../../../utils/icons';

const topIcons = [
  {
    name: 'Academics',
    icon: iconMapping['academics'],
  },
  {
    name: 'Donations',
    icon: iconMapping['donations'],
  }
]

const bottomIcons = [
  {
    name: 'Profile',
    icon: iconMapping['profile'],
  },
  {
    name: 'Logout',
    icon: iconMapping['logout'],
  }
]

const IconBar = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        height: '100%',
        boxShadow: '0px 2px 16px 0px #EAEDEB',
        padding: '24px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '1px',
          height: '100%',
          backgroundColor: '#EAEDEB',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {
          topIcons.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxSizing: 'border-box',
              }}
            >
              <IconButton
                aria-label={item.name}
                sx={{
                  backgroundColor: index === 0 ? '#944BF6' : '#EAEDEB',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                  padding: '12px',
                  transition: 'backgroundColor 0.2s',
                  '&:hover': {
                    backgroundColor: index === 0 ? '#944BF6' : '#EAEDEB',
                  },
                  '&:active': {
                    backgroundColor: index === 0 ? '#944BF6' : '#EAEDEB',
                  },
                }}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
              </IconButton>
              <Typography
                variant="caption"
                sx={{
                  color: index === 0 ? '#944BF6' : '#212121',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '-1.9%',
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))
        }
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {
          bottomIcons.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxSizing: 'border-box',
              }}
            >
              <IconButton
                aria-label={item.name}
                sx={{
                  backgroundColor: '#EAEDEB',
                  borderRadius: '999px',
                  boxSizing: 'border-box',
                  padding: '10px',
                  transition: 'backgroundColor 0.2s',
                  '&:hover': {
                    backgroundColor: '#EAEDEB',
                  },
                  '&:active': {
                    backgroundColor: '#EAEDEB',
                  },
                }}
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
              </IconButton>
              <Typography
                variant="caption"
                sx={{
                  color: '#484B48',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '-1.9%',
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default IconBar;