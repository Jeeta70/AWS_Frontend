import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>Footer@Copy Right {currentYear}</footer>
  )
}

export default Footer