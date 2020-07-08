import React from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"

const sidebarItems = [
  { id: 1, title: "Vehicle Services", path: "/vehicle" },
  { id: 2, title: "Shop", path: "/shop" },
  { id: 3, title: "Support", path: "/support" },
]
export const Sidebar = () => {
  return (
    <div class="flex flex-col flex-shrink-0 flex-no-wrap px-6 py-4">
      {sidebarItems.map(({ id, title, path }) => (
        <div key={id} className="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link to={path}>{title}</Link>
        </div>
      ))}
    </div>
  )
}
