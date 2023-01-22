import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid, TextField, Box } from "@mui/material";

export const CustomTextInput = ({ maxWidth = '256px', autoFocus = false, width = '256px', defaultText, pathOnEnter, password = false }) => {
    const navigate = useNavigate();
    const [currentInput, setCurrentInput] = useState("");

    const doNavigate = () => {
        if (currentInput) {
            navigate(pathOnEnter);
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            doNavigate()
        }
    }

    return (
        <Box sx={{padding: '8px'}}>
            <Grid container sx={{width: '100%', maxWidth: maxWidth, borderRadius: '6px', background: '#FFF'}}>
                <Grid item xs={10}>
                    <TextField 
                        color='primary'
                        label={currentInput ? "" : defaultText}
                        size="small" 
                        onInput={e => setCurrentInput((e.target).value)}
                        autoFocus={autoFocus}
                        InputProps={{
                            onKeyDown: handleKeyPress,
                        }}
                        InputLabelProps={{
                            shrink: false,
                            color: "primary",
                        }}
                        sx={{
                            width: width,
                            "& fieldset": { border: 'none' },
                            "& label.Mui-focused": {
                                color: 'rgba(0, 0, 0, 0.6)' 
                            },
                        }}
                        type={password ? 'password' : 'text'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
