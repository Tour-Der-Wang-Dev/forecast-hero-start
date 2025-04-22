
export interface LinkingAttribute {
  id: string;
  name: string;
}

export interface MapLocation {
  latitude: number;
  longitude: number;
}

export interface MapData extends MapLocation {
  zoom?: number;
  pitch?: number;
  bearing?: number;
}

export interface MapViewProps {
  mapData: MapData;
  linkingAttributes: LinkingAttribute[];
}
