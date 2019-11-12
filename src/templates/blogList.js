import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import clsx from 'clsx';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';

// NATIVE COMPONENTS
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import Searchbar from '../components/Searchbar';
import Tags from '../components/Tags';
import BlogCard from '../components/blog/BlogCard';

// Pagination component
import Paginate from '../components/blog/Paginate';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1300px',
    margin: 'auto',
    padding: theme.spacing(4, 2),
    color: '#c5c1b9',
    boxSizing: 'border-box',
  },
  section: {
    display: 'Grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
    '& > article': {
      backgroundColor: 'inherit',
      color: '#c5c1b9',
    },
  },
  aside: {
    backgroundColor: 'green',
    position: 'relative',
    flexShrink: 1,
    padding: theme.spacing(8, 2),
  },
}));

const BlogList = (props) => {
  const classes = useStyles();

  const {
    data: { allpost },
    pageContext: { currentPage, numPages },
  } = props;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  console.log(allpost.nodes);
  return (
    <Layout>
      <SEO title="Blog | Tutorials on Javascript, React, Nodejs, Firebase and more web developments" />

      <Grid container spacing={6} className={classes.root} component="section">
        <Grid item xs={12} lg={8} component="section">
          <Grid item component="section" className={classes.section}>
            {allpost ? allpost.nodes.map((post) => <BlogCard post={post} />) : '...fetching Data'}
          </Grid>

          <Paginate
            isFirst={isFirst}
            isLast={isLast}
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            numPages={numPages}
          />
        </Grid>

        <Grid item xs={12} lg={4} component="aside" className={classes.aside}>
          <Searchbar />
          {['React', 'Node', 'Firebase', 'app security'].map((tag) => (
            <Tags tag={tag} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export const BlogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allpost: allContentfulBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: timestamp, order: DESC }
    ) {
      nodes {
        id
        author {
          bio
          name
          avatar {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        blogImage {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        title
        timestamp(formatString: "MMMM Do YYYY")
        description
      }
    }
  }
`;

export default BlogList;
