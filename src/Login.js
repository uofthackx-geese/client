import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerThing: {
        width: '100%',
        height: '900px',
        backgroundColor: 'lightblue',
    },
    head1: {
        color: 'black',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    head2: {
        color: 'black',
        width: '100%',
        textAlign: 'center'
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
    }
})

export const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <h1 className={classes.head1}>[Name of App]</h1>

                <br></br>

                <h2 className={classes.head2}>Login</h2>

                <br></br>

                <div>
                    <form className={classes.signin}>
                        <label for="username">Username</label>
                        <input type="text" id="username"></input>

                        <br></br>

                        <label for="password">Password</label>
                        <input type="password" id="password"></input>

                        <br></br>
                        <br></br>
                        <br></br>
                        <button className={classes.btn}>Go!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
