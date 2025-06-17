
import { Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Smart Parcel Box</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Revolutionizing package delivery with advanced security technology. 
              Your packages are safe, secure, and always accessible when you need them.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>sales@smartparcelbox.com</li>
              <li>1-800-SMART-BOX</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Smart Parcel Box. All rights reserved. Keeping your deliveries safe and secure.</p>
        </div>
      </div>
    </footer>
  );
};
