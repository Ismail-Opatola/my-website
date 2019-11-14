import React from 'react';
import Img from 'gatsby-image';
import clsx from 'clsx';
// NATIVE COMPONENTS

import { FaTwitter, FaLinkedin } from 'react-icons/fa';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import MuiLink from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'inline-block',
    boxShadow: 'none',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
    '& h2': {
      lineHeight: 1.2,
      fontSize: 30,
      fontWeight: 800,
      margin: theme.spacing(4, 0, 1, 0),
      color: '#c5c1b9',
    },
    '& small': {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  small: {
    color: '#c5c1b9',
  },
  post_link: {
    '&:hover': {
      color: '#c5c1b9',
    },
  },
  cardContent: {
    padding: theme.spacing(1, 0, 4, 0),
  },
  author_box: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& small': {
      fontWeight: 300,
      marginRight: theme.spacing(2),
      '& > span > a': {
        color: '#ef6474',
      },
    },
  },
  ul: {
    display: 'flex',
    width: '100%',
    '& > li:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  },
  li: {
    display: 'inline-block',
    width: '100%',
    fontSize: theme.typography.fontSize,
    lineHeight: 0,
    textAlign: 'center',
    '&:hover ': {
      cursor: 'pointer',
    },
    "& > a": {
      display: "block",
      margin: 0,
      padding: "auto",
      width: "100%"
    }
  },
  li_twitter: {
    backgroundColor: 'rgb(56, 161, 243)',
    '&:hover ': {
      backgroundColor: lighten('rgb(56, 161, 243)', 0.2),
    },
  },
  li_linkedin: {
    backgroundColor: 'rgb(0, 119, 181)',
    '&:hover ': {
      backgroundColor: lighten('rgb(0, 119, 181)', 0.2),
    },
  },
  description: {
    marginTop: theme.spacing(2),
    color: '#c5c1b9',
  },
}));

export default function BlogCard({ post }) {
  const classes = useStyles();

  return (
    <Card raised={false} component="article" key={post.id} className={classes.card}>
      <Link alt={post.title} to={`/${post.slug}`} className={classes.post_link}>
        <CardMedia
          component={Img}
          alt={post.blogImage.title}
          title={post.blogImage.title}
          fluid={post.blogImage.fluid}
          height="140"
          src={post.blogImage.fluid.src}
        />
        <Typography component="h2">{post.title}</Typography>
        <Typography gutterBottom component="small" className={classes.small}>
          {post.timestamp}
.
        </Typography>
      </Link>

      <CardContent className={classes.cardContent}>
        <Box className={classes.author_box}>
          <Typography component="small">
            By
            {' '}
            <span>
              <MuiLink
                href="https://twitter.com/opatolaismail"
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.author.name}
              </MuiLink>
            </span>
          </Typography>
          <Avatar component={Img} fluid={post.author.avatar.fluid} alt={post.author.avatar.title} />
        </Box>
        <List className={classes.ul}>
          <ListItem className={clsx(classes.li, classes.li_linkedin)} key="linkedin">
            <MuiLink
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ismailopatola.io/${post.slug}&title=${post.title}&source=${post.title}`}
            >
              <FaLinkedin size={23} color="#fff" />
            </MuiLink>
          </ListItem>
          <ListItem className={clsx(classes.li, classes.li_twitter)} key="twitter">
            <MuiLink
              href={`https://twitter.com/intent/tweet/?text=${post.title}&url=https://ismailopatola.io/${post.slug}%2F&via=opatolaismail`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={23} color="#fff" />
            </MuiLink>
          </ListItem>
        </List>

        <Typography gutterBottom color="textSecondary" className={classes.description}>
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
