import React from "react";
import { CloudLightning, Users, DollarSign, MapPin } from "lucide-react";

const stats = [
  { icon: <CloudLightning size={32} />, title: "1,245+", desc: "Total Disasters Tracked" },
  { icon: <Users size={32} />, title: "4.5M+", desc: "Lives Affected" },
  { icon: <DollarSign size={32} />, title: "$32B+", desc: "Economic Loss" },
  { icon: <MapPin size={32} />, title: "98", desc: "High-Risk Regions" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Global Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="text-green-600 mb-4">{s.icon}</div>
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
