import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import MapPreview from "../components/MapPreview";
import ChartsPreview from "../components/Charts";
import AlertsTable from "../components/AlertsTable";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Hero />
      <Stats />
      <MapPreview />
      <ChartsPreview />
      <AlertsTable />
      <Footer />
    </div>
  );
};

export default Home;
