
import { Button } from '@/components/ui/button';
import { Lock, Check } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure Package Delivery,
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}Anytime
              </span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Never miss a delivery again. Our Smart Parcel Box uses advanced OTP validation 
              and dynamic security codes to ensure your packages are safe, even when you're not home.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
              >
                Get Your Box Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "OTP Security",
                "Dynamic Codes",
                "24/7 Protection"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:ml-auto animate-fade-in">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Smart Parcel Box</span>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    ACTIVE
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Current Delivery Code</h3>
                    <div className="text-2xl font-mono font-bold text-blue-600 tracking-wider">
                      A7X9-2K4L
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Valid for 30 minutes</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Package Status</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">Delivery in progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
