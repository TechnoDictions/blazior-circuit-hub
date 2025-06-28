
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Clock, Globe, Users } from "lucide-react";

export const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "5000+", label: "Products" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over a decade of specialized experience in electronic component trading and distribution."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001 certified processes ensuring every component meets the highest quality standards."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Express shipping worldwide with same-day processing for urgent orders."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across 25+ countries with localized support and expertise."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "RoHS Compliance Certified",
    "CE Marking Authorization", 
    "FCC Equipment Authorization"
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">Blazior</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Blazior is a leading trading company specializing in high-quality electric and electronic 
              components. With years of experience in the industry, we have built a reputation for 
              reliability, quality, and exceptional customer service.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our expertise spans across electronic components, sophisticated devices, and power inverters. 
              We serve businesses across various industries, providing them with the components they need 
              to power their innovations and operations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-600 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Our Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
              alt="Electronic components and devices"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-600 text-center group hover:border-blue-500/50 transition-colors duration-300">
              <CardContent className="pt-6">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                To empower innovation by providing reliable, high-quality electronic components and exceptional 
                service to businesses worldwide. We bridge the gap between cutting-edge technology and practical 
                implementation, ensuring our clients have access to the components they need to succeed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
