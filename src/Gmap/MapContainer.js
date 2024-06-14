import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapContainer = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  // Function to get the user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Update the user's location in real-time
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      error => {
        setError(error.message);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100vh' }}
      zoom={14}
      center={userLocation}
    >
      {userLocation && <Marker position={userLocation} title="Your Location" />}
      {error && (
        <InfoWindow position={userLocation}>
          <div>{error}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapContainer;
