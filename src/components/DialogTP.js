import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"

export const DialogTP = ({isVisible, setIsVisible, payload, handleDeleteDestination}) => {
    return (
        <Dialog open={isVisible} onBackdropClick={() => setIsVisible(false)}>
            <DialogTitle style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
                <div>{payload?.title}</div>
                {payload?.isDelete && <button onClick={() => {setIsVisible(false); handleDeleteDestination(payload?.city, payload?.title, payload?.dest_id);}} style={{cursor: 'pointer', padding: '5px'}}>DELETE</button>}
            </DialogTitle>
            <DialogContent>
                <div>{payload?.description}</div>
                <div>{payload?.imageURL && <img src={payload.imageURL} style={{width: '100%', height: '250px', objectFit: 'contain', marginTop: '20px'}}/>}</div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogTP