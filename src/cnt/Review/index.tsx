import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors';

import img from 'assets/765632.png';

import {Values} from './types';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {hasMinRating, Rating} from 'appConstants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },

        select: {
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
        textField: {
            // marginLeft: theme.spacing(1),
            // marginRight: theme.spacing(1),
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
        },

        wrapBtn: {
            display: 'flex',
            justifyContent: 'center',
        },
    }),
);

const ColorButtonAmazon = withStyles(theme => ({
    root: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#3785D3',
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const ColorButton = withStyles(theme => ({
    root: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#1C1C1C',
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

interface Props {
    onChange: (arg: {
        values: Values;
        isValid: boolean;
    }) => void;

    initialValues?: any;
    rating?: Rating;

    onNextStep(): void;
}

function Review({onChange, initialValues, onNextStep, rating}: Props) {
    const classes = useStyles();
    const [values, setValues] = React.useState<Values>(initialValues || {
        reviewText: '',
        freeProduct: '',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const {name, value} = event.target;
        setValues(oldValues => ({
            ...oldValues,
            [name as string]: value,
        }));
    };

    const canToNextStep = values.reviewText.length >= 150 && values.freeProduct;
    const charactersLeft = values.reviewText.length < 150 ? 150 - values.reviewText.length : 0;

    React.useEffect(() => {
        onChange({
            values,
            isValid: true,
        })
    }, [values, onChange]);

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
                        value={values.freeProduct}
                        onChange={handleChange}
                        inputProps={{
                            name: 'freeProduct',
                            id: 'free-product',
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
                    <img src={img} alt="of amazon logo"/>
                </Grid>

                <Grid item xs={12}>
                    Review / Comments (Minimum 150 characters to be eligible for your free item)

                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax="8"
                        value={values.reviewText}
                        onChange={handleChange}
                        className={classes.textField}
                        margin="normal"
                        name="reviewText"
                        rows={3}
                    />

                    {charactersLeft > 0 &&
                    <div style={{color: 'gray', fontSize: '14px', marginTop: '-10px'}}>left: {charactersLeft}</div>}
                </Grid>

                {rating && hasMinRating(rating, Rating.SOMEWHAT_SATISFIED) &&
                    <Grid item xs={12} className={classes.wrapBtn}>
                        <ColorButtonAmazon onClick={() => {
                        }} variant="contained">
                            CLICK POST A REVIEW ON AMAZON
                        </ColorButtonAmazon>
                    </Grid>
                }

                <Grid item xs={12} className={classes.wrapBtn}>
                    <ColorButton onClick={onNextStep} variant="contained" disabled={!canToNextStep}>
                        SUBMIT AND GET YOUR FREE ITEM!
                    </ColorButton>
                </Grid>

                <Grid item xs={12}>
                    Limit one free item per household or customer. Offer only valid with full-priced purchases. Proof of
                    purchase from an authorized retailer required.
                    No additional purchase is necessary.........
                </Grid>
            </Grid>


        </>
    );
}

export default Review;
