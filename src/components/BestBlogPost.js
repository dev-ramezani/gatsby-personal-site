import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const BestBlogPostTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          post.frontmatter.bestPost && <div className="is-parent column is-6" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <div>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) }
                <p style={{ textAlign:'center', margin:'0', padding:'0' }}>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <span className="subtitle">
                    {post.frontmatter.date}
                  </span>
                </p>
              </div>
              <br />
              <p>
                {post.frontmatter.summery}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

BestBlogPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BestBlogPost() {
  return (
    <StaticQuery
      query={graphql`
        query BestBlogPostQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  summery
                  bestPost
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BestBlogPostTemplate data={data} count={count} />}
    />
  );
}
