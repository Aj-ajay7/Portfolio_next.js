import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div
    className={`${className} w-full h-full inline-block`}
    >
        {children}
    </div>
  )
}

export default Layout