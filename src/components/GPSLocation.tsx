
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, RefreshCw, AlertTriangle } from 'lucide-react';

export const GPSLocation = () => {
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Simulated Smart Parcel Box location (in a real scenario, this would come from the box's GPS module)
  const boxLocation = {
    lat: 37.7749,
    lng: -122.4194,
    address: "123 Main Street, San Francisco, CA 94102"
  };

  const getCurrentLocation = () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLastUpdated(new Date().toLocaleTimeString());
        setIsLoading(false);
      },
      (error) => {
        setError('Unable to retrieve your location');
        setIsLoading(false);
        console.error('Geolocation error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const distance = location 
    ? calculateDistance(location.lat, location.lng, boxLocation.lat, boxLocation.lng)
    : null;

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-green-600" />
          <span>Smart Parcel Box Location</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Box Location */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-900">Box Location</span>
          </div>
          <div className="text-sm text-gray-700">
            <div>📍 {boxLocation.address}</div>
            <div className="text-xs text-gray-500 mt-1">
              Coordinates: {boxLocation.lat.toFixed(6)}, {boxLocation.lng.toFixed(6)}
            </div>
          </div>
        </div>

        {/* User Location & Distance */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-900">Your Location</span>
            </div>
            <Button
              onClick={getCurrentLocation}
              size="sm"
              variant="outline"
              disabled={isLoading}
            >
              <RefreshCw className={`h-3 w-3 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
          
          {error && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertTriangle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}
          
          {location && (
            <div className="text-sm text-gray-700">
              <div>📍 Current Position</div>
              <div className="text-xs text-gray-500 mt-1">
                Coordinates: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
              </div>
              {distance && (
                <div className="mt-2 p-2 bg-white rounded border">
                  <span className="font-medium">Distance to Box: </span>
                  <span className="text-blue-600 font-semibold">
                    {distance < 1 
                      ? `${(distance * 1000).toFixed(0)} meters`
                      : `${distance.toFixed(2)} km`
                    }
                  </span>
                </div>
              )}
              {lastUpdated && (
                <div className="text-xs text-gray-400 mt-1">
                  Last updated: {lastUpdated}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security Status */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-900">Security Status</span>
          </div>
          <div className="text-sm text-gray-600">
            ✅ GPS Tracking Active<br/>
            ✅ Anti-Theft Protection Enabled<br/>
            ✅ Real-time Location Monitoring
          </div>
        </div>

        {/* Map Link */}
        <Button 
          className="w-full"
          onClick={() => {
            const url = `https://www.google.com/maps?q=${boxLocation.lat},${boxLocation.lng}`;
            window.open(url, '_blank');
          }}
        >
          <MapPin className="h-4 w-4 mr-2" />
          View on Google Maps
        </Button>
      </CardContent>
    </Card>
  );
};
