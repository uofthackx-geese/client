import React from "react";
import { HtmlTooltip } from "./HtmlTooltip";
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        fontSize: '20px',
        textAlign: 'center',
        textDecoration: 'underline',
    }
});

export const DescriptionTooltip = ({
    title,
    description,
    children,
}) => {
    const classes = useStyles();

    return (
        <HtmlTooltip title={
            <>
                <Typography color="inherit" className={classes.title}>{title}</Typography>
                <Typography color="inherit">{description}</Typography>
            </>
        }>
            {children}
        </HtmlTooltip>
    )
}
