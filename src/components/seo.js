/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, ogpImage, slug }) {
 const { site } = useStaticQuery(
  graphql`
   query {
    site {
     siteMetadata {
      title
      description
      developer
      image
      twitterUsername
      siteUrl
     }
    }
   }
  `
 )

 const metaDescription = description || site.siteMetadata.description

 return (
  <Helmet
   htmlAttributes={{
    lang,
   }}
   title={title}
   titleTemplate={`%s | ${site.siteMetadata.title}`}
   meta={[
    {
     name: `description`,
     content: metaDescription,
    },
    {
     name: `image`,
     content: ogpImage ? ogpImage : site.siteMetadata.image,
    },
    {
     name: `author`,
     content: site.siteMetadata.developer,
    },

    {
     property: `og:image`,
     content: ogpImage && `${ogpImage}`,
    },
    {
     property: `og:url`,
     content: slug
      ? `${site.siteMetadata.siteUrl}/${slug}`
      : site.siteMetadata.siteUrl,
    },
    {
     property: `og:title`,
     content: title,
    },
    {
     property: `og:description`,
     content: metaDescription,
    },
    {
     property: `og:type`,
     content: `website`,
    },
    {
     name: `twitter:card`,
     content: `summary_large_image`,
    },
    {
     name: `twitter:image`,
     content: ogpImage && `${ogpImage}`,
    },
    {
     name: `twitter:creator`,
     content: site.siteMetadata.developer,
    },
    { name: `twitter:site`, content: `${site.siteMetadata.twitterUsername}` },
    {
     name: `twitter:title`,
     content: title,
    },
    {
     name: "twitter:creator",
     content: site.siteMetadata.twitterUsername,
    },
    {
     name: `twitter:description`,
     content: metaDescription,
    },
    { property: `fb:app_id`, content: `481511669121275` },
   ].concat(meta)}
  />
 )
}

SEO.defaultProps = {
 lang: `en`,
 meta: [],
 description: ``,
}

SEO.propTypes = {
 description: PropTypes.string,
 lang: PropTypes.string,
 meta: PropTypes.arrayOf(PropTypes.object),
 title: PropTypes.string.isRequired,
 ogpImage: PropTypes.string,
 slug: PropTypes.string,
 image: PropTypes.string,
 twitterUsername: PropTypes.string,
 siteUrl: PropTypes.string,
}

export default SEO

/***
 * const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const {
    siteTitle,
    siteDescription,
    author,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta name=`description` content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />

      facebook cards 
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      twitter card
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;

 */
