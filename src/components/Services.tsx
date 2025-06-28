
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Wrench, Globe, Clock, Award } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Worldwide shipping with express delivery options and real-time tracking.",
      features: ["Express Shipping", "Real-time Tracking", "Secure Packaging", "Insurance Coverage"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and certification processes for all electronic components.",
      features: ["Component Testing", "Quality Certificates", "RoHS Compliance", "Warranty Protection"]
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Expert technical guidance and engineering support for your projects.",
      features: ["Design Consultation", "Compatibility Check", "Installation Support", "Troubleshooting"]
    },
    {
      icon: Globe,
      title: "Sourcing Solutions",
      description: "Hard-to-find components sourced from our global network of suppliers.",
      features: ["Custom Sourcing", "Obsolete Parts", "Alternative Solutions", "Volume Discounts"]
    },
    {
      icon: Clock,
      title: "Inventory Management",
      description: "Flexible inventory solutions to meet your business requirements.",
      features: ["Just-in-Time Delivery", "Bulk Storage", "Scheduled Releases", "Inventory Reports"]
    },
    {
      icon: Award,
      title: "Value-Added Services",
      description: "Additional services to streamline your operations and reduce costs.",
      features: ["Kitting Services", "Custom Packaging", "Drop Shipping", "Vendor Management"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions beyond just components - we're your complete electronic trading partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-600 group hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-blue-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need Custom Services?</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Every business has unique requirements. Let us create a tailored service package 
                that fits your specific needs and budget.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Discuss Custom Solutions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
