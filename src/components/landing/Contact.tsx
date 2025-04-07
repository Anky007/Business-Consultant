
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Let's Talk About Your Growth
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to scale your business? Let's discuss how I can help you achieve your growth goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  How can I help?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your growth challenges..."
                  required
                  className="w-full h-32"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <Card className="border-0 shadow-md bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Mail className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">hello@growtharchitect.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Phone className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
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
                        <p className="font-medium text-gray-800">Initial Consultation</p>
                        <p className="text-gray-600 mt-1">
                          We'll discuss your business goals and current challenges
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Strategy Session</p>
                        <p className="text-gray-600 mt-1">
                          I'll analyze your current setup and propose a growth plan
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Implementation</p>
                        <p className="text-gray-600 mt-1">
                          We'll work together to execute the strategy and scale your business
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
