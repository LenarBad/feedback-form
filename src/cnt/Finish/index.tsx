import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },

        input: {
            minWidth: '400px'
        },

        select: {
            minWidth: '400px'
        },

        grid: {
            marginTop: '24px'
        },
        title: {
            fontWeight: 'bold',
        }
    }),
);


function Finish() {
    const classes = useStyles();


    return (
        <>
            <Typography variant="h6" gutterBottom className={classes.title}>
                THANK YOU!
            </Typography>


            <Grid container direction="column" spacing={5} className={classes.grid}>
                <Grid item xs={12}>
                    We value your time and appreciate your business. One of our customers support representatives will
                    reach out to you soon. Enjoy your free item!
                </Grid>

                <Grid item xs={12}>

                    ....... another text ............
                    <br/>
                    you must show the date these offers are valid and bla bla bla
                </Grid>


            </Grid>
        </>
    );
}

export default Finish;
