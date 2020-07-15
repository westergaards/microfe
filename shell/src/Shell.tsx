import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import ErrorBoundary from './helpers/ErrorBoundary'
import './assets/main.css'

const RemoteWidget = React.lazy(() => import('remote/RemoteWidget'))

export default function Shell() {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary fallback={<div>there was an error</div>}>
          <React.Suspense fallback={<div>loading</div>}>
            <Routes>
              <Route path="vehicle/" element={<RemoteWidget />} />
            </Routes>
          </React.Suspense>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  )
}
