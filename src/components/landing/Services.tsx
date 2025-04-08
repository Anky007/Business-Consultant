
import React from "react";
import { 
  LineChart, 
  Target, 
  BarChart3,
  User,
  Store,
  Rocket,
  ArrowUpRight
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
      icon: <LineChart className="h-6 w-6" />,
      title: "Growth Strategy & Performance Marketing",
      description: "Whether you're starting from scratch or stuck in a plateau, I build full-funnel ad strategies (Meta, Google, and beyond) that drive real results — not just vanity metrics."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "CRO & Landing Page Optimization",
      description: "I turn browsers into buyers with optimized landing pages, better UX, and sharp data-led experiments to improve your conversion rates."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Ecommerce Analytics & Insights",
      description: "I dive deep into your Shopify/Google Ads/Meta Ads data to uncover actionable insights — and plug the leaks in your funnel."
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Freelance CMO & Consulting",
      description: "I partner with founders and early teams to help shape high-impact strategies and build scalable marketing foundations."
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What I Do</h2>
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
              <h3 className="text-2xl font-bold text-blue-900">Who I Work With</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="bg-white px-4 py-2 rounded-full border border-blue-100 flex items-center">
                  <Store className="h-4 w-4 mr-2 text-blue-700" />
                  <span className="text-gray-700">D2C brands</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-blue-100 flex items-center">
                  <Rocket className="h-4 w-4 mr-2 text-blue-700" />
                  <span className="text-gray-700">Early-stage startups</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-blue-100 flex items-center">
                  <Store className="h-4 w-4 mr-2 text-blue-700" />
                  <span className="text-gray-700">Shopify founders</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-blue-100 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-2 text-blue-700" />
                  <span className="text-gray-700">Consumer-first businesses</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">How I Work</h4>
                <ol className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-gray-700">Audit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-gray-700">Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-gray-700">Execution</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">4</div>
                    <span className="text-gray-700">Optimization</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
