
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MapViewProps } from '@/types/map';
import { AlertCircle } from 'lucide-react';

const MapView = ({ mapData, linkingAttributes }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string>("");
  
  const validateMapData = (data: typeof mapData): boolean => {
    if (!data.latitude || !data.longitude) {
      setError("Invalid map data: Missing latitude or longitude");
      return false;
    }
    if (data.latitude < -90 || data.latitude > 90) {
      setError("Invalid latitude: Must be between -90 and 90");
      return false;
    }
    if (data.longitude < -180 || data.longitude > 180) {
      setError("Invalid longitude: Must be between -180 and 180");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!validateMapData(mapData)) return;

    try {
      // Initialize map only once
      if (!map.current) {
        mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
        
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [mapData.longitude, mapData.latitude],
          zoom: mapData.zoom || 12,
          pitch: mapData.pitch || 0,
          bearing: mapData.bearing || 0,
        });

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.NavigationControl(),
          'top-right'
        );
      }

      // Update map when mapData changes
      if (map.current) {
        map.current.flyTo({
          center: [mapData.longitude, mapData.latitude],
          zoom: mapData.zoom || map.current.getZoom(),
          pitch: mapData.pitch || map.current.getPitch(),
          bearing: mapData.bearing || map.current.getBearing(),
          essential: true
        });
      }

      // Add markers for linking attributes
      linkingAttributes.forEach(attr => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = `<div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">${attr.id}</div>`;
        
        new mapboxgl.Marker(el)
          .setLngLat([mapData.longitude, mapData.latitude])
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3 class="font-bold">${attr.name}</h3>`))
          .addTo(map.current!);
      });

    } catch (err) {
      setError(`Error initializing map: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapData, linkingAttributes]);

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Lat: {mapData.latitude.toFixed(4)} | Lon: {mapData.longitude.toFixed(4)}
        </p>
      </div>
    </div>
  );
};

export default MapView;
