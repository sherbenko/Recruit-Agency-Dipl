import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import {Link, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  organizationDescriptionContainer: {
    marginLeft: '10px',
    minHeight: '210px',
    width: '100%',
    // display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
    '@media (max-width:960px)': {
      marginLeft: '0px',
      marginTop: '10px'
    },

  },
  organizationLogo: {
    width: '250px',
    height: '250px',
    margin: '0 auto',
    padding: '16px'
  },
  orgLink: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '16px'
  },
  jobNameTitle: {
    color: '#30acff',
    fontWeight: '500',
    fontSize: '28px',
    fontFamily: 'Oswald, sans-serif',
    marginLeft: '0px',
  },
  aboutOrganization: {
    padding: '30px 15px 30px',
    textAlign: 'left',
    fontSize: '17px',
    fontWeight: '400',
    fontFamily: 'Oswald, sans-serif'
  },
  organizationLink: {
    color: '#30acff',
    fontSize: '17px',
    fontWeight: '500',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif',
  }
}))

const JobPageOrganizationCard = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.organizationDescriptionContainer}>
      {/*<strong className={classes.jobOrganizationTitle}>Contact Information</strong>*/}
      <Avatar alt="Remy Sharp" variant="square" src="https://source.unsplash.com/random"
              className={classes.organizationLogo}/>
      <div className={classes.orgLink}>
        <Link href="#" className={classes.jobNameTitle}>
          Eaton
        </Link>
      </div>
      <div className={classes.aboutOrganization}>
        <p>
          We make what matters work. Everywhere you look—from the technology and machinery that surrounds us, to the
          critical services and infrastructure that we depend on every day—you’ll find one thing in common. It all
          relies on power. That’s why Eaton is dedicated to improving people’s lives and the environment with power
          management technologies that are more reliable, efficient, safe and sustainable. Because this is what
          matters.
        </p>
        <br/>
        <p>
          At Eaton, we value many of the skills and competencies that you gained in your military career.
          Leadership, discipline, creativity, integrity and teamwork – these are our values too. As we aspire to be
          a model of inclusion and diversity in our industry, we embrace the different ideas, perspectives and
          backgrounds that make each of us unique. We create an environment that fosters learning and teaching,
          allowing employees to reach their full potential—and where you can help us reach ours.
        </p>
        <br/>
        <p>For more information,visit <Link href="#"
                                            className={classes.organizationLink}>www.eaton.com/militarycareers</Link>
        </p>
      </div>
    </Paper>
  )
}
export default JobPageOrganizationCard