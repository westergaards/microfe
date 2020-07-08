import React from "react"

import { Header, Sidebar } from "../../components"
import "./Layout.css"

export const Layout = ({ children }) => {
  return (
    <div class="flex flex-col h-screen bg-gray-200 font-roboto">
      <Header />

      <div class="flex-1 flex flex-col overflow-hidden">
        <main class="flex overflow-x-hidden overflow-y-auto bg-gray-200">
          <Sidebar />

          <div class="container flex-grow mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
