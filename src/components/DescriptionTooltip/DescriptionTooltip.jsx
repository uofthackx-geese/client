import React from "react";
import { HtmlTooltip } from "./HtmlTooltip";
import { Typography } from '@mui/material'

export const DescriptionTooltip = ({
    title,
    description,
    children,
}) => {
    return (
        <HtmlTooltip title={
            <>
                <Typography color="inherit">{title}</Typography>
                <Typography color="inherit">{description}</Typography>
            </>
        }>
            {children}
        </HtmlTooltip>
    )
}
