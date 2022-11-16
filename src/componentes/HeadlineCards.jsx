import React from "react";

const HeadlineCards = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="grid md:grid-cols-3 md:gap-y-0 gap-5">
          {/* Card 1 */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="bg-black/30 w-full h-full absolute top-0 left-0 p-4 rounded-xl text-white">
              <h1 className="font-bold mx-2 text-2xl">Sun's Out,BOGO's Out</h1>
              <p>Through 8/26</p>
              <button className="bg-white/30 hover:bg-white/90 absolute bottom-4">
                Order Now
              </button>
            </div>
            {/* image */}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg&_gl=1*1rwen9g*_ga*MTIwNTUzMjM0MS4xNjY4NTI5NDgy*_ga_8JE65Q40S6*MTY2ODUzMTM3Mi4yLjEuMTY2ODUzMjc1OC4wLjAuMA.."
              alt="cardPic1"
            />
          </div>
          {/* Card 2 */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="bg-black/30 w-full h-full absolute top-0 left-0 p-4 rounded-xl text-white">
              <h1 className="font-bold text-2xl">New Restaurants</h1>
              <p>Added Daily</p>
              <button className="bg-white/30 hover:bg-white/90 absolute bottom-4">
                Order Now
              </button>
            </div>
            {/* image */}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=pexels-robin-stickel-70497.jpg&fm=jpg&_gl=1*1hpekg9*_ga*MTIwNTUzMjM0MS4xNjY4NTI5NDgy*_ga_8JE65Q40S6*MTY2ODUzMTM3Mi4yLjEuMTY2ODUzMzczMS4wLjAuMA.."
              alt="cardPic2"
            />
          </div>
          {/* Card 3 */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="bg-black/30 w-full h-full absolute top-0 left-0 p-4 rounded-xl text-white">
              <h1 className="font-bold text-2xl">Sun's Out,BOGO's Out</h1>
              <p>Through 8/26</p>
              <button className="bg-white/30 hover:bg-white/90 absolute bottom-4">
                Order Now
              </button>
            </div>
            {/* image */}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg&_gl=1*1afvxjn*_ga*MTIwNTUzMjM0MS4xNjY4NTI5NDgy*_ga_8JE65Q40S6*MTY2ODUzMTM3Mi4yLjEuMTY2ODUzMzEyOC4wLjAuMA.."
              alt="cardPic3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineCards;
