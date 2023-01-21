import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"

export const DialogTP = ({isVisible, setIsVisible, payload}) => {
    return (
        <Dialog open={isVisible} onBackdropClick={() => setIsVisible(false)}>
            <DialogTitle>{payload?.title}</DialogTitle>
            <DialogContent>{payload?.description}</DialogContent>
        </Dialog>
    )
}

export default DialogTP