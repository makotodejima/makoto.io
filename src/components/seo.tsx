import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const defaultKeywords: string[] = [
  `Makoto Dejima`,
  `Design`,
  `Front-End Developer`,
  `Graphic Design`,
  `React`,
];

interface SEOProps {
  title: string;
  keywords?: string[];
  description?: string;
  lang?: string;
}

function SEO({
  title,
  keywords = defaultKeywords,
  description,
  lang = 'en',
}: SEOProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={
              title === `Makoto Dejima | Design and Development`
                ? title
                : `%s | ${data.site.siteMetadata.title}`
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: `https://madmak.me`,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: `https://madmak.me${data.md.childImageSharp.fixed.src}`,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : [],
            )}
          >
            <link rel="stylesheet" href="https://use.typekit.net/str3lfu.css" />
          </Helmet>
        );
      }}
    />
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    md: file(relativePath: { eq: "md_ogp.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
