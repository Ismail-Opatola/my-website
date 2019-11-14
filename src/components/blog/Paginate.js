import React from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Pagination component

import { makeStyles } from '@material-ui/core/styles';
import { lighten, fade } from '@material-ui/core/styles/colorManipulator';
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  button_group: {
    // blog_list
    margin: theme.spacing(6, 0, 4, 0),
    display: (props) => props.blog_list && 'flex',
    flexShrink: (props) => props.blog_list && 1,
    padding: 0,

    // blog_post
    display: (props) => props.blog_post && 'grid',
    gridTemplateRows: (props) => props.blog_post && '1fr 1fr',
    gridTemplateColumns: (props) => props.blog_post && '1fr',
  },
  button: {
    // blog_list_number_btn
    color: (props) => (props.i + 1 === props.currentPage && '#ffffff') || theme.palette.secondary.main,
    background: (props) => props.i + 1 === props.currentPage && lighten('#000', 0.2),
    border: (props) => props.blog_list &&`1px solid ${fade(theme.palette.secondary.main, 0.5)}`,

    // blog_post
    border: (props) => props.blog_post && `1px solid transparent`,
    textAlign: (props) => props.blog_post && `center`,
    borderRadius: 0,
    '&:hover': {
      background: (props) => props.i + 1 !== props.currentPage && fade(theme.palette.secondary.main, 0.1),
    },
  },
  fakeAssThickLine: {
    margin: 'auto',
    marginTop: theme.spacing(8),
    height: theme.spacing(0.5),
    width: theme.spacing(5),
    backgroundColor: lighten(theme.palette.background.default, 0.1),
    borderRadius: 30,
  },
}));

function MyButton({
  children, key, to, i, currentPage,
}) {
  const { button } = useStyles({ i, currentPage });
  return (
    <Button className={button} key={key} to={to} component={Link}>
      {children}
    </Button>
  );
}

export default function Paginate(props) {
  const classes = useStyles(props);
  const {
    nextPage,
    currentPage,
    prevPage,
    numPages,
    isLast,
    isFirst,
    blog_list = false,
    blog_post = false,
    previousPost,
    nextPost,
  } = props;

  if (blog_list) {
    return (
      <>
      <Box className={classes.fakeAssThickLine} />
      <ButtonGroup fullWidth size="small" color="secondary" className={classes.button_group}>
        {!isFirst && (
          <Button component={Link} to={`/blog/${prevPage}`} rel="prev">
            ← Previous Page
          </Button>
        )}
        {numPages
          && Array.from({ length: numPages }, (_, i) => (
            <MyButton
              key={`pagination-number${i + 1}`}
              to={`/blog/${i === 0 ? '' : i + 1}`}
              i={i}
              currentPage={currentPage}
            >
              {i + 1}
            </MyButton>
          ))}
        {!isLast && (
          <Button component={Link} to={`/blog/${nextPage}`} rel="next">
            Next Page →
          </Button>
        )}
      </ButtonGroup>
      </>
    );
  }

  if (blog_post) {
    return (
      <>
      <Box className={classes.fakeAssThickLine} />

      <ButtonGroup size="small" color="secondary" className={classes.button_group}>
        {previousPost && (
          <Button component={Link} to={previousPost.slug} rel="prev" className={classes.button}>
            ←
            {' '}
            {previousPost.title}
          </Button>
        )}
        {nextPost && (
          <Button component={Link} to={nextPost.slug} rel="nextPost" className={classes.button}>
            {nextPost.title}
            {' '}
→
          </Button>
        )}
      </ButtonGroup>
      </>
    );
  }
}
