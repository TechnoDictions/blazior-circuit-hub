
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your electronic component needs? Contact us today for personalized solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
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
              <Input 
                placeholder="Subject" 
                className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong className="text-blue-400">Email:</strong> info@blazior.com</p>
                  <p><strong className="text-blue-400">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-blue-400">Address:</strong> 123 Electronics Street, Tech City, TC 12345</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-blue-400">Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong className="text-blue-400">Saturday:</strong> 10:00 AM - 4:00 PM</p>
                  <p><strong className="text-blue-400">Sunday:</strong> Closed</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Need a Custom Quote?</h3>
                <p className="text-blue-100 mb-4">Contact our specialists for bulk orders and custom solutions.</p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
