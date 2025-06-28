
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Headphones, FileText } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Speak with our sales team",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@blazior.com",
      description: "Get detailed quotes",
      available: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Electronics Ave, Tech City",
      description: "Schedule a facility tour",
      available: "By appointment only"
    }
  ];

  const supportOptions = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with product specifications, compatibility, and installation guidance."
    },
    {
      icon: FileText,
      title: "Custom Quotes",
      description: "Request detailed pricing for bulk orders and specialized component requirements."
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Electronics Ave, Tech City, TC 12345",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Los Angeles", 
      address: "456 Component Blvd, LA, CA 90210",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri: 8AM-5PM PST"
    },
    {
      city: "Chicago",
      address: "789 Electronic St, Chicago, IL 60601", 
      phone: "+1 (555) 345-6789",
      hours: "Mon-Fri: 9AM-6PM CST"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to discuss your electronic component needs? Contact us today for personalized solutions and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-400">
            <span>✓ Free Consultation</span>
            <span>✓ Same-Day Quotes</span>
            <span>✓ Expert Guidance</span>
            <span>✓ Global Shipping</span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 text-center group hover:border-blue-500/50 transition-colors duration-300">
              <CardContent className="pt-6">
                <method.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{method.info}</p>
                <p className="text-gray-300 text-sm mb-1">{method.description}</p>
                <p className="text-gray-400 text-xs">{method.available}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
              <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Company Name" 
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Phone Number" 
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Tell us about your requirements, quantity needed, and timeline..." 
                rows={5}
                className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-gray-300 text-sm">
                  Subscribe to our newsletter for industry updates and product announcements
                </label>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            {/* Support Options */}
            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <option.icon className="w-8 h-8 text-blue-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                        <p className="text-gray-300 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-blue-400">Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                  <p><strong className="text-blue-400">Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
                  <p><strong className="text-blue-400">Sunday:</strong> Closed</p>
                  <p className="text-sm text-gray-400 mt-3">
                    Emergency support available 24/7 for critical orders
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Need a Custom Quote?</h3>
                <p className="text-blue-100 mb-4">Contact our specialists for bulk orders, custom solutions, and enterprise pricing.</p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Enterprise Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">{office.city}</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p className="flex items-start">
                      <MapPin className="w-4 h-4 text-blue-400 mr-2 mt-0.5" />
                      {office.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 text-blue-400 mr-2" />
                      {office.phone}
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      {office.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
