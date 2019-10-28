import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

import img from 'assets/765632.png';

import {Values} from './types';
import cssCommon from "../../styles/common.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


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

        select: {
            minWidth: '300px'
        },

        date: {
            minWidth: '300px'
        },

        grid: {
            marginTop: '48px'
        },
        title: {
            fontWeight: 'bold',
        },

        containerIngLogo: {
            display: 'flex',
            justifyContent: 'center'
        },
    }),
);

interface Props {
    onChange?: (arg: {
        values: Values;
        isValid: boolean;
    }) => void;

    initialValues?: any;
}

function Review({onChange, initialValues}: Props) {
    const classes = useStyles();
    // const [values, setValues] = React.useState<Values>(initialValues || {
    //     product: '',
    //     date: null,
    //     impression: '',
    //     wasUsed: '',
    // });

    const handleChange = () => {};


    // React.useEffect(() => {
    //     onChange({
    //         values,
    //         isValid: validation(values),
    //     })
    // }, [values, onChange]);

    return (
        <>
            <Typography variant="h6" gutterBottom className={classes.title}>
                PLEASE TELL US WHICH FREE PRODUCT YOU'D LIKE TO RECEIVE.
            </Typography>

            <Grid container direction="column" spacing={5}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="product-name"/>
                    <Select
                        className={classes.select}
                        value={'asdasd'}
                        onChange={handleChange}
                        inputProps={{
                            name: 'product',
                            id: 'product-name',
                        }}
                    >
                        <MenuItem value="Product 1">Product 1</MenuItem>
                        <MenuItem value="Product 2">Product 2</MenuItem>
                        <MenuItem value="Product 3">Product 3</MenuItem>
                    </Select>
                </Grid>
            </Grid>


            <Typography variant="h6" gutterBottom className={cn(classes.title, classes.grid)}>
                PLEASE SHARE YOUR EXPERIENCE!
            </Typography>

            <Grid container direction="column" spacing={5}>
                <Grid item xs={12}>
                    We would love to earn your product feedback! You can copy your review below and share your product
                    experience on Amazon. It would really help our business. Thank you!
                </Grid>

                <Grid item xs={12} className={classes.containerIngLogo}>
                    <img src={img} alt="image of amazon logo"/>
                </Grid>

                <Grid item xs={12} className={classes.containerIngLogo}>
                    Review / Comments (Minimum 150 characters to be eligible for your free item)
                </Grid>





            </Grid>


        </>
    );
}

export default Review;
