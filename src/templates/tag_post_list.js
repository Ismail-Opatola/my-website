import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// NATIVE COMPONENTS
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import BlogCard from '../components/blog/BlogCard';
import BlogLayout from '../components/blog/BlogLayout';
import Paginate from '../components/blog/Paginate';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'Grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gridRowGap: theme.spacing(8),
    gridColumnGap: theme.spacing(4),
    '& > article': {
      backgroundColor: 'inherit',
      color: '#c5c1b9',
    },
  },
}));

const TagPage = (props) => {
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
      <SEO
        title="Blog | Tutorials on Javascript, React, Nodejs, Firebase and more web developments"
        slug="https://ismailopatola.io/blog"
      />

      <BlogLayout {...props}>
        <Grid item component="section" className={classes.section}>
          {allpost ? allpost.nodes.map((post) => <BlogCard post={post} key={post.id} />) : '...fetching Data'}
        </Grid>

        <Paginate
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          numPages={numPages}
          tag_list
        />
      </BlogLayout>
    </Layout>
  );
};

// TODO: use tag-slug to fetch posts 
export const TagQuery = graphql`
  query TagQuery($skip: Int!, $limit: Int!, $slug: String!) {
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

export default TagPage;

TagPage.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.shape({ 
    allpost: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    })
   }),
  pageContext: PropTypes.shape({ 
    currentPage: PropTypes.number, 
    numPages: PropTypes.number 
  }),
}