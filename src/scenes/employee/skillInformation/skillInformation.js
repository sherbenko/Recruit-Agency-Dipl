import React from "react";
import Typography from "@material-ui/core/Typography";
import {Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  }


}));
const SkillInformation = () => {
  const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'City of God', year: 2002},
    {title: 'Se7en', year: 1995},
    {title: 'The Silence of the Lambs', year: 1991},
    {title: "It's a Wonderful Life", year: 1946},
    {title: 'Life Is Beautiful', year: 1997},
    {title: 'The Usual Suspects', year: 1995},
    {title: 'Léon: The Professional', year: 1994},
    {title: 'Spirited Away', year: 2001},
    {title: 'Saving Private Ryan', year: 1998},
    {title: 'Once Upon a Time in the West', year: 1968},
    {title: 'American History X', year: 1998},
    {title: 'Interstellar', year: 2014},
    {title: 'Casablanca', year: 1942},
    {title: 'City Lights', year: 1931},
    {title: 'Psycho', year: 1960},
    {title: 'The Green Mile', year: 1999},
    {title: 'The Intouchables', year: 2011},
    {title: 'Modern Times', year: 1936},
    {title: 'Raiders of the Lost Ark', year: 1981},
    {title: 'Rear Window', year: 1954},
    {title: 'The Pianist', year: 2002},
    {title: 'The Departed', year: 2006},
    {title: 'Terminator 2: Judgment Day', year: 1991},
    {title: 'Back to the Future', year: 1985},
    {title: 'Whiplash', year: 2014},
    {title: 'Gladiator', year: 2000},
    {title: 'Memento', year: 2000},
    {title: 'The Prestige', year: 2006},
    {title: 'The Lion King', year: 1994},
    {title: 'Apocalypse Now', year: 1979},
    {title: 'Alien', year: 1979},
    {title: 'Sunset Boulevard', year: 1950},
    {title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964},
    {title: 'The Great Dictator', year: 1940},
    {title: 'Cinema Paradiso', year: 1988},
    {title: 'The Lives of Others', year: 2006},
    {title: 'Grave of the Fireflies', year: 1988},
    {title: 'Paths of Glory', year: 1957},
    {title: 'Django Unchained', year: 2012},
    {title: 'The Shining', year: 1980},
    {title: 'WALL·E', year: 2008},
    {title: 'American Beauty', year: 1999},
    {title: 'The Dark Knight Rises', year: 2012},
    {title: 'Princess Mononoke', year: 1997},
    {title: 'Aliens', year: 1986},
    {title: 'Oldboy', year: 2003},
    {title: 'Once Upon a Time in America', year: 1984},
    {title: 'Witness for the Prosecution', year: 1957},
    {title: 'Das Boot', year: 1981},
    {title: 'Citizen Kane', year: 1941},
    {title: 'North by Northwest', year: 1959},
    {title: 'Vertigo', year: 1958},
    {title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983},
    {title: 'Reservoir Dogs', year: 1992},
    {title: 'Braveheart', year: 1995},
    {title: 'M', year: 1931},
    {title: 'Requiem for a Dream', year: 2000},
    {title: 'Amélie', year: 2001},
    {title: 'A Clockwork Orange', year: 1971},
    {title: 'Like Stars on Earth', year: 2007},
    {title: 'Taxi Driver', year: 1976},
    {title: 'Lawrence of Arabia', year: 1962},
    {title: 'Double Indemnity', year: 1944},
    {title: 'Eternal Sunshine of the Spotless Mind', year: 2004},
    {title: 'Amadeus', year: 1984},
    {title: 'To Kill a Mockingbird', year: 1962},
    {title: 'Toy Story 3', year: 2010},
    {title: 'Logan', year: 2017},
    {title: 'Full Metal Jacket', year: 1987},
    {title: 'Dangal', year: 2016},
    {title: 'The Sting', year: 1973},
    {title: '2001: A Space Odyssey', year: 1968},
    {title: "Singin' in the Rain", year: 1952},

  ];
  const classes = useStyles();
  const defaultProps = {
    options: ['top100Films', 'eeeeeeeeee', 'top100Films', 'top100Films', 'top100Films'].map((option) => option),
  };
  const levelProps = {
    options: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((option) => option),
  };
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2" className={classes.sectionName}>
        Skills
      </Typography>
      <Paper elevation={3}>
        <div className={classes.contactInformationTitle}>Language</div>
        <div className={classes.contactInformation}>
          <Grid item xs={12} sm={5} md={5} className={classes.textInput}>
            <Autocomplete
              {...defaultProps}
              id="open-on-focus"

              renderInput={(params) => <TextField {...params} label="Native Language" margin="normal"/>}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5} className={classes.textInput}>
            <Autocomplete
              {...levelProps}
              id="open-on-focus"

              renderInput={(params) => <TextField {...params} label="Native Language Level"
                                                  margin="normal"/>}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5} className={classes.textInput}>
            <Autocomplete
              {...defaultProps}
              id="open-on-focus"

              renderInput={(params) => <TextField {...params} label="Foreign Languages Spoken"
                                                  margin="normal"/>}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5} className={classes.textInput}>
            <Autocomplete
              {...levelProps}
              id="open-on-focus"

              renderInput={(params) => <TextField {...params} label="Foreign Languages Spoken Level"
                                                  margin="normal"/>}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={10} className={classes.textInput}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={[top100Films[13]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Add Skills"
                  placeholder="Favorites"
                />
              )}
            />
          </Grid>
        </div>


      </Paper>

    </>
  )
}
export default SkillInformation