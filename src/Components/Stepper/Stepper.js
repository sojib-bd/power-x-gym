import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MembershipForm from '../MembershipForm/MembershipForm';
import CheckoutForm from '../DemoForm/DemoForm';


import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin: '50px'
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
           
        },
    }),
);

function getSteps() {
    return ['step1', 'step2', 'Thank you'];
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return <MembershipForm/>
        case 1:
            return (
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            )
        case 2:
            return <MembershipForm/>;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>            
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
              </Button>
                                <Button variant="contained" color="primary" onClick={handleNext} style={{marginLeft:'50px'}}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}