import React from "react";
import {
  Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid, IconButton,
  Paper,
  Typography
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './main.styles.css'

const Main = () => {
  return (
    <main>
      <Paper className="mainFeature"
             style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <div className={"overlay"}/>
          <Grid container>
            <Grid item md={6}>
              <div className={"mainFeaturePostContent"}>
                <Typography component={"h1"}
                            variant={"h3"}
                            color={"inherit"}
                            gutterBottom>
                  Find job
                </Typography>
                <Typography
                  component={"h5"}
                  color={"inherit"}
                  paragraph>
                  React js стала революционной библиотекой в мире Frontend разработки. Для того что б стать junior
                  javascript разработчиком одно из требований знание данной библиотеки и умение верстать сайты. В этом
                  видео я на практике покажу как происходит верстка сайта
                </Typography>
                <Button variant={"contained"} color={"secondary"}>Find</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={"mainContent"}>
        <Container maxWidth={"md"}>
          <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
            Actual Jobs
          </Typography>
          <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>
            React js стала революционной библиотекой в мире Frontend разработки. Для того что б стать junior
            javascript разработчиком одно из требований знание данной библиотеки и умение верстать сайты. В этом
            видео я на практике покажу как происходит верстка сайта
          </Typography>
          <div className={"mainButtons"}>
            <Grid container spacing={5} justify={"center"}>
              <Grid item>
                <Button variant={"contained"} color={"primary"}>Active</Button>
              </Grid>
              <Grid item>
                <Button variant={"outlined"} color={"primary"}>Active</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={"cardGrid"}>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card className={"card"}>
                <CardActionArea>
                  <CardMedia
                    className={"media"}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon/>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Container>
    </main>
  )
}
export default Main
