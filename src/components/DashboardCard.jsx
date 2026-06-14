import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function DashboardCard({ title, value }) {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`p-6 rounded-xl shadow-md ${
        darkMode
          ? "bg-[#111827]"
          : "bg-white"
      }`}
    >

      <h2
        className={`text-sm mb-2 ${
          darkMode
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-3xl font-bold ${
          darkMode
            ? "text-white"
            : "text-black"
        }`}
      >
        {value}
      </p>

    </div>
  )
}

export default DashboardCard