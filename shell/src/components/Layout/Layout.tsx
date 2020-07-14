import React, { FC, ReactNode } from 'react'

import { Header, Sidebar } from '..'
import './Layout.css'

type LayoutProps = {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div className="flex flex-col h-screen bg-gray-200 font-roboto">
    <Header />

    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex overflow-x-hidden overflow-y-auto bg-gray-200">
        <Sidebar />

        <div className="flex-grow mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  </div>
)
