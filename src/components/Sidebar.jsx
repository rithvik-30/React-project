import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Sidebar() {

  const { darkMode } = useContext(ThemeContext)

  const linkStyle =
    "block px-4 py-3 rounded-lg transition"

  const activeStyle = darkMode
    ? "bg-gray-800 text-cyan-400"
    : "bg-gray-200 text-cyan-600"

  return (
    <div
      className={`w-64 min-h-screen p-5 ${
        darkMode
          ? "bg-[#0f172a] text-white"
          : "bg-white text-black border-r border-gray-300"
      }`}
    >

      <h1 className="text-3xl font-bold mb-10">
        CyberWatch
      </h1>

      <nav className="flex flex-col gap-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle}
             ${
               darkMode
                 ? "hover:bg-gray-800"
                 : "hover:bg-gray-100"
             }
             ${isActive ? activeStyle : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/logs"
          className={({ isActive }) =>
            `${linkStyle}
             ${
               darkMode
                 ? "hover:bg-gray-800"
                 : "hover:bg-gray-100"
             }
             ${isActive ? activeStyle : ""}`
          }
        >
          Logs
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${linkStyle}
             ${
               darkMode
                 ? "hover:bg-gray-800"
                 : "hover:bg-gray-100"
             }
             ${isActive ? activeStyle : ""}`
          }
        >
          Analytics
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `${linkStyle}
             ${
               darkMode
                 ? "hover:bg-gray-800"
                 : "hover:bg-gray-100"
             }
             ${isActive ? activeStyle : ""}`
          }
        >
          Alerts
        </NavLink>

      </nav>

    </div>
  )
}

export default Sidebar