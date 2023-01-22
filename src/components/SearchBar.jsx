import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid, IconButton, TextField, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { restartTP } from "../pages/ExplorePage/api";

export const SearchBar = ({ maxWidth = '280px', autoFocus = false, width = '256px', defaultText, }) => {
    const navigate = useNavigate();
    const [countryInput, setCountryInput] = useState("");

    const doSearch = () => {
        if (countryInput) {
            navigate(`/explore/${countryInput}`);
        }
    }
    const handleClick = () => {
        restartTP()
        doSearch()
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            doSearch()
        }
    }

    return (
        <Box sx={{padding: '8px'}}>
            <Grid container sx={{width: '100%', maxWidth: maxWidth, borderRadius: '6px', background: '#FFF'}}>
                <Grid item xs={10}>
                    <TextField 
                        color='primary'
                        label={countryInput ? "" : defaultText}
                        size="small" 
                        onInput={e => setCountryInput((e.target).value)}
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
                    />
                </Grid>
                <Grid item xs={2} container alignItems="center" justifyContent="flex-end">
                    <IconButton onClick={handleClick} size="small">
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}
