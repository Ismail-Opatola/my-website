import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// CONTENTFUL
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken, fade } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

// CUSTOM COMPONENTS
import clsx from 'clsx';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import MuiLink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import BlogLayout from '../components/blog/BlogLayout';
import Paginate from '../components/blog/Paginate';
import CodeHighlighter from '../components/blog/CodeHighlighter';

// NATIVE COMPONENTS

// import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';

// import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '620px',
    width: '100%',
    margin: 'auto',

    '& h1': {
      lineHeight: 1.2,
      fontSize: 30,
      fontWeight: 800,
      margin: theme.spacing(0, 0, 1, 0),
      color: '#c5c1b9',
    },
    '& h2, h3': {
      fontWeight: 800,
    },
    '& small': {
      fontSize: 14,
      fontWeight: 600,
      color: '#c5c1b9',
    },
    '& pre': {
      fontSize: theme.typography.fontSize,
      backgroundColor: `${darken('#1F2123', 0.1)} !important`,
    },
  },
  author_box: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& small': {
      fontWeight: 300,
      marginRight: theme.spacing(2),
      '& > span > a': {
        // color: theme.palette.secondary.main,
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
    '& > a': {
      display: 'block',
      margin: 0,
      padding: 'auto',
      width: '100%',
    },
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
  blogImage: {
    maxWidth: 620,
    // minHeight: 240,
    margin: 'auto',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    overflow: 'hidden',
    transition: 'box-shadow 300ms ease',
    border: '.5rem solid #181a1b',
    backgroundColor: '#181a1b',

    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  OL_LIST: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.fontSize,
    backgroundColor: `${darken('#1F2123', 0.1)} !important`,
  },
  blockCode: {
    '& > pre': {
      maxWidth: '620px !important',
      width: '100% !important',
      height: 'auto',
      margin: '4rem auto !important',
      borderLeft: '3px solid',
      borderColor: theme.palette.primary.main,

      '& > code': {
        width: '100% !important',
        [theme.breakpoints.down('xs')]: {
          marginRight: '0px !important',
          paddingRight: '0px !important',
        },
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.fontSize - 4,
        paddingRight: '0px !important',
      },
    },
  },
  inlineCode: {
    '& > pre': {
      display: 'inline !important',
      padding: '3px !important',
      backgroundColor: `${theme.palette.primary.main} !important`,
      '& > code': {
        width: '100% !important',
      },
    },
  },
}));

export default function BlogPost(props) {
  const classes = useStyles();
  const {
    pageContext: { previousPost, nextPost },
    data: { post },
  } = props;

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: (node) => {
  //       const alt = node.data.target.fields.title['en-US'];
  //       const { url } = node.data.target.fields.file['en-US'];
  //       return url && <Img alt={alt} src={url} />;
  //     },
  //   },
  // };
  // determine which prism to render based on tags

  let language = 'javascript';

  if (post.tags.includes('ruby')) {
    language = 'ruby';
  }
  if (post.tags.includes('java')) {
    language = 'java';
  }
  if (post.tags.includes('c++')) {
    language = 'c++';
  }

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <span className={classes.inlineCode}>
          <CodeHighlighter language={language} code={text} />
        </span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Typography component="h1" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Typography component="h2" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Typography component="h3" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Typography component="h4" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Typography component="h5" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Typography component="h6" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // @return code block
        const { content, nodeType, value } = node;
        // check if the paragraph is a code
        const vo = content[0].marks[0] && content[0].marks[0].type;
        // if true check for the code content
        const code_text_value = vo && content[0].value;
        // @return code Component: if true
        if (code_text_value) {
          return (
            <Box className={classes.blockCode}>
              <CodeHighlighter language={language} code={code_text_value} />
            </Box>
          );
        }

        // @return paragraph block
        return <Typography paragraph>{children}</Typography>;
      },
      [BLOCKS.OL_LIST]: (node, children) => (
        <List className={classes.OL_LIST} component="ol">
          {children}
        </List>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.HR]: (node, children) => <Divider>{children}</Divider>,
      [BLOCKS.QUOTE]: (node, children) => (
        <Typography component="quote" paragraph>
          {children}
        </Typography>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const contentTypes = file['en-US'].contentType;
        const contentGroups = contentTypes.split('/')[0];
        const t = title['en-US'];
        const f = file['en-US'].url;

        switch (contentGroups) {
          case 'image':
            return (
              <Paper
                style={{
                  maxWidth: '620px',
                  height: 'auto',
                  margin: '4rem auto',
                }}
              >
                <img alt={title && t} src={f} width="100%" />
              </Paper>
            );
          // return <Paper><Img alt={title && t} fluid={{ src: f }} /></Paper>;
          default:
            return null;
        }
      },
    },
  };

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        ogpImage={post.blogImage}
        slug={post.slug}
      />
      <BlogLayout {...props}>
        <Box className={classes.root} component="section">
          {' '}
          <Typography component="h1">{post.title}</Typography>
          <Typography component="small">{post.timestamp}</Typography>
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
            <Avatar
              component={Img}
              fluid={post.author.avatar.fluid}
              alt={post.author.avatar.title}
            />
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
          <Paper className={classes.blogImage}>
            <Img alt={post.blogImage.title} fluid={post.blogImage.fluid} />
          </Paper>
          <Box component="article">{documentToReactComponents(post.body.json, options)}</Box>
        </Box>
        <Paginate previousPost={previousPost} nextPost={nextPost} blog_post />
      </BlogLayout>
    </Layout>
  );
}

export const BlogPostQuery = graphql`
  query blogPostQuery($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      timestamp(formatString: "MMMM Do YYYY")
      description
      tags
      blogImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
      }
      body {
        json
      }
      author {
        bio
        name
        avatar {
          fluid {
            src
          }
          title
        }
      }
    }
  }
`;

// Blog.propTypes = {
//   data: PropTypes.shape({
//     contentfulBlogPost: PropTypes.shape({
//       title: PropTypes.string,
//       publishedDate: PropTypes.string,
//       body: PropTypes.shape({
//         json: PropTypes.json
//       })
//     })
//   })
// };

// yarn add @madebyconnor/rich-text-to-jsx
// more flexible alternative to contentful/rich-tesxt
