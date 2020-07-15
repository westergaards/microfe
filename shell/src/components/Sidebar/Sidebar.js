import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'
import config from '../../config.json'
import './Sidebar.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Sidebar = () => {
  const [active, setActive] = useState(0)
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className="flex flex-col flex-shrink-0 flex-no-wrap bg-blackSecondary">
      <div className="flex text-white text-center bg-blackSecondary2 px-6 py-4 justify-end">
        <div className="flex" onClick={handleCollapse}>
          {collapse ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
        </div>
      </div>
      {collapse ? (
        <div className="transition duration-500 ease-in-out"></div>
      ) : (
        <div className="flex flex-1 flex-col bg-black px-6 py-4">
          {config.menu.map(({ id, title, path }, index) => (
            <div
              id={index}
              key={id}
              className="flex-none text-white text-center px-4 py-2 m-2"
              onClick={() => setActive(index)}
            >
              <Link to={path} className={`${active === index ? 'active' : null}`}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
