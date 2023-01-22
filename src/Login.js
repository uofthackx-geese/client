import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material';
import { CustomTextInput } from './components/CustomTextInput';
import Header from './components/Header'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightblue',
    },
    head2: {
        color: 'black',
        width: '100%',
        textAlign: 'center',
        textDecoration: 'underline',
    },
    btn: {
        width: '60px',
        height: '30px',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'whitesmoke',
        fontSize: '20px',
    },
    signin: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '125px'
    },
    whiteTextField: {
        backgroundColor: 'white',
    }
})

export const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/chooseCountry');
    }

    return (
        <>
            <div className={classes.container}>
                <form className={classes.signin}>
                    <h2 className={classes.head2}>Login</h2>
                    <CustomTextInput defaultText='Username' pathOnEnter={'/chooseCountry'}/>
                    <CustomTextInput defaultText='Password' pathOnEnter={'/chooseCountry'} password/>
                    <Button onClick={handleButtonClick} variant='contained' sx={{marginTop: '10px'}}>Log In</Button>
                </form>
            </div>
            <Header/>
        </>
    )
}
