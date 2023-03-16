import React from 'react'
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dataJson from "./data/data.json"
import volcanicImg from "./images/volcanic.png";
import floodImg from "./images/flood.jpeg";
import disasterImg from "./images/disaster.jpg";
import earthquakeImg from "./images/earthquake.jpg";
import stormImg from "./images/storm.jpg";
import landslideImg from "./images/landslide.jpg";

const DisasterData = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    console.log(params);

    useEffect(() => {
        setData(dataJson)
    }, []);

    return (
        <div className ="DisasterData">
            {/* <p> {params.id} </p> */}
            {
                data.map(json => (
                    <p>
                        {(() => {
                            if (json.DisNo === params.id) {
                                return (
                                    <div>
                                        <h1> Information Page </h1>
                                            The {json.DisasterType} of {json.StartDay}/{json.StartMonth}/{json.StartYear}
                                        <p>The Disaster occurred in {json.Region}, in {json.Country} and lasted from 
                                        {json.StartDay}/{json.StartMonth}/{json.StartYear} to {json.EndDay}/{json.EndMonth}/{json.EndYear} 
                                        {/* for { */}
                                        
                                        {/* // (() => { */}
                                            {/* // let startDay = json.StartDay
                                            // let startMonth = json.StartMonth
                                            // let startYear = json.StartYear
                                            // var startStr = `${json.StartDay}/${json.StartMonth}/${json.StartYear}`;

                            
                                            // var endStr = `${json.EndDay}/${json.EndMonth}/${json.EndYear}`;
                                            // var date1 = dateFormat(new Date("01/01/2001"),"dd/mm/yy");
                                            // var date2 = new Date("02/01/2001");
                                            // var timeDiff = date2.getTime() - date1.getTime();
                                            // var dateDiff = timeDiff / (1000 * 3600 * 24);
                                            // return dateDiff ;
                                            // const date1 = new Date(json.StartYear, json.StartMonth, json.StartDay);
                                            // return date1; */}

                                     

                                        {/* // })()
                                        // } days.  */} </p>
                                        <div className="OutsideSingleMap">
                                            <MapContainer id="SingleMap" center={[json.Latitude, json.Longitude]} zoom={5.5} scrollWheelZoom={true}>
                                                <TileLayer
                                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />
                                                <Marker position={[parseInt(json.Latitude), parseInt(json.Longitude)]}></Marker>
                                            </MapContainer>
                                        </div>
                                        <p>"DisNo": {json.DisNo}</p>
                                        <p>"Year": {json.Year}</p>
                                        <p>"DisasterType": {json.DisasterType}</p>
                                        {
                                            (() => {
                                                if (json.DisasterSubtype === undefined) {
                                                    return <p>"DisasterSubtype": None </p>;
                                                } else {
                                                    return <p>"DisasterSubtype": {json.DisasterSubtype}</p>
                                                }
                                            })()
                                        }
                                        <p>"Country": {json.Country}</p>
                                        <p>"Region": {json.Region}</p>
                                        <p>"Continent": {json.Continent}</p>
                                        {
                                            (() => {
                                                if (json.DisMagValue === undefined) {
                                                    return <p>"DisMagValue": 0</p>;
                                                } else {
                                                    return <p>"DisMagValue": {json.DisMagValue}</p>
                                                }
                                            })()
                                        }
                                        <p>"DisMagScale": {json.DisMagScale}</p>
                                        <p>"Latitude": {json.Latitude}</p>
                                        <p>"Longitude": {json.Longitude}</p>
                                        <p>"StartYear": {json.StartYear}</p>
                                        <p>"StartMonth": {json.StartMonth}</p>
                                        <p>"StartDay": {json.StartDay}</p>
                                        <p>"EndYear": {json.EndYear}</p>
                                        <p>"EndMonth": {json.EndMonth}</p>
                                        <p>"EndDay": {json.EndDay}</p>
                                        {
                                            (() => {
                                                if (json.TotalDeaths === undefined) {
                                                    return <p>"TotalDeaths": 0</p>;
                                                } else {
                                                    return <p>"TotalDeaths": {json.TotalDeaths}</p>
                                                }
                                            })()
                                        }
                                        {
                                            (() => {
                                                if (json.NoInjured === undefined) {
                                                    return <p>"NoInjured": 0</p>;
                                                } else {
                                                    return <p>"NoInjured": {json.NoInjured}</p>
                                                }
                                            })()
                                        }
                                        <p>"NoAffected": {json.NoAffected}</p>
                                        <p>"TotalAffected": {json.TotalAffected}</p>
                                        <p>"CPI": {json.CPI}</p>
                                        {(() => {
                                            if (json.DisasterType === "Volcanic Activity") {
                                                return <img class="DisasterImg" src={volcanicImg} alt="Volcanic"/>
                                            } else if (json.DisasterType === "Flood") {
                                                return <img class="DisasterImg" src={floodImg} alt="Flood"/>
                                            } else if (json.DisasterType === "Landslide") {
                                                return <img class="DisasterImg" src={landslideImg} alt="Flood"/>
                                            } else if (json.DisasterType === "Storm") {
                                                return <img class="DisasterImg" src={stormImg} alt="Flood"/>
                                            } else if (json.DisasterType === "Earthquake") {
                                                return <img class="DisasterImg" src={earthquakeImg} alt="Flood"/>
                                            } else {
                                                return <img class="DisasterImg" src={disasterImg} alt="Flood"/>
                                            } 
                                        })()}
                                    </div>
                                );
                            } 
                        })()}
                    </p>
                ))
            
            }
            
            {/* Country: {(() => {
                                        <p> about to execute </p>
                                        for (var i = 0; i < dataJson.length; i++) {
                                            <p> Iterating </p>
                                            if (i.DisNo === params.id) {
                                                <p> in if </p>
                                                setCountry(i.Country)
                                            } else {
                                                <p> No Match </p>
                                            }
                                        }
                                    })} <br /> */}
            {/* <p> This is the country: {country} </p> */}
        </div>

    );
}

export default DisasterData;