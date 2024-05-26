import React from 'react'
import ContactLinks from './ContactLinks'

const Footer = () => {
  return (
    <footer>
        <hr />
        <div className="footer-flex-container">
          <p><span>&copy;</span> Copyright 2024 Soogyung Gwon</p>
          <ContactLinks />
        </div>
    </footer>
  )
}

export default Footer