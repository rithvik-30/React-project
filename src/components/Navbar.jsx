import { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )

  const { darkMode, toggleTheme } =
    useContext(ThemeContext)

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(
        new Date().toLocaleTimeString()
      )

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div
      className={`h-20 border-b flex items-center justify-between px-8 ${
        darkMode
          ? "bg-[#111827] border-gray-800"
          : "bg-white border-gray-300"
      }`}
    >

      {/* LEFT SIDE */}

      <div>

        <h1
          className={`text-2xl font-bold ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          CyberWatch Dashboard
        </h1>

        <p
          className={`text-sm ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Real-Time Activity Monitoring
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-6">

        {/* THEME TOGGLE */}

        <button
          onClick={toggleTheme}
          className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* SYSTEM STATUS */}

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-green-400 text-sm">
            System Active
          </span>

        </div>

        {/* LIVE CLOCK */}

        <div className="text-cyan-400 font-semibold">

          {currentTime}

        </div>

      </div>

    </div>
  )
}

export default Navbar