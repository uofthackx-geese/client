import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerThing: {
        width: '100%',
        height: '800px',
        backgroundColor: 'black',
    },
    content: {
        marginTop: '15%',
    },
    head1: {
        color: 'rgb(12, 155, 198)',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    head2: {
        color: 'white',
        width: '100%',
        textAlign: 'center'
    },
    btn: {
        width: '120px',
        height: '60px',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'lightblue',
        borderRadius: '25px',
        fontSize: '40px',
    },
    signin: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: '24px',
    }
})

export const CountryPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <div className={classes.content}>
                    <h1 className={classes.head1}>Enter Country of Interest!</h1>

                    <br></br>

                    <div>
                        <form className={classes.signin}>
                            <input className={classes.input} type="text" id="username" size="25" placeholder="Enter country here!"></input>

                            <br></br>

                            <br></br>
                            <br></br>
                            <br></br>
                            <button className={classes.btn}>Go!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
