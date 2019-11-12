import React from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// Pagination component

import { makeStyles } from '@material-ui/core/styles';
import { lighten, fade } from '@material-ui/core/styles/colorManipulator';
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  button_group: {
    margin: theme.spacing(4, 0),
    flexShrink: 1,
    padding: 0,
  },
  button: {
    color: (props) => (props.i + 1 === props.currentPage && '#ffffff') || theme.palette.secondary.main,
    background: (props) => props.i + 1 === props.currentPage && lighten('#000', 0.2),
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    borderRadius: 0,
    '&:hover': {
      background: (props) => props.i + 1 !== props.currentPage && fade(theme.palette.secondary.main, 0.1),
    },
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
  const classes = useStyles();
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
    );
  }

  if (blog_post) {
    return (
      <ButtonGroup fullWidth size="small" color="secondary" className={classes.button_group}>
        {previousPost && (
        <Button component={Link} to={previousPost.slug} rel="prev">
            ←{' '}{previousPost.title}
        </Button>
        )}
        {nextPost && (
        <Button component={Link} to={nextPost.slug} rel="nextPost">
          {nextPost.title}{' '}→
        </Button>
        )}
      </ButtonGroup>
    );
  }
}
