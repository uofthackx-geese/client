import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerThing: {
        paddingLeft: '20px',
        width: '100%',
        height: '900px',
        backgroundColor: 'black',
    },
    mySpan: {
        color: 'white',
    },
    head1: {
        color: 'white',
        width: '500px',
        justifyContent: 'center',
    },
    head2: {
        color: 'white',
    },
    label: {
        color: 'white',
        justifyContent: 'center',
    },
    btn: {
        width: '60px',
        height: '30px',
        fontWeight: 'bold',
        backgroundColor: 'lightcoral',
        fontSize: '20px',
    },
})

export const Login = () => {
    console.log('in login');

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <h1 className={classes.head1}>[Name of App]</h1>

                <br></br>

                <h2 className={classes.head2}>Login</h2>

                <form>
                    <label className={classes.label} for="username">Username: </label>
                    <input type="text" id="username"></input>

                    <br></br>

                    <label className={classes.label} for="password">Password: </label>
                    <input type="password" id="password"></input>

                    <br></br>
                    <br></br>
                    <br></br>
                    <button className={classes.btn}>Go!</button>
                </form>
            </div>
        </div>
    )
}