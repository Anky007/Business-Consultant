
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Percent, ShoppingCart } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6 flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface CaseStudyProps {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  title, 
  description, 
  stats, 
  challenge, 
  solution, 
  results 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-900 font-bold text-2xl">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 pt-4">
        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Results</h4>
          <p className="text-gray-600">{results}</p>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  const caseStudies = [
    {
      id: "delta",
      title: "Delta Charms",
      description: "A handcrafted jewelry brand looking to scale beyond their Instagram shop.",
      stats: [
        { label: "Increase in ROAS", value: "320%" },
        { label: "Ad Spend Scaled", value: "150%" },
        { label: "Conversion Rate", value: "+42%" },
        { label: "Monthly Revenue", value: "+89%" }
      ],
      challenge: "Delta Charms was struggling with inconsistent returns from their Facebook ads and poor website conversion rates, despite having a strong product and loyal customer base.",
      solution: "Implemented a comprehensive restructuring of their Meta ad account, created a segmented funnel approach, and optimized their product pages for better conversion.",
      results: "Within 90 days, we were able to triple their ROAS while scaling ad spend by 150%, resulting in an 89% increase in monthly revenue."
    },
    {
      id: "weekend",
      title: "Weekend Artist",
      description: "An art supplies e-commerce store looking to grow beyond early adopters.",
      stats: [
        { label: "Lead Cost Reduction", value: "65%" },
        { label: "Google Ads CTR", value: "+87%" },
        { label: "Email Signups", value: "+129%" },
        { label: "Returning Customers", value: "+41%" }
      ],
      challenge: "Weekend Artist had great products but was struggling with high customer acquisition costs and low repeat purchase rates. Their Google Ads were underperforming.",
      solution: "Developed a comprehensive Google Ads strategy focusing on high-intent keywords, redesigned their product landing pages, and implemented an email nurturing sequence.",
      results: "Cut lead acquisition costs by 65%, improved CTR by 87%, and significantly boosted email sign-ups and returning customer rates."
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Real Results for Real Businesses</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            I've helped ambitious D2C brands achieve significant growth. Here are some of the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <StatCard 
            icon={<TrendingUp className="h-6 w-6 text-white" />} 
            value="320%" 
            label="Average ROAS Increase" 
            color="bg-blue-600 text-white" 
          />
          <StatCard 
            icon={<Users className="h-6 w-6 text-white" />} 
            value="65%" 
            label="Lower CPAs" 
            color="bg-green-600 text-white" 
          />
          <StatCard 
            icon={<Percent className="h-6 w-6 text-white" />} 
            value="42%" 
            label="Higher Conversion Rates" 
            color="bg-purple-600 text-white" 
          />
          <StatCard 
            icon={<ShoppingCart className="h-6 w-6 text-white" />} 
            value="89%" 
            label="Revenue Growth" 
            color="bg-orange-500 text-white" 
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <Tabs defaultValue="delta" className="w-full">
            <TabsList className="mb-8 w-full justify-start overflow-x-auto">
              {caseStudies.map((study) => (
                <TabsTrigger key={study.id} value={study.id} className="px-6">
                  {study.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={study.id}>
                <CaseStudy {...study} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Results;
