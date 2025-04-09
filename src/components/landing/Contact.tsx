import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone, Check, AlertCircle } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional().refine((val) => !val || /^[0-9+\-\s()]{7,15}$/.test(val), {
    message: "Please enter a valid phone number.",
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
  const [googleSheetUrl, setGoogleSheetUrl] = useState("");
  const [showGoogleSheetConfig, setShowGoogleSheetConfig] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState<{
    status: 'idle' | 'success' | 'error';
    message?: string;
    timestamp?: string;
  }>({ status: 'idle' });

  // Load googleSheetUrl from localStorage on component mount
  useEffect(() => {
    const savedUrl = localStorage.getItem('googleSheetWebhookUrl');
    if (savedUrl) {
      setGoogleSheetUrl(savedUrl);
    }
  }, []);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Store form submission locally
    const newSubmission = { ...values };
    const timestamp = new Date().toISOString();
    
    try {
      // If Google Sheet webhook URL is set, send data there
      if (googleSheetUrl) {
        console.log("Submitting to Google Sheet:", googleSheetUrl);
        
        try {
          await fetch(googleSheetUrl, {
            method: "POST",
            mode: "no-cors", // Required for Google Apps Script webhooks
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              timestamp,
            }),
          });
          
          console.log("Google Sheet submission sent");
          setIntegrationStatus({
            status: 'success',
            message: 'Data likely sent to Google Sheet (no-cors mode prevents confirmation)',
            timestamp: new Date().toLocaleTimeString()
          });
        } catch (error) {
          console.error("Error sending to Google Sheet:", error);
          setIntegrationStatus({
            status: 'error',
            message: `Failed to send to Google Sheet: ${error instanceof Error ? error.message : 'Unknown error'}`,
            timestamp: new Date().toLocaleTimeString()
          });
        }
      }
      
      // Store locally regardless of Google Sheet submission
      setSubmissions(prev => [...prev, newSubmission]);
      
      toast({
        title: "Message received!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      });
      setIntegrationStatus({
        status: 'error',
        message: `Form submission error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toLocaleTimeString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveGoogleSheetUrl = () => {
    if (googleSheetUrl) {
      localStorage.setItem('googleSheetWebhookUrl', googleSheetUrl);
      setIntegrationStatus({
        status: 'idle',
        message: 'Configuration saved. Submit a form to test the integration.',
        timestamp: new Date().toLocaleTimeString()
      });
      toast({
        title: "Configuration Saved",
        description: "Form submissions will now be sent to your Google Sheet."
      });
    } else {
      localStorage.removeItem('googleSheetWebhookUrl');
      setIntegrationStatus({ status: 'idle' });
      toast({
        title: "Configuration Cleared",
        description: "Google Sheet integration has been disabled."
      });
    }
  };

  const testGoogleSheetIntegration = async () => {
    if (!googleSheetUrl) {
      toast({
        title: "No URL Configured",
        description: "Please enter a Google Sheet webhook URL first.",
        variant: "destructive"
      });
      return;
    }

    setIntegrationStatus({
      status: 'idle',
      message: 'Testing connection...',
      timestamp: new Date().toLocaleTimeString()
    });

    try {
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          phone: "123-456-7890",
          company: "Test Company",
          message: "This is a test submission to verify Google Sheet integration",
          timestamp: new Date().toISOString()
        }),
      });

      setIntegrationStatus({
        status: 'success',
        message: 'Test data sent! Check your Google Sheet for a new test entry.',
        timestamp: new Date().toLocaleTimeString()
      });

      toast({
        title: "Test Sent",
        description: "Check your Google Sheet for a test entry."
      });
    } catch (error) {
      console.error("Test integration error:", error);
      setIntegrationStatus({
        status: 'error',
        message: `Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toLocaleTimeString()
      });

      toast({
        title: "Test Failed",
        description: "Unable to connect to Google Sheet. Verify your webhook URL.",
        variant: "destructive"
      });
    }
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (123) 456-7890" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                </div>
                
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
            
            {/* Google Sheet Configuration */}
            <div className="mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowGoogleSheetConfig(!showGoogleSheetConfig)} 
                className="w-full"
              >
                {showGoogleSheetConfig ? "Hide" : "Configure"} Google Sheet Connection
              </Button>
              
              {showGoogleSheetConfig && (
                <div className="mt-4 p-4 border rounded-md">
                  <h3 className="text-lg font-medium mb-3">Google Sheet Webhook URL</h3>
                  <div className="flex gap-2">
                    <Input
                      value={googleSheetUrl}
                      onChange={(e) => setGoogleSheetUrl(e.target.value)}
                      placeholder="Paste your Google Apps Script Web App URL"
                      className="flex-1"
                    />
                    <Button 
                      variant="outline"
                      onClick={saveGoogleSheetUrl}
                    >
                      {googleSheetUrl ? "Save" : "Clear"}
                    </Button>
                  </div>
                  
                  {googleSheetUrl && (
                    <div className="mt-2">
                      <Button 
                        variant="outline"
                        onClick={testGoogleSheetIntegration}
                        className="w-full"
                      >
                        Test Connection
                      </Button>
                    </div>
                  )}
                  
                  {integrationStatus.message && (
                    <Alert className="mt-3" variant={integrationStatus.status === 'error' ? "destructive" : 
                                                      integrationStatus.status === 'success' ? "default" : "outline"}>
                      {integrationStatus.status === 'success' && <Check className="h-4 w-4" />}
                      {integrationStatus.status === 'error' && <AlertCircle className="h-4 w-4" />}
                      <AlertTitle>Integration Status</AlertTitle>
                      <AlertDescription>
                        {integrationStatus.message}
                        {integrationStatus.timestamp && <div className="text-xs mt-1">Last updated: {integrationStatus.timestamp}</div>}
                      </AlertDescription>
                    </Alert>
                  )}

                  <p className="text-sm text-gray-500 mt-2">
                    To set up a Google Sheet integration: 
                    1. Create a Google Sheet 
                    2. Go to Extensions &gt; Apps Script
                    3. Paste the code from the guide below
                    4. Deploy as a web app and copy the URL
                  </p>
                  <a 
                    href="https://developers.google.com/apps-script/guides/web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Google Apps Script Web App Guide
                  </a>
                </div>
              )}
            </div>
            
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
                        <TableHead>Phone</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((submission, index) => (
                        <TableRow key={index}>
                          <TableCell>{submission.name}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell>{submission.phone || "—"}</TableCell>
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
