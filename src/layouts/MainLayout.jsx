import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function MainLayout({ children }) {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`flex min-h-screen ${
        darkMode
          ? "bg-gray-950"
          : "bg-gray-100"
      }`}
    >
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout