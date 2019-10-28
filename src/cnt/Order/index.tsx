import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {UsaState} from 'appConstants';

import {Values} from './types';
import {validation} from './validation';

import cssCommon from 'styles/common.module.css';
import TextField from "@material-ui/core/TextField";

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

interface Props {
    onChange: (arg: {
        values: Values;
        isValid: boolean;
    }) => void;

    initialValues?: Values;
}

function Order({onChange, initialValues}: Props) {
    const classes = useStyles();
    const [values, setValues] = React.useState<Values>(initialValues || {
        first: '',
        last: '',
        orderNumber: '',
        email: '',
        street: '',
        city: '',
        zipCode: '',
        usaState: '',
        consentToSpecialOffer: 'Yes',
    });


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
                PLEASE ENTER YOUR INFORMATION WITH YOUR AMAZON ORDER NUMBER
            </Typography>


            <Grid container direction="column" spacing={5} className={classes.grid}>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="first"
                        name="first"
                        label="First Name"
                        onChange={handleChange}
                        value={values.first}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="last"
                        name="last"
                        label="Last Name"
                        onChange={handleChange}
                        value={values.last}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="orderNumber"
                        name="orderNumber"
                        label="Amazon Order Number (Include Dashes)"
                        onChange={handleChange}
                        value={values.orderNumber}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="email"
                        name="email"
                        label="Email Address"
                        onChange={handleChange}
                        value={values.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="street"
                        name="street"
                        label="Street Address"
                        onChange={handleChange}
                        value={values.street}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="city"
                        name="city"
                        label="City"
                        onChange={handleChange}
                        value={values.city}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="zipCode"
                        name="zipCode"
                        label="Zip Code"
                        onChange={handleChange}
                        value={values.zipCode}
                    />
                </Grid>


                <Grid item xs={12}>
                    <div className={cssCommon.signFormField}>State</div>

                    <InputLabel htmlFor="usaState"/>
                    <Select
                        className={classes.select}
                        value={values.usaState}
                        onChange={handleChange}
                        inputProps={{
                            name: 'usaState',
                            id: 'usaState',
                        }}
                    >
                        {makeItemsOfState()}
                    </Select>
                </Grid>


                <Grid item xs={12}>
                    <div className={cssCommon.signFormField}>Please send me special offers and samples.</div>

                    <RadioGroup aria-label="have using" value={values.consentToSpecialOffer} onChange={handleChange}>
                        <FormControlLabel value="Yes" control={<Radio/>} name="consentToSpecialOffer" label="Yes"/>
                        <FormControlLabel value="No" control={<Radio/>} name="consentToSpecialOffer" label="No"/>
                    </RadioGroup>
                </Grid>

            </Grid>
        </>
    );
}

export default Order;

function makeItemsOfState(): React.ReactNodeArray {
    return Object.entries(UsaState).map(it => <MenuItem key={it[0]} value={it[0]}>{it[1]}</MenuItem>);
}
