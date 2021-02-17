import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

export default function CurrentPath() {
  let location = useLocation()
  
  const toUppercase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div className="current-path">
    <div className="container">
      <div className="current-path-container d-flex align-items-center justify-content-between">
        <h3 className="text-theme-color"> {toUppercase(location.pathname.substring(1))} </h3>
        <h2><span className="text-theme-color">Home </span>/  {toUppercase(location.pathname.substring(1))} </h2>
      </div>
    </div>
  </div>
  )
}
