import React from "react"
import PropTypes from "prop-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const Comment = ({ post: {id, title, siteUrl, path} }) => {

 let disqusConfig = {
  url: `${siteUrl+path}`,
  identifier: id,
  title: title,
 }
 
 return (
  <>
   <CommentCount config={disqusConfig} placeholder={"Comments +"} />
   <Disqus config={disqusConfig} />
  </>
 )
}

export default Comment

Comment.propTypes = {
 post: PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  siteUrl: PropTypes.string,
  path: PropTypes.string,
 }).isRequired,
}

