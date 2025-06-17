
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Check } from 'lucide-react';

export const OTPEntry = () => {
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4) {
      // Generate a 6-digit numeric code for delivery person
      const newCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(newCode);
      setIsVerified(true);
      console.log('OTP verified:', otp, 'Generated code:', newCode);
    }
  };

  const resetOTP = () => {
    setOtp('');
    setIsVerified(false);
    setGeneratedCode('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <span>OTP Verification</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isVerified ? (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Delivery OTP
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Enter the OTP you received from Amazon or your delivery service
              </p>
              <Input
                id="otp"
                type="text"
                placeholder="Enter OTP (e.g., 1234)"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={8}
                className="text-center text-lg font-mono"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={otp.length < 4}
            >
              Verify OTP & Generate Code
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Check className="h-5 w-5" />
              <span className="font-medium">OTP Verified Successfully!</span>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Code for Delivery Person:</p>
              <div className="text-3xl font-mono font-bold text-green-600 tracking-wider">
                {generatedCode}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Share this code with the delivery person to unlock the box
              </p>
            </div>

            <Button 
              onClick={resetOTP}
              variant="outline"
              className="w-full"
            >
              Enter New OTP
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
