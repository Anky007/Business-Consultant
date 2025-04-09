
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
            Scale Your D2C Brand With <span className="text-blue-600">Data-Driven</span> Growth
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 md:pr-8">
              I help D2C brands scale profitably through performance marketing, conversion optimization, and smart experimentation. 
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-800 hover:bg-blue-900 text-white font-medium text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-800 text-blue-800 hover:bg-blue-50 font-medium text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("results")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                See Client Results
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Trusted by Growing D2C Brands
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">Delta Charms</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">Weekend Artist</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">Dhauladhar Pickles</span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-30 z-0"></div>
            <div className="absolute bottom-8 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
