import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, GeoJSON, TileLayer} from 'react-leaflet';
import features from '../data.json';
import Legend from './Legend';

export default function Map(props) {
    const [onselect, setOnselect] = useState({});
    const display = (props) => {
        const {disasters} = props;
        console.log(disasters);

        if (props.disasters) {

            /* error handling for this as well as the other one */
            const workoutCounter = (feature) => {
                var count = 0
                disasters.map (disaster => {
                    if (feature.properties.ADMIN === disaster.fields.primary_country.name
                        || disaster.fields.primary_country.shortname === feature.properties.ADMIN) {
                        count = count + 1
                    } else if ((disaster.fields.primary_country.name === "Türkiye"
                    && feature.properties.ADMIN === "Turkey") ) {
                        count = count + 1
                    }
                })
                return count
            }

            /* function determining what should happen on click, this function updates our state*/
            const clickFeature = (e=> {
                var layer = e.target;
                const { ADMIN } = e.target.feature.properties;
                setOnselect({
                    admin: ADMIN
                });
                layer.setStyle({
                    weight: 1,
                    color: "black",
                    fillOpacity: 1
                });
            });

            /* function determining what should happen on hover, this function updates our state*/
            const highlightFeature = (e=> {
                var layer = e.target;
                layer.setStyle({
                    weight: 1,
                    color: "black",
                    fillOpacity: 1
                });
            });
            /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
            const resetHighlight= (e =>{
                // setOnselect({});
                e.target.setStyle(style(e.target.feature));
            })
            /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
            highlightFeature and resetHighlight*/
            const onEachFeature= (feature, layer)=> {
                layer.on({
                    click: clickFeature,
                    mouseover: highlightFeature, 
                    mouseout: resetHighlight,
                });
            }

            const mapPolygonColorToDensity=(counter => {
                return counter > 10
                    ? '#a50f15'
                    : counter >= 5
                    ? '#de2d26'
                    : counter >= 3
                    ? '#fb6a4a'
                    : counter === 2
                    ? '#fc9272'
                    : counter === 1
                    ? '#fcbba1'
                    : '#fee5d9';
            })

            const style = (feature => {
                return ({
                    fillColor: mapPolygonColorToDensity(workoutCounter(feature)),
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    dashArray: '2',
                    fillOpacity: 0.7
                });
            });

            return (
                <div className='container'>
                
                    <div className="">
                        <div className="">
                        {!onselect.admin && (
                        <div className="census-info">
                            <Legend/>
                        </div>
                        )}
                        {onselect.admin && (
                            <ul className="census-info">
                                <Legend />
                            </ul>
                            
                        )}
                            <div className='Map'>
                                <MapContainer id="map" 
                                    center={[15, 40]} 
                                    zoom={2.5} 
                                    zoomSnap={0.5} 
                                    scrollWheelZoom={true}>
                                        <TileLayer
                                            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                                        />
                                        {/* <FullscreenControl position='topleft'/> */}
                                        {features && (
                                            <GeoJSON data={features} 
                                                style={style} 
                                                onEachFeature={onEachFeature}
                                            />
                                        )}
                                
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>

            )

        }
    }
    
    return (
        display(props)
    )
}


// const Map = () => {
//     const mapStyle = {
//         height: '100vh',
//         width: '100%',
//         margin: '0 auto',
//     }
//     return(
//          <div className='container'>
//             <div className="header">
//             <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
//             <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br/>in 2019
//             Each County, details displayed by the map include, total population and number of each gender.</p></div>
//             <div className="">
//                 <div className="">
//                 <MapContainer center={[1.286389, 38.817223]} 
//                 zoom={6} scrollWheelZoom={true} style={mapStyle}>
//                     {data && (
//                         <GeoJSON data={data}
//                     />)}
//                     <TileLayer
//                         attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
//                         url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//                     />
//                 </MapContainer>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Map;



















// import React from 'react'
// import {MapContainer, Popup, Marker, TileLayer} from "react-leaflet";
// import { MarkerLayer } from "react-leaflet-marker";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import 'leaflet/dist/leaflet.css';
// import emdatData from "./data/emdat.json"
// import dataJson from "./data/data.json"
// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

// // const corner1 = L.latLng(-90, -200)
// // const corner2 = L.latLng(90, 200)
// // const bounds = L.latLngBounds(corner1, corner2)


// const Map = () => {

//     const navigate = useNavigate();
//     console.log(emdatData);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setData(dataJson)
//     }, []);

//     return (
//         <div>
//             <div className="Map">
//             {/* <iframe id="map" src="https://datahub.io/core/geo-countries/r/0.html" width="100%" height="100%" frameborder="0"></iframe> */}
//             </div>
//             <div className="Map">
//                 <MapContainer id="map" center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
//                     <TileLayer
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
                    
//                     {
//                         data.map(json => (
//                             <MarkerLayer>
//                                 <Marker position={[parseInt(json.Latitude), parseInt(json.Longitude)]}>
//                                     <Popup>
//                                         <h1 class = "HeadingPopUp">{json.DisasterType}</h1>  
//                                         <div class = "TextPopUp">
//                                             {(() => {
//                                                 if (json.StartDay === undefined) {
//                                                     return <h3>{json.StartMonth}/{json.StartYear} - {json.EndMonth}/{json.EndYear}</h3>
//                                                 } else {
//                                                     return <h3>{json.StartDay}/{json.StartMonth}/{json.StartYear} - {json.EndDay}/{json.EndMonth}/{json.EndYear}</h3>
//                                                 }
//                                             })()}
   
                                            
//                                         </div>
//                                         <div class ="DivButton">
//                                             <button class="DisasterButton" onClick={() => {
//                                                 let path = json.DisNo;
//                                                 navigate(path);
//                                             }}> Show More </button>
//                                         </div>
//                                     </Popup>
//                                 </Marker>
//                             </MarkerLayer>
//                         ))
                            
//                     }
                    
//                 </MapContainer>
//             </div>
//         </div>
//     )
// }

// export default Map;
