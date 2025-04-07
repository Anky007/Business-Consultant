
import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">GrowthArchitect</h2>
            <p className="text-blue-200 text-sm max-w-xs">
              Helping ambitious D2C brands scale through data-driven digital marketing strategies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#results" className="text-blue-200 hover:text-white transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-800 text-center md:text-left">
          <p className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} GrowthArchitect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
