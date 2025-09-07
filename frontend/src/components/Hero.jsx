import React from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden mt-16">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/disaster.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Predict, Prepare, Prevent Disasters
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          AI-powered platform for real-time tracking and risk mitigation.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition">
            Explore Dashboard <ArrowRight size={20} />
          </button>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition">
            Get Live Alerts <AlertTriangle size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
