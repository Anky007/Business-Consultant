
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f5f6ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-10">
              About Me
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <ul className="space-y-8">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1 text-xl">•</span>
                  <p className="text-lg text-gray-600">
                    With 7+ years in startups, I specialize in product and performance marketing, growth strategy, and data analytics.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1 text-xl">•</span>
                  <p className="text-lg text-gray-600">
                    I've helped brands overcome challenges with visibility, customer acquisition, and retention.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1 text-xl">•</span>
                  <p className="text-lg text-gray-600">
                    Now, I'm focused on helping small D2C brands unlock scalable growth with data driven decision-making.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-full border-4 border-white shadow-lg">
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                  src="/lovable-uploads/6a6e29b7-8cae-4ba8-808c-64d187644747.png"
                  alt="Profile photo at a lake with mountains"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
