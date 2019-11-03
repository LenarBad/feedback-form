import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {Rating, RatingToText} from 'appConstants';

import {Values} from './types';
import {validation} from './validation';

import cssCommon from 'styles/common.module.css';
import {products} from "data/products";


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
            marginTop: '24px'
        },
        title: {
            fontWeight: 'bold',
        }
    }),
);

interface Props {
    onChange: (arg: {
        values: Values;
        isValid: boolean;
    }) => void;

    initialValues?: any;
}

function ProductForm({onChange, initialValues}: Props) {
    const classes = useStyles();
    const [values, setValues] = React.useState<Values>(initialValues || {
        product: '',
        datePurchase: null,
        rating: '',
        wasUsed: '',
    });

    const handleDateChange = (date: Date | null) => {
        setValues(oldValues => ({
            ...oldValues,
            datePurchase: date,
        }));
    };
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const {name, value} = event.target;

        setValues(oldValues => ({
            ...oldValues,
            [name as string]: value,
        }));
    };

    React.useEffect(() => {
        onChange({
            values,
            isValid: validation(values),
        })
    }, [values, onChange]);

    return (
        <>
            <Typography variant="h6" gutterBottom className={classes.title}>
                PLEASE TELL US WHICH PRODUCT YOU'RE PURCHASED
            </Typography>

            <Grid container direction="column" spacing={5} className={classes.grid}>
                <Grid item xs={12}>
                    <div className={cn(cssCommon.signFormField, cssCommon.requireField)}>Which product did you purchase ?</div>

                    <InputLabel htmlFor="product-name"/>
                    <Select
                        className={classes.select}
                        value={values.product}
                        onChange={handleChange}
                        inputProps={{
                            name: 'product',
                            id: 'product-name',
                        }}
                    >
                        {products.map(it => <MenuItem key={it.code} value={it.code}>{it.name}</MenuItem>)}
                    </Select>
                </Grid>

                <Grid item xs={12}>
                    <div className={cn(cssCommon.signFormField, cssCommon.requireField)}>Date Purchased</div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            name="datePurchase"
                            value={values.datePurchase}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            maxDate={new Date()}
                            minDate={new Date('2019-06-01')}
                            autoOk
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12}>
                    <RadioGroup aria-label="rating" value={values.rating.toString()} onChange={handleChange}>
                        <FormControlLabel value={Rating.VERY_SATISFIED} control={<Radio/>} name="rating"
                                          label={RatingToText(Rating.VERY_SATISFIED)}/>
                        <FormControlLabel value={Rating.SOMEWHAT_SATISFIED} control={<Radio/>} name="rating"
                                          label={RatingToText(Rating.SOMEWHAT_SATISFIED)}/>
                        <FormControlLabel value={Rating.NEITHER_SATISFIED_NOR_DISSATISFIED} name="rating"
                                          control={<Radio/>}
                                          label={RatingToText(Rating.NEITHER_SATISFIED_NOR_DISSATISFIED)}/>
                        <FormControlLabel value={Rating.SOMEWHAT_DISSATISFIED} control={<Radio/>} name="rating"
                                          label={RatingToText(Rating.SOMEWHAT_DISSATISFIED)}/>
                        <FormControlLabel value={Rating.VERY_DISSATISFIED} control={<Radio/>} name="rating"
                                          label={RatingToText(Rating.VERY_DISSATISFIED)}/>
                    </RadioGroup>
                </Grid>

                <Grid item xs={12}>
                    <div className={cn(cssCommon.signFormField, cssCommon.requireField)}>Have you been using this product for at least 7 days ?
                    </div>

                    <RadioGroup aria-label="have using" value={values.wasUsed} onChange={handleChange}>
                        <FormControlLabel value="Yes" control={<Radio/>} name="wasUsed" label="Yes"/>
                        <FormControlLabel value="No" control={<Radio/>} name="wasUsed" label="No"/>
                    </RadioGroup>
                </Grid>

            </Grid>
        </>
    );
}

export default ProductForm;
