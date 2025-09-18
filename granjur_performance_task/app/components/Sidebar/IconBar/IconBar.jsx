'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { iconMapping } from '../../../utils/mapping';

const topIcons = [
  {
    name: 'Academics',
    defaultIcon: iconMapping['academics'],
    activeIcon: iconMapping['academics'],
  },
  {
    name: 'Donations',
    defaultIcon: iconMapping['donationsDark'],
    activeIcon: iconMapping['donationsLight'],
  }
]

const bottomIcons = [
  {
    name: 'Profile',
    defaultIcon: iconMapping['profile'],
  },
  {
    name: 'Logout',
    defaultIcon: iconMapping['logout'],
  }
]

const IconBar = (props) => {
  const { isCollapsed } = props;
  const [isHovered, setIsHovered] = useState({});

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
        transform: isCollapsed ? 'translateX(-100%)' : 'translateX(0)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 1,
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
            <Link
              key={index}
              href="#"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={() => setIsHovered({ [index]: true })}
                onMouseLeave={() => setIsHovered({ [index]: false })}
              >
                <Box
                  sx={{
                    backgroundColor:
                      index === 0 ?
                        '#944BF6' :
                        isHovered[index] ? '#944BF6' : '#EAEDEB',
                    borderRadius: '16px',
                    boxSizing: 'border-box',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.1s',
                  }}
                >
                  <Image
                    src={isHovered[index] ? item.activeIcon : item.defaultIcon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      index === 0 ?
                        '#944BF6' :
                        isHovered[index] ? '#944BF6' : '#212121',
                    fontSize: '12px',
                    fontWeight: 600,
                    lineHeight: '100%',
                    letterSpacing: '-1.9%',
                    transition: 'color 0.1s',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
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
            <Link
              key={index}
              href="#"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  boxSizing: 'border-box',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#EAEDEB',
                    borderRadius: '999px',
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image src={item.defaultIcon} alt={item.name} width={20} height={20} />
                </Box>
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
            </Link>
          ))
        }
      </Box>
    </Box>
  )
}

export default IconBar;