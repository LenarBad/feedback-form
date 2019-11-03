import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Product from 'cnt/Product';
import Copyright from 'cmp/Copyright';
import {Values as ProductValues} from 'cnt/Product/types';
import Order from 'cnt/Order';
import {Values as OrderValues} from 'cnt/Order/types';
import Finish from 'cnt/Finish';
import Review from 'cnt/Review';
import {Values as ValuesReview} from 'cnt/Review/types';

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['', '', '', ''];

/**
 * App
 */
export default function App() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const [globalData, setGlobalData] = React.useState<any>([undefined, undefined, undefined]);

    // stub data
    // const [globalData, setGlobalData] = React.useState<any>([
    //     {
    //         isValid: true,
    //         values: {
    //             product: 'product_2',
    //             datePurchase: new Date().setDate(3),
    //             rating: 5,
    //             wasUsed: 'Yes'
    //         },
    //     },
    //     {
    //         isValid: true,
    //         values: {
    //             first: 'First',
    //             last: 'Last',
    //             orderNumber: '2341234-2342134',
    //             email: 'email@email.email',
    //             street: 'streeeeeet',
    //             city: 'ciiiiity',
    //             zipCode: 'zzzzzipCode',
    //             usaState: 'Colorado',
    //             consentToSpecialOffer: 'Yes'
    //         }
    //     },
    //     {
    //         isValid: true,
    //         values: {
    //             reviewText: 'asdfasdfasf asdf jasfasdfasdf asf asfasfausfaspfasf;asg[ as g;sgifgsfdfgsget wtk lwtwkrth werte rtwer[ twertwertewr[[wyrtyerw[tewrot ert welrt werptweortowertwoertwet;;;gsfhasidgpfasgi[ashfgasdfgsidfgsdf;gasdf;gatqy[rafg3[qwrgyh;asghaus[gqw[ ptyqaw[[[[gsy;igasß§',
    //             freeProduct: 'product_3',
    //         }
    //     }]);

    /**
     * for product
     */
    const handleChangeDataProduct = React.useCallback((data: { values: ProductValues; isValid: boolean; }) => {
        setGlobalData((d: any) => {
            const nextData = d.slice();
            nextData[0] = data;
            return nextData;
        });
    }, []);

    /**
     * for Data Order
     */
    const handleChangeDataOrder = React.useCallback((data: { values: OrderValues; isValid: boolean; }) => {
        setGlobalData((d: any) => {
            const nextData = d.slice();
            nextData[1] = data;
            return nextData;
        });
    }, []);

    /**
     * for review
     */
    const handleChangeReview = React.useCallback((data: { values: ValuesReview; isValid: boolean; }) => {
        setGlobalData((d: any) => {
            const nextData = d.slice();
            nextData[2] = data;
            return nextData;
        });
    }, []);

    const getStepContent = (step: any) => {
        switch (step) {
            case 0:
                return <Product onChange={handleChangeDataProduct}
                                initialValues={globalData[0] && globalData[0].values ? globalData[0].values : undefined}/>;
            case 1:
                return <Order onChange={handleChangeDataOrder}
                              initialValues={globalData[1] && globalData[1].values ? globalData[1].values : undefined}/>;
            case 2:
                return <Review onChange={handleChangeReview} onNextStep={handleNext}
                               rating={globalData[0] && globalData[0].values && globalData[0].values.rating}
                               initialValues={globalData[2] && globalData[2].values ? globalData[2].values : undefined}/>;
            case 3:
                return <Finish globalData={globalData} />;
            default:
                throw new Error('Unknown step');
        }
    };

    return (
        <>
            <CssBaseline/>

            <main className={classes.layout}>
                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h4" align="center">
                        Thank you for your purchase
                    </Typography>

                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <>
                        {activeStep === steps.length ? (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </>
                        ) : (
                            <>
                                {getStepContent(activeStep)}

                                <div className={classes.buttons}>
                                    {(activeStep === 1) && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    {activeStep <= 1 && <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                        disabled={!(globalData[activeStep] && globalData[activeStep].isValid)}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'CONTINUE'}
                                    </Button>}
                                </div>
                            </>
                        )}
                    </>
                </Paper>

                <Copyright/>
            </main>
        </>
    );
}
