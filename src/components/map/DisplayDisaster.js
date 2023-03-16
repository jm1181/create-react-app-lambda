import React from 'react'
import {MapContainer, Popup, Marker, TileLayer} from "react-leaflet";
import { MarkerLayer } from "react-leaflet-marker";
import DisplayRelief from './DisplayRelief';
import { Icon } from "leaflet";
import Key from './Key';

import orangeIcon from './icons/orange.png'
import redIcon from './icons/red.png'
import darkBlueIcon from './icons/dark-blue.png'
import blueIcon from './icons/blue.png'
import greenIcon from './icons/green.png'
import yellowIcon from './icons/yellow.png'
import whiteIcon from './icons/white.png'
import pinkIcon from './icons/pink.png'
import greyIcon from './icons/grey.png'
import brownIcon from './icons/brown.png'
import purpleIcon from './icons/purple.png'
import navyIcon from './icons/navy.png'
import blackIcon from './icons/black.png'
import lightGreyIcon from './icons/light-grey.png'
import darkGreenIcon from './icons/dark-green.png'

// ------ BELOW ------ a default marker code
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
// });


export default function DisplayDisaster(props) {

    // floods
    const blue = new Icon({
        iconUrl: blueIcon,
        iconSize: [32, 32]
    })
    // tsunami
    const darkBlue = new Icon({
        iconUrl: darkBlueIcon,
        iconSize: [32, 32]
    })
    // wild fire
    const orange = new Icon({
        iconUrl: orangeIcon,
        iconSize: [32, 32]
    })
    // infestation
    const pink = new Icon({
        iconUrl: pinkIcon,
        iconSize: [32, 32]
    })
    // volcano
    const red = new Icon({
        iconUrl: redIcon,
        iconSize: [32, 32]
    })
    // other
    const black = new Icon({
        iconUrl: blackIcon,
        iconSize: [32, 32]
    })
    // epidemic
    const yellow = new Icon({
        iconUrl: yellowIcon,
        iconSize: [32, 32]
    })
    // cyclone
    const green = new Icon({
        iconUrl: greenIcon,
        iconSize: [32, 32]
    })
    // cold wave
    const navy = new Icon({
        iconUrl: navyIcon,
        iconSize: [32, 32]
    })
    // avalanche
    const white = new Icon({
        iconUrl: whiteIcon,
        iconSize: [32, 32]
    })
    // earthquakes
    const grey = new Icon({
        iconUrl: greyIcon,
        iconSize: [32, 32]
    })
    // technological disaster
    const lightGrey = new Icon({
        iconUrl: lightGreyIcon,
        iconSize: [32, 32]
    })
    // storms
    const purple = new Icon({
        iconUrl: purpleIcon,
        iconSize: [32, 32]
    })
    // drought
    const brown = new Icon({
        iconUrl: brownIcon,
        iconSize: [32, 32]
    })
    // land/mud slide
    const darkGreen = new Icon({
        iconUrl: darkGreenIcon,
        iconSize: [32, 32]
    })

    const display = (props) => {
        const {disasterList} = props;
        console.log(disasterList);

        if (props.disasterList) {
            return (
                <div>
                    <div className="Map">
                        <MapContainer id="map" center={[15, 40]} zoom={2.5} zoomSnap={0.5} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/* <LayersControl position="topleft">
                                {/* <LayersControl.Overlay name="key">
                                    <Key />
                                </LayersControl.Overlay> */}
                                {/* <LayersControl.Overlay name="KEY">
                                    <FeatureGroup pathOptions={{ color: 'purple' }}>
                                        <Key />
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                            </LayersControl> */} 
                            <Key/>
                            {
                                disasterList.map((disaster, index) => (
                                    <div className="disaster" key={disaster.id || index}>
                                        <MarkerLayer>
                                        {(() => {
                                            if (disaster.fields.primary_country.location.lat === undefined) {
                                                    console.log("ISSUE", disaster)
                                                    return 
                                            } else {
                                                return (
                                                    <Marker position={[parseInt(disaster.fields.primary_country.location.lat), parseInt(disaster.fields.primary_country.location.lon)]} 
                                                            icon={(() => {
                                                                    const code = disaster.fields.primary_type.code
                                                                    if (code === "WF" || code === "FR") {
                                                                        return orange
                                                                    } else if (code === "FL" || code === "FF") {
                                                                        return blue
                                                                    } else if (code === "TS") {
                                                                        return darkBlue
                                                                    } else if (code === "VO") {
                                                                        return red
                                                                    } else if (code === "TC") {
                                                                        return green
                                                                    } else if (code === "EQ") {
                                                                        return grey
                                                                    } else if (code === "DR") {
                                                                        return brown
                                                                    } else if (code === "EP") {
                                                                        return yellow
                                                                    } else if (code === "ST") {
                                                                        return purple
                                                                    } else if (code === "AV") {
                                                                        return white
                                                                    } else if (code === "AC") {
                                                                        return lightGrey
                                                                    } else if (code === "IN") {
                                                                        return pink
                                                                    } else if (code === "CW") {
                                                                        return navy
                                                                    } else if (code === "LS" || code === "MS") {
                                                                        return darkGreen
                                                                    } else {
                                                                        return black
                                                                    }
                                                            })()}>
                                                        <Popup>
                                                            <h1 className = "HeadingPopUp">{disaster.fields.primary_country.name}</h1>  
                                                            <div className = "TextPopUp">
                                                                <DisplayRelief disaster = {disaster} disasterList = {disasterList} />
                                                            </div>
                                                        </Popup>
                                                    </Marker>
                                                )
                                            }
                                        })()}
                                        </MarkerLayer>
                                    </div>
                                ))
                            }
                        </MapContainer>
                    </div>
                </div>
            )
        } else {
            return (
                <h1> Something is not working. Please try again later. </h1>
            )
        }
    }

    return (
        <div>
            {display(props)}
        </div>
    );
   
}