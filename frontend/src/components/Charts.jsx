import React from "react";

const Charts = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Disaster Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="bg-gray-100 h-64 rounded-xl shadow-inner flex items-center justify-center">
          <p>Line Chart</p>
        </div>
        <div className="bg-gray-100 h-64 rounded-xl shadow-inner flex items-center justify-center">
          <p>Pie Chart</p>
        </div>
      </div>
    </section>
  );
};

export default Charts;
