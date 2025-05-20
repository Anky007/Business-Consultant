
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, company }) => {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="h-10 w-10 text-blue-200 mb-4" />
        <p className="text-gray-700 mb-6 flex-grow">{content}</p>
        <div>
          <p className="font-semibold text-blue-900">{author}</p>
          <p className="text-sm text-gray-600">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with this consultant transformed our marketing approach. Our ads are now consistently profitable, and we've been able to scale our business more than we thought possible.",
      author: "Srishti Rawat",
      role: "Founder",
      company: "Delta Charms"
    },
    {
      content: "The landing page optimizations increased our conversion rate by 42%. We're getting more customers from the same traffic, which has been game-changing for our business.",
      author: "Sonali Verma",
      role: "COO",
      company: "Dhauladhar Pickles"
    },
    {
      content: "Our Google Ads were barely breaking even before we started working together. Now they're one of our most profitable channels. The strategic approach and attention to detail made all the difference.",
      author: "Chetnnya Jain",
      role: "CEO",
      company: "Weekend Artist"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Brands I've Helped</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about our work together.
          </p>
        </div>

        {/* Desktop view: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Testimonial
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 right-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
