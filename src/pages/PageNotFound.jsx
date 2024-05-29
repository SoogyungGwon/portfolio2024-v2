import React from 'react'

// import page
import HomeCurious from '../components/HomeCurious'

const PageNotFound = () => {
  return (
    <div className="page-not-found-wrapper">
      <section className="oops-text">
        <div>Oops! Seems like the page doesn’t exist...</div>
      </section>
      <HomeCurious />
    </div>
  )
}

export default PageNotFound