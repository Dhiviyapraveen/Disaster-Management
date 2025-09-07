import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MapPreview from "./components/MapPreview";
import Charts from "./components/Charts";
import AlertsTable from "./components/AlertsTable";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <MapPreview />
      <Charts />
      <AlertsTable />
      <Footer />
    </div>
  );
}

export default App;
