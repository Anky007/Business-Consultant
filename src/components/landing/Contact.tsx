
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<FormValues[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Store form submission
    const newSubmission = { ...values };
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissions(prev => [...prev, newSubmission]);
      
      toast({
        title: "Message received!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    }, 1500);
    
    console.log("Form submission:", values);
  };

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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can I help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your growth challenges..." 
                          className="h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Book a Free Discovery Call"}
                </Button>
              </form>
            </Form>
            
            {/* Admin section to view submissions */}
            <div className="mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowSubmissions(!showSubmissions)} 
                className="w-full"
              >
                {showSubmissions ? "Hide" : "View"} Form Submissions
              </Button>
              
              {showSubmissions && submissions.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((submission, index) => (
                        <TableRow key={index}>
                          <TableCell>{submission.name}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell>{submission.company || "—"}</TableCell>
                          <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
              
              {showSubmissions && submissions.length === 0 && (
                <p className="text-center mt-4 text-gray-500">No submissions yet</p>
              )}
            </div>
          </div>

          <div className="lg:w-1/2">
            <Card className="border-0 shadow-md bg-white h-full">
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
      </div>
    </section>
  );
};

export default Contact;
