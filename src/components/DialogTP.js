import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"

export const DialogTP = ({isVisible, setIsVisible, payload, handleDeleteDestination}) => {
    return (
        <Dialog open={isVisible} onBackdropClick={() => setIsVisible(false)}>
            <DialogTitle style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
                <div>{payload?.title}</div>
                <button onClick={() => {setIsVisible(false); handleDeleteDestination(payload?.city, payload?.title, payload?.dest_id);}} style={{cursor: 'pointer', padding: '5px'}}>DELETE</button>
            </DialogTitle>
            <DialogContent>{payload?.description}</DialogContent>
        </Dialog>
    )
}

export default DialogTP