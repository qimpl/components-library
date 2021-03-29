import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type MarkerPosition = {
  lat: number;
  lng: number;
};

type MapProps = {
  googleApiKey: string;
  markers: MarkerPosition[];
};

const Map = ({ googleApiKey, markers }: MapProps): React.ReactElement => {
  const mapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
  };

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={markers[0] || { lat: 50.62925, lng: 3.057256 }}
        zoom={15}
        options={mapOptions}
      >
        {markers.map((marker: MarkerPosition) => {
          return <Marker position={marker} key={`${marker.lat}-${marker.lng}`} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
export { MapProps };
