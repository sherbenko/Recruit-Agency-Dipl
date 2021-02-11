import React from "react";
import Typography from "@material-ui/core/Typography";
import {Checkbox, FormControlLabel, Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import HtmlEditor from "../../../utills/htmlEditor/htmlEditor";
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
  },
  htmlEditor:{
    padding: '20px ',
    '@media (max-width:450px)': {
      padding:'5px'
    },
  }


}));
const OrganizationProfileInformation = () => {
  const classes = useStyles();

  return(
    <>
      <Typography gutterBottom variant="h5" component="h2" className={classes.sectionName}>
        Organization Information
      </Typography>
      <Paper elevation={3}>
        <div className={classes.contactInformationTitle}>About organization</div>
        <div className={classes.contactInformation}>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="name" label="Organization name" defaultValue="Centene Corporation"/>
          </Grid>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="webSite" label="WebSite" defaultValue="www.vk.com"/>
          </Grid>
          <Grid item xs={12} sm={4} md={5} className={classes.textInput}>
            <TextField fullWidth required id="address" label="street address" defaultValue="Ulyanovskaya"/>
          </Grid>
        </div>

        <div className={classes.contactInformation}>
          <Grid item xs={12} sm={3} md={3} className={classes.textInput}>
            <TextField fullWidth required id="email" type="email" label="email" defaultValue="ilyaSherbenko@mail.ru"/>
          </Grid>
          <Grid item xs={12} sm={4} md={3} className={classes.textInput}>
            <TextField fullWidth required label="country" defaultValue="Belarus"/>
          </Grid>
          <Grid item xs={12} sm={4} md={5} className={classes.textInput}>
            <TextField fullWidth required label="city" defaultValue="Mozyr"/>
          </Grid>
        </div>

        <div className={classes.contactInformationTitle}>Description</div>
        <div className={classes.htmlEditor}>
          <TextField
            // label={t('employersJobs.newJob.positionDescription.label')}
            name="description"
            type="text"
            // fullWidth
            value={''}
            required
            // onChange={onChange}
            multiline
            rows={3}
            rowsMax={7}
            InputProps={{
              inputComponent: HtmlEditor,
              // inputProps: {
              //   name:"job_description",
              //   content: data.description || '',
              //   resetHtmlEditorBorder: classes.resetHtmlEditorBorder,
              //   onChange
              // },
            }}
            // InputLabelProps={{
            //   classes: {root: classes.subTitle, shrink: classes.subTitleShrink}
            // }}
            // helperText={descriptionError.touched && descriptionError.text}
            // error={descriptionError.touched && !!descriptionError.text}
          />
        </div>

      </Paper>

    </>
  )
}
export default OrganizationProfileInformation