import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// Runkit
// import Embed from "react-runkit"
// import useScript from "../hooks/useScript"
// import { Helmet } from "react-helmet"

// CONTENTFUL
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// MUI
import { makeStyles, lighten, darken } from "@material-ui/core/styles"
import MuiLink from "@material-ui/core/Link"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import Skeleton from "@material-ui/lab/Skeleton"
// FA-ICONS
import { FaTwitter, FaLinkedin, FaRedditAlien } from "react-icons/fa"
// CUSTOM COMPONENTS
import clsx from "clsx"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import BlogLayout from "../components/blog/BlogLayout"
import Paginate from "../components/blog/Paginate"
import CodeHighlighter from "../components/blog/CodeHighlighter"
import Comment from "../components/blog/Comment"

const useStyles = makeStyles(theme => ({
 root: {
  maxWidth: "620px",
  width: "100%",
  margin: "auto",
  boxSizing: "border-box",

  "& h1": {
   margin: theme.spacing(0, 0, 1, 0),
   color: "#c5c1b9",
  },
  "& h2, h3": {
   fontWeight: 800,
  },
  "& small": {
   fontSize: 14,
   fontWeight: 600,
   color: "#c5c1b9",
  },
  "& pre": {
   fontSize: theme.typography.fontSize,
   backgroundColor: `${darken("#1F2123", 0.1)} !important`,
   [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.fontSize - 3,
   },
  },
 },
 author_box: {
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& small": {
   fontWeight: 300,
   marginRight: theme.spacing(2),
   "& > span > a": {
    color: "#ef6474",
   },
  },
 },
 ul: {
  display: "flex",
  width: "100%",
  "& > li:not(:last-child)": {
   marginRight: theme.spacing(2),
  },
 },
 li: {
  display: "inline-block",
  width: "100%",
  fontSize: theme.typography.fontSize,
  lineHeight: 0,
  textAlign: "center",
  "&:hover ": {
   cursor: "pointer",
  },
  "& > a": {
   display: "block",
   margin: 0,
   padding: "auto",
   width: "100%",
  },
 },
 li_twitter: {
  background: `linear-gradient(to bottom, #41b7d8 0%, #2bacd0 100%)`,
  borderColor: `#238caa`,
  "&:hover ": {
   background: `linear-gradient(to bottom, #2bacd0 0%, #2bacd0 100%)`,
  },
  "&:active": {
   backgroundColor: `#269abb`,
  },
 },
 li_reddit: {
  background: `linear-gradient(to bottom, #ff5700 0%, #e04b00 100%)`,
  borderColor: `#b33b00`,
  "&:hover ": {
   background: `linear-gradient(to bottom, #e04b00 0%, #e04b00 100%)`,
  },
  "&:active": {
   backgroundColor: `#c73f00`,
  },
 },
 li_linkedin: {
  backgroundColor: "rgb(0, 119, 181)",
  "&:hover ": {
   backgroundColor: lighten("rgb(0, 119, 181)", 0.2),
  },
 },
 blogImage: {
  maxWidth: 620,
  margin: "auto",
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  overflow: "hidden",
  transition: "box-shadow 300ms ease",
  border: ".5rem solid #181a1b",
  backgroundColor: "#181a1b",

  "& img": {
   width: "100%",
   height: "auto",
  },
 },
 LIST: {
  marginBottom: theme.spacing(2),
  fontSize: theme.typography.fontSize,
  backgroundColor: `${darken("#1F2123", 0.1)} !important`,
 },
 OL_LIST: {},
 UL_LIST: {
  listStyle: "disc inside none",
 },
 blockCode: {
  display: "block",
  "& > pre": {
   maxWidth: "620px !important",
   width: "100% !important",
   height: "auto",
   margin: "4rem auto !important",
   borderLeft: "3px solid",
   borderColor: theme.palette.primary.main,

   "& > code": {
    width: "100% !important",
    // [theme.breakpoints.down("xs")]: {
    //  marginRight: "0px !important",
    //  //  margin: "4rem auto !important",
    //  margin: 0,
    //  paddingRight: "0px !important",
    // },

    //  test-code
    counterReset: "line",
   },

   //  [theme.breakpoints.down("xs")]: {
   //   fontSize: theme.typography.fontSize - 5,
   //   paddingRight: "0px !important",
   //  },
  },
 },
 inlineCode: {
  "& > pre": {
   display: "inline !important",
   padding: "3px !important",
   backgroundColor: `${theme.palette.primary.main} !important`,
   "& > code": {
    width: "100% !important",
   },
  },
 },
 Skeleton: {
  backgroundColor: lighten(theme.palette.background.default, 0.1),
 },
 post_article: {
  width: "100%",
  boxSizing: "border-box",
 },
}))

// ========================================
// POST
// ========================================

export function Post(props) {
 const { post, options, siteUrl, loading = false } = props
 const classes = useStyles()

 return loading ? (
  <Box className={classes.root} component="section">
   <Typography variant="h1">{post.title}</Typography>
   <Typography component="small">{post.timestamp}</Typography>
   <Box className={classes.author_box}>
    <Typography component="small">
     By{" "}
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
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}/${post.slug}&title=${post.title}&source=${post.title}`}
     >
      <FaLinkedin size={23} color="#fff" />
     </MuiLink>
    </ListItem>
    <ListItem className={clsx(classes.li, classes.li_twitter)} key="twitter">
     <MuiLink
      href={`https://twitter.com/intent/tweet/?text=${post.title}&url=${siteUrl}/${post.slug}%2F&via=opatolaismail`}
      rel="noopener noreferrer"
      target="_blank"
     >
      <FaTwitter size={23} color="#fff" />
     </MuiLink>
    </ListItem>
    <ListItem className={clsx(classes.li, classes.li_reddit)} key="reddit">
     <MuiLink
      href={`http://reddit.com/submit?url=${siteUrl}/${post.slug}&title=${post.title}`}
      rel="noopener noreferrer"
      target="_blank"
     >
      <FaRedditAlien size={23} color="#fff" />
     </MuiLink>
    </ListItem>
   </List>
   <Paper className={classes.blogImage}>
    <Img alt={post.blogImage.title} fluid={post.blogImage.fluid} />
   </Paper>
   <Box component="article" className={classes.post_article}>
    {documentToReactComponents(post.body.json, options)}
   </Box>
  </Box>
 ) : (
  <Box className={classes.root} component="section">
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={10}
    width="60%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="20%"
   />
   <Box className={classes.author_box}>
    <Skeleton className={classes.Skeleton} height={6} width="20%" />
    <Skeleton
     className={classes.Skeleton}
     disabledAnimate={false}
     variant="circle"
     width={10}
     height={10}
    />
   </Box>
   <List className={classes.ul}>
    <ListItem className={classes.li}>
     <Skeleton
      className={classes.Skeleton}
      disabledAnimate={false}
      variant="rect"
      height={10}
     />
    </ListItem>
    <ListItem className={classes.li}>
     <Skeleton
      className={classes.Skeleton}
      disabledAnimate={false}
      variant="rect"
      height={10}
     />
    </ListItem>
   </List>
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    variant="rect"
    height={190}
    width="100%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="100%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="100%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="70%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="90%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="50%"
   />
   <Skeleton
    className={classes.Skeleton}
    disabledAnimate={false}
    height={6}
    width="90%"
   />
  </Box>
 )
}

Post.propTypes = {
 classes: PropTypes.object,
 post: PropTypes.shape({
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.String),
  description: PropTypes.string.isRequired,
  blogImage: PropTypes.object,
  author: PropTypes.shape({
   bio: PropTypes.string,
   name: PropTypes.string.isRequired,
   avatar: PropTypes.shape({
    title: PropTypes.string,
    fluid: PropTypes.shape(PropTypes.any).isRequired,
   }).isRequired,
  }).isRequired,
  body: PropTypes.shape({
   json: PropTypes.shape(PropTypes.any).isRequired,
  }),
 }),
 siteUrl: PropTypes.string,
 options: PropTypes.object.isRequired,
 loading: PropTypes.bool.isRequired,
}

// ============================================
// BLOG POST
// ============================================

export default function BlogPost(props) {
 //  const embedRunkit = "https://embed.runkit.com"
 //  useScript(embedRunkit)

 const classes = useStyles()
 const {
  pageContext: { previousPost, nextPost },
  data: {
   site: {
    siteMetadata: { siteUrl },
   },
   path,
   post,
  },
 } = props

 //@determine which prism to render based on tags
 let language = "javascript"

 post.tags.map(tag => {
  if (tag.slug === "ruby") {
   language = "ruby"
  }
  if (tag.slug === "java") {
   language = "java"
  }
  if (tag.slug === "c++") {
   language = "c++"
  }
 })

 const options = {
  renderMark: {
   [MARKS.CODE]: text => (
    <span className={classes.inlineCode}>
     <CodeHighlighter language={language} code={text} />
    </span>
   ),
  },
  renderNode: {
   [BLOCKS.HEADING_1]: (node, children) => (
    <Typography variant="h1" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.HEADING_2]: (node, children) => (
    <Typography variant="h2" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.HEADING_3]: (node, children) => (
    <Typography variant="h3" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.HEADING_4]: (node, children) => (
    <Typography variant="h4" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.HEADING_5]: (node, children) => (
    <Typography variant="h5" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.HEADING_6]: (node, children) => (
    <Typography variant="h6" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.PARAGRAPH]: (node, children) => {
    // @return code block
    const { content } = node
    // check if the paragraph is a code
    const vo = content[0].marks[0] && content[0].marks[0].type
    // if true check for the code content
    const code_text_value = vo && content[0].value
    // @return code Component: if true
    if (code_text_value) {
     return (
      <Box className={classes.blockCode}>
       <CodeHighlighter language={language} code={code_text_value} isBlock />
      </Box>
      // <Box className={classes.blockCode}>
      //  <Embed source={code_text_value} />
      // </Box>
     )
    }

    // @return paragraph block
    return <Typography paragraph>{children}</Typography>
   },
   [BLOCKS.OL_LIST]: (node, children) => (
    <List className={classes.LIST} component="ol">
     {children}
    </List>
   ),
   [BLOCKS.UL_LIST]: (node, children) => (
    <List className={clsx(classes.LIST, classes.UL_LIST)}>{children}</List>
   ),
   [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
   [BLOCKS.HR]: (node, children) => <Divider>{children}</Divider>,
   [BLOCKS.QUOTE]: (node, children) => (
    <Typography component="q" paragraph>
     {children}
    </Typography>
   ),
   [BLOCKS.EMBEDDED_ASSET]: node => {
    const { title, file } = node.data.target.fields
    const contentTypes = file["en-US"].contentType
    const contentGroups = contentTypes.split("/")[0]
    const t = title["en-US"]
    const f = file["en-US"].url

    switch (contentGroups) {
     case "image":
      return (
       <Paper
        style={{
         maxWidth: "620px",
         height: "auto",
         margin: "4rem auto",
        }}
       >
        <img alt={title && t} src={f} width="100%" />
       </Paper>
      )
     // return <Paper><Img alt={title && t} fluid={{ src: f }} /></Paper>;
     default:
      return null
    }
   },
  },
 }

 return (
  <Layout>
   <SEO
    title={post.title}
    description={post.description}
    ogpImage={post.blogImage}
    slug={post.slug}
   />
   {/* <Helmet>
     <script src={embedRunkit} />
   </Helmet> */}
   <BlogLayout {...props}>
    <Post post={post} options={options} loading siteUrl={siteUrl} />
    <Paginate previousPost={previousPost} nextPost={nextPost} blog_post />
    <Box>
     <Comment
      post={{
       id: post.id,
       title: post.title,
       siteUrl,
       path,
      }}
     />
    </Box>
   </BlogLayout>
  </Layout>
 )
}

export const BlogPostQuery = graphql`
 query blogPostQuery($slug: String!) {
  site: site {
   siteMetadata {
    siteUrl
   }
  }

  post: contentfulBlogPost(slug: { eq: $slug }) {
   slug
   title
   timestamp(formatString: "MMMM Do YYYY")
   description
   tags {
    id
    slug
   }
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
`

BlogPost.propTypes = {
 classes: PropTypes.object,
 pageContext: PropTypes.shape({
  previousPost: PropTypes.shape({
   id: PropTypes.string,
   slug: PropTypes.string,
   title: PropTypes.string,
  }),
  nextPost: PropTypes.shape({
   id: PropTypes.string,
   slug: PropTypes.string,
   title: PropTypes.string,
  }),
 }),
 data: PropTypes.shape({
  post: PropTypes.objectOf(PropTypes.any),
  site: PropTypes.shape({
   siteMetadata: PropTypes.shape({
    siteUrl: PropTypes.string.isRequired,
   }),
  }).isRequired,
  path: PropTypes.string.isRequired,
 }),
}

// yarn add @madebyconnor/rich-text-to-jsx
// more flexible alternative to contentful/rich-tesxt
