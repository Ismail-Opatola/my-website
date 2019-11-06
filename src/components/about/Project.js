/* eslint-disable quotes */
import React from "react";
import MuiLink from '@material-ui/core/Link';
// import Img from "gatsby-image"
// import BackgroundImage from "gatsby-background-image"
import clsx from "clsx";

import {
  makeStyles,
  // createMuiTheme,
  // MuiThemeProvider,
  // responsiveFontSizes,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "../Link";



const useStyles = makeStyles((theme) => ({
  project_info_section: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  project_image_box: {
    maxWidth: 620,
    minHeight: 240,
    margin: "auto",
    marginBottom: theme.spacing(8),
    overflow: "hidden",
    transition: "box-shadow 300ms ease",
    cursor: "pointer",
    border: ".5rem solid #181a1b",
    "&:hover ": {
      boxShadow: "0 5px 32px rgba(94, 74, 110, 0.2)",
    },
  },
  project_info_box: {
    color: "#c5c1b9",
    fontSize: 19,
    lineHeight: 1.4,
    maxWidth: 640,
    fontWeightLight: 300,
    margin: "auto",

    "& .title": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 19,
      fontStyle: "Bold",
      fontWeight: 600,
      marginBottom: theme.spacing(3),
      textDecoration: "underline",
    },
    "& .description": {
      marginBottom: theme.spacing(3),
    },
    "& h5": {
      fontSize: 16,
      fontStyle: "Bold",
      fontWeight: 600,
    },
  },
  li: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  project_features: {
    marginBottom: theme.spacing(1),
  },
}));

const Project = ({ project, projectImg }) => {
  const classes = useStyles();
  const xtra_sm = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  return (
    <>
      <Box className={classes.project_info_section}>
        <Paper className={classes.project_image_box} elevation={5}>
          {/* <Img fluid={projectImg ? projectImg : null} className="project_image" /> */}
        </Paper>

        <Box className={classes.project_info_box}>
          <Typography component="h4" className={clsx("title", "fonty-purple")} gutterBottom>
            {project.title ? project.title : null}
          </Typography>

          <Typography className="description" gutterBottom paragraph>
            {project.description ? project.description : null}
          </Typography>

          <Grid
            container
            component="aside"
            spacing={xtra_sm ? 2 : 4}
            direction="row"
            wrap="nowrap"
            justify="flex-start"
            className={classes.project_features}
          >
            <Grid item xs={6}>
              <Typography component="h5" display="block">
                Tech Stack
              </Typography>
              <List>
                {project.techStack
                  && project.techStack.map((tech) => (
                    <ListItem className={classes.li} key={tech}>
                      {tech}
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h5" display="block">
                features
              </Typography>
              <List>
                {project.features
                  && project.features.map((feature) => (
                    <ListItem className={classes.li} key={feature}>
                      {feature}
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
          <ButtonGroup
            variant="outlined"
            color="secondary"
            size="small"
            // className={classes.project_info_cta}
          >
            {project.links.websiteUrl && (
              <Button
                // className="cta-btn"
                component={MuiLink}
                href={project.links.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Button>
            )}
            {project.links.youtubeDemo && (
              <Button
                // className="cta-btn"
                component={MuiLink}
                href={project.links.youtubeDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Button>
            )}
            {project.links.sourceCode && (
              <Button
                className="cta-btn"
                component={MuiLink}
                href={project.links.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default Project;
