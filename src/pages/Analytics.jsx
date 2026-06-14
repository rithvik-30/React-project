import { useContext } from "react"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

import { LogContext } from "../context/LogContext"

function Analytics() {

  const { logs } = useContext(LogContext)

  const highLogs = logs.filter(
    (log) => log.severity === "High"
  ).length

  const mediumLogs = logs.filter(
    (log) => log.severity === "Medium"
  ).length

  const lowLogs = logs.filter(
    (log) => log.severity === "Low"
  ).length

  const chartData = [
    {
      name: "High",
      logs: highLogs,
    },

    {
      name: "Medium",
      logs: mediumLogs,
    },

    {
      name: "Low",
      logs: lowLogs,
    },
  ]
  const COLORS = [
  "#ef4444",
  "#eab308",
  "#22c55e",
]

  return (
    <div>

      <h1 className="text-4xl text-white font-bold mb-8">
        Analytics
      </h1>

      <div className="bg-[#111827] p-6 rounded-xl">

        <h2 className="text-white text-xl mb-6">
          Severity Distribution
        </h2>

        <div className="h-96">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={chartData}>

              <XAxis dataKey="name" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar
                dataKey="logs"
                fill="#22d3ee"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>
      <div className="bg-[#111827] p-6 rounded-xl mt-8">

  <h2 className="text-white text-xl mb-6">
    Severity Percentage Distribution
  </h2>

  <div className="h-96">

    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Pie
          data={chartData}
          dataKey="logs"
          nameKey="name"
          outerRadius={120}
          label
        >

          {chartData.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index]}
            />

          ))}

        </Pie>

        <Tooltip />

        <Legend />

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>

    </div>
  )
}

export default Analytics