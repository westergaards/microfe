import React from "react"
import ReactDOM from "react-dom"

import "./assets/main.css"

const Shell = React.lazy(() => import("shell/Shell"))

const App = () => (
  <React.Suspense fallback={<div>loading</div>}>
    <Shell />
  </React.Suspense>
)

ReactDOM.render(<App />, document.getElementById("app"))
