import { createContext, useEffect, useState } from "react"

import logsData from "../data/logsData"

export const LogContext = createContext()

function LogProvider({ children }) {

  const [logs, setLogs] = useState(logsData)

  useEffect(() => {

    const interval = setInterval(() => {

      const random = Math.random()

      let severity

      if (random < 0.2) {
        severity = "High"
      }
      else if (random < 0.5) {
        severity = "Medium"
      }
      else {
        severity = "Low"
      }

      const newLog = {

        id: logs.length + 1,

        time: new Date().toLocaleTimeString(),

        user: "System",

        action: "New Security Event",

        severity,

      }

      setLogs((prevLogs) => [
        newLog,
        ...prevLogs,
      ])

    }, 5000)

    return () => clearInterval(interval)

  }, [logs])

  return (
    <LogContext.Provider value={{ logs }}>

      {children}

    </LogContext.Provider>
  )
}

export default LogProvider