import DashboardCard from "../components/DashboardCard"

function Dashboard() {

  const dashboardData = [
    {
      title: "Total Logs",
      value: 1240,
    },

    {
      title: "Warnings",
      value: 82,
    },

    {
      title: "Errors",
      value: 19,
    },

    {
      title: "Active Users",
      value: 312,
    },
  ]

  return (
    <div>

      <h1 className="text-4xl text-white font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {dashboardData.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

    </div>
  )
}

export default Dashboard