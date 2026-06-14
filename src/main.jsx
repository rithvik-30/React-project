import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

import LogProvider from "./context/LogContext"
import ThemeProvider from "./context/ThemeContext"
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

   <ThemeProvider>
  <LogProvider>
    <App />
  </LogProvider>
</ThemeProvider>

  </React.StrictMode>
)