function LogRow({ log }) {

  const severityColor =
    log.severity === "High"
      ? "text-red-400"
      : log.severity === "Medium"
      ? "text-yellow-400"
      : "text-green-400"

  return (
    <tr className="border-b border-gray-800">

      <td className="py-4">{log.time}</td>

      <td>{log.user}</td>

      <td>{log.action}</td>

      <td className={severityColor}>
        {log.severity}
      </td>

    </tr>
  )
}

export default LogRow