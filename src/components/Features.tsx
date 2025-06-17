
import { Lock, Plus, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      icon: Lock,
      title: "OTP Validation",
      description: "Recipients enter their delivery OTP to generate a secure unlock code for the delivery person.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Plus,
      title: "Dynamic Security Codes",
      description: "Each request generates a fresh, unique code for maximum security and peace of mind.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Check,
      title: "Safe Storage",
      description: "Packages are securely stored in a protected compartment until you're ready to collect them.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-step security process ensures your packages are always safe and accessible only to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Maximum Security, Minimum Hassle
              </h3>
              <p className="text-blue-100 text-lg">
                Our Smart Parcel Box integrates seamlessly with all major delivery services 
                including Amazon, FedEx, UPS, and more. One-time setup, lifetime convenience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-blue-100 text-sm">Security Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
