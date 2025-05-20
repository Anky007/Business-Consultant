
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Ready to Scale?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Let's chat about how we can grow your brand, one smart experiment at a time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">ankita.anshu12@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+91 90859 71270</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Book a Call</p>
                    <p className="font-medium">Schedule a 30-minute discovery call</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <a href="https://calendly.com/ankita-anshu12/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-6">
                      Book a Free Discovery Call
                    </Button>
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <h4 className="font-semibold text-blue-900 mb-4">
                  What happens next?
                </h4>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Audit</p>
                      <p className="text-gray-600 mt-1">
                        We start by diagnosing what's working (and what's not)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Strategy</p>
                      <p className="text-gray-600 mt-1">
                        I map out a focused, data-driven plan
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Execution</p>
                      <p className="text-gray-600 mt-1">
                        Either I implement or support your team in doing so
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Optimization</p>
                      <p className="text-gray-600 mt-1">
                        Continuous testing + iteration for compounding gains
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
