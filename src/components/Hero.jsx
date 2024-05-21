import React from 'react';
import video from '../assets/food-irl.mp4';

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute rounded-lg w-full h-full bg-black/40 text-gray-200 max-h-[500px] flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Delivering <span className="text-orange-500">The</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Best</span> Meals
          </h1>
        </div>
        <video
          className="w-full max-h-[500px] object-cover rounded-lg"
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
