import React from "react";
import {
  Typography,
  AppBar,
  Container,
  CssBaseline,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Button,
  Box,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const cards = require("./videos.json");

export default function Album() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Bobby Galvan</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Video Portfolio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Productions I have been a part of and credit showing my
              contribution. For complete lists of cast a crew fill out a contact
              form.
            </Typography>
            {/* <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Recent
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Commercial
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Music Video
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"https://img.youtube.com/vi/" + card.vid + "/0.jpg"}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {card.name}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <a href={"https://www.youtube.com/watch?v=" + card.vid}>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </a>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright of Bobby Galvan
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Website built by me with React.
        </Typography>
      </footer>
    </>
  );
}
