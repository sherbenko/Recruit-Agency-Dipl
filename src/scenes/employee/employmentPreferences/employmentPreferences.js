import React from 'react'
import Typography from "@material-ui/core/Typography";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    makeStyles,
    Paper, Radio, RadioGroup,
    TextField
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({

    contactInformation: {
        display: 'flex',
        flexWrap: 'wrap',

        justifyContent: 'start',
        padding: '10px',
        paddingLeft: '30px'
    },
    textInput: {
        margin: '10px',

    },
    languageTextInput: {
        margin: '5px',
    },

    sectionName: {
        paddingTop: '20px'
    },
    sectionEducation: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    contactInformationTitle: {
        color: '#1f3c5a',
        fontSize: '15px',
        fontFamily: 'alternate-gothic-no-3-d, sans-serif',
        paddingTop: '16px',
        paddingLeft: '35px',
        fontWeight: 'bold'
    },
    willingToRelocateTitle: {
        color: '#1f3c5a',
        fontSize: '15px',
        fontFamily: 'alternate-gothic-no-3-d, sans-serif',
        paddingTop: '16px',
        paddingLeft: '0px',
        fontWeight: 'bold'
    },
    relocateRadioButtonContainer: {
        paddingTop: '15px'
    },
    relocateRadioButton: {
        paddingLeft: '20px'
    },
    checkboxPreferencesContainer: {

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: '15px',
        paddingLeft: '30px'

    },
    preferencesTitle: {
        color: '#1f3c5a',
        fontSize: '15px',
        fontFamily: 'alternate-gothic-no-3-d, sans-serif',
        paddingTop: '16px',
        paddingLeft: '10px',
        fontWeight: 'bold'
    },
    preferencesItem:{
        flex: '0 0 32%'
    }


}));
const EmploymentPreferences = () => {
    const classes = useStyles();
    const compensationProps = {
        options: ['$20,000', '$25,000', '$30,000', '$35,000', '$40,000'].map((option) => option),
    };
    const willingsProps = {
        options: ['Up to 10%', 'Up to 15%', 'Up to 20%', 'Up to 25%', 'Up to 30%'].map((option) => option),
    };
    const [willingToRelocate, setWillingToRelocate] = React.useState('no');

    const handleChangeWillingToRelocate = (event) => {
        setWillingToRelocate(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <Typography gutterBottom variant="h5" component="h2" className={classes.sectionName}>
                Employment Preferences
            </Typography>
            <Paper elevation={3}>
                <div className={classes.contactInformation}>
                    <Grid item xs={12} sm={10} md={10} className={classes.textInput}>
                        <TextField fullWidth required id="name" label="Ideal location"/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className={classes.textInput}>
                        <Autocomplete
                            {...compensationProps}
                            id="open-on-focus"

                            renderInput={(params) => <TextField {...params} label="Minimum compensation"
                                                                margin="normal"/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className={classes.textInput}>
                        <Autocomplete
                            {...willingsProps}
                            id="open-on-focus"

                            renderInput={(params) => <TextField {...params} label="Willingness to travel"
                                                                margin="normal"/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className={classes.textInput}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="flex-start">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Availability date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className={classes.textInput}>
                        <div className={classes.willingToRelocateTitle}>Willing to Relocate</div>
                        <FormControl component="fieldset">
                            <RadioGroup name="relocate" value={willingToRelocate}
                                        onChange={handleChangeWillingToRelocate} row
                                        className={classes.relocateRadioButtonContainer}>
                                <FormControlLabel value="yes" control={<Radio/>} label="Yes"
                                                  className={classes.relocateRadioButton}/>
                                <FormControlLabel value="no" control={<Radio/>} label="No"
                                                  className={classes.relocateRadioButton}/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={10} md={10}>
                        <div className={classes.preferencesTitle}>Employment Types</div>
                        <div className={classes.checkboxPreferencesContainer}>
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <FormControlLabel
                                className={classes.preferencesItem}
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                        </div>
                    </Grid>

                </div>


            </Paper>

        </>
    )
}
export default EmploymentPreferences