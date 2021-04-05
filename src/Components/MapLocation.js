import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ContactUs from "./ContactUs";


function MapLocation(){
    return(
    <div className="mainContainer">
                    {/* <div className="map__text">
                       
                    </div> */}
              <ContactUs/>
                        {/* <MapContainer className="mapContainer" center={[23.4073, 85.4373]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.4073, 85.4373]}>
                            <Popup>
                            Birla Institute of Technology Mesra,Ranchi  <br /> Main Campus.
                            </Popup>
                        </Marker>
                        </MapContainer> */}
                 
    </div>
    
    )
}
export default MapLocation