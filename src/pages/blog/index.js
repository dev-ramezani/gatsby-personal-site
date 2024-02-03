import * as React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import image from '../../../static/img/blogpage.jpg'
import FullWidthImage from '../../components/FullWidthImage'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage img={image} title='Latest posts' subheading='Read my latest posts' />
        <section className="section posts">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
