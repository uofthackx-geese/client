import React from 'react'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} sx={{ opacity: 'inherit' }} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 350,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      opacity: 'inherit',
    },
  }));
