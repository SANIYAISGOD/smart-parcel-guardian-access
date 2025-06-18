
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Clock, Plus } from 'lucide-react';
import { OTPEntry } from './OTPEntry';
import { GPSLocation } from './GPSLocation';

export const Dashboard = () => {
  const [currentCode, setCurrentCode] = useState("472859");
  const [timeLeft, setTimeLeft] = useState("28:34");

  const generateNewCode = () => {
    // Generate 6-digit numeric code only
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCurrentCode(newCode);
    setTimeLeft("30:00");
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            User-Friendly Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your delivery OTP, generate security codes, track your parcel box location, and monitor packages all from one intuitive dashboard.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <Lock className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Smart Parcel Box Dashboard</h3>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Box #SPB-001
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* First Row - OTP Entry and Current Access Code */}
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <OTPEntry />
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Lock className="h-5 w-5 text-blue-600" />
                        <span>Current Access Code</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-mono font-bold text-blue-600 tracking-wider mb-2">
                          {currentCode}
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
                          <Clock className="h-4 w-4" />
                          <span>Expires in {timeLeft}</span>
                        </div>
                        <Button 
                          onClick={generateNewCode}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Generate New Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Second Row - GPS Location and Delivery Status */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <GPSLocation />
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">Amazon Package</div>
                            <div className="text-sm text-gray-500">Order #123-456789</div>
                          </div>
                          <div className="bg-yellow-400 text-yellow-900 text-xs font-medium px-2 py-1 rounded-full">
                            In Transit
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">FedEx Package</div>
                            <div className="text-sm text-gray-500">Tracking #987654321</div>
                          </div>
                          <div className="bg-green-400 text-green-900 text-xs font-medium px-2 py-1 rounded-full">
                            Delivered
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-gray-500 text-sm">Packages This Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-500 text-sm">Delivery Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-gray-500 text-sm">Security Incidents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">●</div>
                  <div className="text-gray-500 text-sm">GPS Tracking Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
