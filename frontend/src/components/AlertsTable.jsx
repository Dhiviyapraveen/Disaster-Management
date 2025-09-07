import React from "react";

const AlertsTable = () => {
  const alerts = [
    { type: "Flood", location: "Kerala", severity: "High" },
    { type: "Earthquake", location: "Japan", severity: "Severe" },
  ];

  return (
    <section id="alerts" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Latest Alerts</h2>
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Type</th>
              <th className="p-4">Location</th>
              <th className="p-4">Severity</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((a, i) => (
              <tr key={i} className="border-t hover:bg-gray-100">
                <td className="p-4">{a.type}</td>
                <td className="p-4">{a.location}</td>
                <td className="p-4">{a.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AlertsTable;
