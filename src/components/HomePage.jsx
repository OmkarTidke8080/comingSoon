import React from "react";

import logo from "../assets/logo.png";
import video from "../assets/video.mp4"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

import Timer from "./Timer";
function HomePage() {

 

  return (
    <div className="relative w-full h-full bg-inherit overflow-hidden">
      <video
        src={video}
        className="object-cover h-[100vh] w-full transition-opacity duration-1000"
        alt="Slideshow"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] opacity-25 z-0"></div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
        <div>
          <div className="logo flex justify-center">
            <img
              src={logo}
              className="h-[100px] w-[110px] md:h[140px] md:w-[140px]  lg:h-[180px] lg:w-[200px]"
              alt=""
            />
          </div>
          <div className="flex justify-center mt-10">
            <h1 className="text-xl lg:text-7xl md:text-4xl  font-mono">
              We're coming soon in{" "}
            </h1>
          </div>
          <div className="px-6 sm:px-12 md:px-16 lg:px-20 text-center text-7xl mt-10">
            <Timer duration={2 * 24 * 60 * 60 * 1000} />
          </div>

          <div className="icons">
            <div className="flex justify-center mt-20">
              <div className="flex gap-10">
               
                <a
                  href="https://www.instagram.com/the_empire_visions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    className="h-10 w-10 cursor-pointer"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-empire-vision/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    className="h-10 w-10 cursor-pointer"
                    alt="LinkedIn"
                  />
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
