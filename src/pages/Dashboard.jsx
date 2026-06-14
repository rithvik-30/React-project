import { useContext } from "react"

import DashboardCard from "../components/DashboardCard"

import { LogContext } from "../context/LogContext"
import { ThemeContext } from "../context/ThemeContext"
function Dashboard() {

  const { logs } = useContext(LogContext)

  const totalLogs = logs.length

  const highLogs = logs.filter(
    (log) => log.severity === "High"
  ).length

  const mediumLogs = logs.filter(
    (log) => log.severity === "Medium"
  ).length

  const lowLogs = logs.filter(
    (log) => log.severity === "Low"
  ).length
const { darkMode } = useContext(ThemeContext)
  const recentLogs = logs.slice(0, 5)

  return (
    <div>

      <h1
  className={`text-4xl font-bold mb-8 ${
    darkMode
      ? "text-white"
      : "text-black"
  }`}
>
        Dashboard Overview
      </h1>

      {/* DASHBOARD CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard
          title="Total Logs"
          value={totalLogs}
        />

        <DashboardCard
          title="High Severity"
          value={highLogs}
        />

        <DashboardCard
          title="Medium Severity"
          value={mediumLogs}
        />

        <DashboardCard
          title="Low Severity"
          value={lowLogs}
        />

      </div>

      {/* RECENT ACTIVITY */}

      <div
  className={`p-6 rounded-xl ${
    darkMode
      ? "bg-[#111827]"
      : "bg-white shadow-md"
  }`}
>

        <h2
  className={`text-2xl font-semibold mb-6 ${
    darkMode
      ? "text-white"
      : "text-black"
  }`}
>
          Recent Activity
        </h2>

        <div className="space-y-4">

          {recentLogs.map((log) => (

            <div
              key={log.id}
              className={`border-b pb-4 ${
  darkMode
    ? "border-gray-700"
    : "border-gray-300"
}`}
            >

              <div className="flex justify-between">

                <p
  className={
    darkMode
      ? "text-white"
      : "text-black"
  }
>
                  {log.action}
                </p>

                <span
  className={
    darkMode
      ? "text-gray-400"
      : "text-gray-600"
  }
>
                  {log.time}
                </span>

              </div>

              <p
  className={`text-sm mt-1 ${
    darkMode
      ? "text-gray-400"
      : "text-gray-600"
  }`}
>
                User: {log.user}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Dashboard