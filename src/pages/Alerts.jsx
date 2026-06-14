import { useContext } from "react"

import { LogContext } from "../context/LogContext"

function Alerts() {

  const { logs } = useContext(LogContext)

  const alertLogs = logs.filter(
    (log) => log.severity === "High"
  )

  return (
    <div>

      <h1 className="text-4xl text-white font-bold mb-8">
        Critical Alerts
      </h1>

      <div className="grid gap-4">

        {alertLogs.map((log) => (

          <div
            key={log.id}
            className="bg-red-500/10 border border-red-500 p-5 rounded-xl"
          >

            <h2 className="text-red-400 text-xl font-semibold">
              {log.action}
            </h2>

            <p className="text-gray-300 mt-2">
              User: {log.user}
            </p>

            <p className="text-gray-400">
              Time: {log.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Alerts