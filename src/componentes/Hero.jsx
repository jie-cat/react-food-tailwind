import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="h-[250px] sm:h-[500px] relative">
          {/* Overlay */}
          <div className="bg-black/30 w-full h-full absolute top-0 left-0 flex flex-col justify-center p-3">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
              The<span className="text-orange-400"> Best</span>
            </h1>
            <h1 className=" font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
              <span className="text-orange-400">Foods </span>Devlivered
            </h1>
          </div>
          {/* Image */}
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639562.jpg&fm=jpg&_gl=1*kafnhy*_ga*MTIwNTUzMjM0MS4xNjY4NTI5NDgy*_ga_8JE65Q40S6*MTY2ODUyOTQ4Mi4xLjEuMTY2ODUyOTUwMC4wLjAuMA.."
            alt="Hamburger"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
