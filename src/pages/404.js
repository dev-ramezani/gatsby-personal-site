import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className='page404'>
      <h1 className='margin'>
        NOT FOUND
      </h1>
      <p className='margin'>
        This page does not exist
      </p>
      <Link to='/'>
        <p className='link'>
          Back to home
        </p>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
