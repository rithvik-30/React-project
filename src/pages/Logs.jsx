import { useContext, useState } from "react"

import logsData from "../data/logsData"
import LogRow from "../components/LogRow"
import { LogContext } from "../context/LogContext"
function Logs() {

  const [search, setSearch] = useState("")
  const [severity, setSeverity] = useState("All")
  const [sortOrder, setSortOrder] = useState("latest")
const [currentPage, setCurrentPage] = useState(1)
const { logs } = useContext(LogContext)
const filteredLogs = logs
  .filter((log) => {

    const matchesSearch =
      log.user.toLowerCase().includes(search.toLowerCase())

    const matchesSeverity =
      severity === "All" || log.severity === severity

    return matchesSearch && matchesSeverity
  })

  .sort((a, b) => {

    if (sortOrder === "latest") {
      return b.id - a.id
    }

    return a.id - b.id
  })
const logsPerPage = 5

const lastLogIndex =
  currentPage * logsPerPage

const firstLogIndex =
  lastLogIndex - logsPerPage

const currentLogs =
  filteredLogs.slice(
    firstLogIndex,
    lastLogIndex
  )
  return (
    <div>

      <h1 className="text-4xl text-white font-bold mb-8">
        Activity Logs
      </h1>

      <input
        type="text"
        placeholder="Search by user..."
        aria-label="Search logs by user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
      />
      <select
      aria-label="Filter logs by severity"
  value={severity}
  onChange={(e) => setSeverity(e.target.value)}
  className="mb-6 ml-4 p-3 rounded-lg bg-[#111827] text-white outline-none"
>

  <option value="All">All Severities</option>

  <option value="High">High</option>

  <option value="Medium">Medium</option>

  <option value="Low">Low</option>

</select>
<select
 aria-label="Sort logs"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  className="mb-6 ml-4 p-3 rounded-lg bg-[#111827] text-white outline-none"
>

  <option value="latest">
    Latest First
  </option>

  <option value="oldest">
    Oldest First
  </option>

</select>

      <div className="bg-[#111827] rounded-xl p-6">

        <table className="w-full text-left text-white">

          <thead>
            <tr className="border-b border-gray-700">

              <th className="pb-4">Time</th>
              <th>User</th>
              <th>Action</th>
              <th>Severity</th>

            </tr>
          </thead>

          <tbody>

            {currentLogs.map((log) => (
              <LogRow
                key={log.id}
                log={log}
              />
            ))}

          </tbody>

        </table>

      </div>
<div className="flex gap-4 mt-6">

  <button
   aria-label="Go to previous page"
    onClick={() =>
      setCurrentPage((prev) =>
        prev > 1 ? prev - 1 : 1
      )
    }
    className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
  >
    Previous
  </button>

  <button
  aria-label="Go to next page"
    onClick={() =>
      setCurrentPage((prev) => prev + 1)
    }
    className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
  >
    Next
  </button>

</div>
    </div>
  )
}

export default Logs