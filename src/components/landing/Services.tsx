
import React from "react";
import { 
  BarChart3, 
  LineChart, 
  Target, 
  PieChart,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="p-2 w-12 h-12 bg-blue-50 rounded-lg mb-4 flex items-center justify-center text-blue-700">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Meta Ads Optimization",
      description: "Strategic campaign setup, creative optimization, and audience targeting to maximize your ROI and scale customer acquisition."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Google Ads Management",
      description: "Data-driven search and display campaigns that capture high-intent traffic and drive qualified leads to your business."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Landing Page Optimization",
      description: "Conversion-focused design improvements that turn more of your visitors into paying customers."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Strategy",
      description: "Comprehensive growth plans that work with lean teams and resources to scale your business efficiently."
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">How I Can Help Your Brand Grow</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            I specialize in helping ambitious D2C brands scale through proven digital marketing strategies and conversion optimization techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900">When You Should Work With Me</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-600 rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Your ads aren't converting, or returns are inconsistent</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-600 rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Your website gets traffic but few sales</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-600 rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">You want to scale without burning cash</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                <PieChart className="h-24 w-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
