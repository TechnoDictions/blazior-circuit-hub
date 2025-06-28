
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cpu, Settings } from "lucide-react";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Electronic Components",
      description: "High-quality resistors, capacitors, semiconductors, and integrated circuits for all applications",
      features: ["Resistors & Capacitors", "Semiconductors", "Integrated Circuits", "Connectors & Cables"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      icon: Cpu,
      price: "Starting from $0.10",
      applications: ["Consumer Electronics", "Automotive", "Industrial Control", "Medical Devices"]
    },
    {
      title: "Electronic Devices",
      description: "Professional-grade electronic devices and precision measurement instruments",
      features: ["Measurement Tools", "Testing Equipment", "Control Systems", "Display Units"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      icon: Settings,
      price: "Starting from $50",
      applications: ["R&D Labs", "Manufacturing", "Quality Control", "Field Testing"]
    },
    {
      title: "Power Inverters",
      description: "Reliable power inverters for industrial and residential energy conversion applications",
      features: ["Pure Sine Wave", "Modified Sine Wave", "Grid-Tie Inverters", "Battery Chargers"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      icon: Zap,
      price: "Starting from $200",
      applications: ["Solar Systems", "Backup Power", "RV & Marine", "Industrial UPS"]
    }
  ];

  const specifications = [
    {
      category: "Components",
      specs: ["Operating Temp: -40°C to +125°C", "Voltage Range: 1.8V to 48V", "Tolerance: ±1% to ±5%", "RoHS Compliant"]
    },
    {
      category: "Devices", 
      specs: ["Accuracy: ±0.1%", "Display: LCD/LED", "Interface: USB/RS232", "Calibration Certified"]
    },
    {
      category: "Inverters",
      specs: ["Efficiency: >95%", "THD: <3%", "Protection: Over/Under Voltage", "Warranty: 2-5 Years"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive selection of premium electronic components and devices for all your trading needs
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-400">
            <span>✓ Quality Guaranteed</span>
            <span>✓ Fast Shipping</span>
            <span>✓ Technical Support</span>
            <span>✓ Bulk Discounts Available</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {category.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-gray-300">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Products:</h4>
                  <ul className="space-y-1">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.applications.map((app, idx) => (
                      <span key={idx} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-slate-900/50 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <h4 className="text-blue-400 font-semibold mb-4">{spec.category}</h4>
                <ul className="space-y-2">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need Custom Solutions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our engineering team can help you find the perfect components for your specific requirements. 
                Get personalized recommendations and bulk pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Download Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
