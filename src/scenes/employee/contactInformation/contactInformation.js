import React from "react";
import {Checkbox, FormControlLabel, Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

  contactInformation: {
    display: 'flex',
    flexWrap: 'wrap',

    justifyContent: 'center',
    padding: '10px'
  },
  textInput: {
    margin: '10px',
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
  }


}));
const ContactInformation = () => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom variant="h5" component="h2" className={classes.sectionName}>
        Personal Information
      </Typography>
      <Paper elevation={3}>
        <div className={classes.contactInformationTitle}>Contact Information</div>
        <div className={classes.contactInformation}>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="name" label="first name" defaultValue="ILya"/>
          </Grid>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="surname" label="last name" defaultValue="Sherbenko"/>
          </Grid>
          <Grid item xs={12} sm={4} md={5} className={classes.textInput}>
            <TextField fullWidth required id="address" label="street address" defaultValue="Ulyanovskaya"/>
          </Grid>
        </div>

        <div className={classes.contactInformation}>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="email" type="email" label="email" defaultValue="ilyaSherbenko@mail.ru"/>
          </Grid>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required label="mobile phone" defaultValue="+375333333"/>
          </Grid>
          <Grid item xs={12} sm={4} md={5} className={classes.textInput}>
            <TextField fullWidth required label="city" defaultValue="Mozyr"/>
          </Grid>
        </div>

        <div className={classes.contactInformationTitle}>Gender</div>
        <div className={classes.contactInformation}>

          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Female"
          />
        </div>
      </Paper>

    </>
  )

}
export default ContactInformation