import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

/* Both of these import throw "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory" */
require('@ngageoint/leaflet-geopackage/dist/leaflet-geopackage.min.js');
// require('@ngageoint/leaflet-geopackage');

export function Geopackage() {
	const map = useMap();

	useEffect(() => {
		const geopackageTileLayer = window.L.geoPackageTileLayer({
			geoPackageUrl: 'http://ngageoint.github.io/GeoPackage/examples/rivers.gpkg',
			layerName: 'rivers_tiles',
		});
		geopackageTileLayer.addTo(map);
	}, []);

	return null;
};
