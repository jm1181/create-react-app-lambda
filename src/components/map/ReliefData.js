import React, {useState} from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { useLocation } from "react-router-dom";
import { Markup } from 'interweave';
import moment from "moment";
import features from './data.json'

export default function ReliefData() {

    const location = useLocation();
    console.log("location", location);
    const disaster = location.state.returnDis
    console.log(disaster)
    const [onselect] = useState({});

    /* error handling for this as well as the other one */
    const workoutCounter = (feature) => {
        var count = 0
        disaster.fields.country.map ((disaster) => {
            if (disaster.name === feature.properties.ADMIN
                || disaster.shortname === feature.properties.ADMIN) {
                return count = count + 1
            } else if ((disaster.name === "Türkiye"
                && feature.properties.ADMIN === "Turkey") ) {
                return count = count + 1
            } else {
                return
            }
        })
        return count
    }

    const displayDisasters = (admin) => {
        var disaster_list = []
        disaster.fields.country.map ((disaster, index) => {
            if (admin === disaster[index].name) {
                return disaster_list.push(<li>{disaster.fields.name} </li>)
            } else if (disaster[index].name === "Türkiye"
                            && admin === "Turkey") {
                return disaster_list.push(<li>{disaster.fields.name} </li>)
            } else {
                return 
            }
        })
        return disaster_list
    }

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
        e.target.setStyle(style(e.target.feature));
    })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
        highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        layer.on({
            mouseover: highlightFeature, 
            mouseout: resetHighlight,
        });
    }

    const mapPolygonColorToDensity=(counter => {
        return counter >= 1
            ? '#a50f15'
            : '#fee5d9';
    })

    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(workoutCounter(feature)),
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '2',
            fillOpacity: 0.7
        });
    });

    const mapStyle = {
        height: '400px',
        width: '500px',
        margin: 'auto',
    }

    return (
        <div className="ReliefData">
            {
                <div>
                    {(() => {
                        return (
                            <div className='whitebox'>
                                <h1>{disaster.fields.name}</h1>
                                <hr className='h1-line'></hr>
                                <div className="hwrap"><div className="hmove">
                                    {
                                        (() => {
                                            if (disaster.fields.current === true) {
                                                if (disaster.fields.status === "ongoing") {
                                                    return <hitem className='hitem'> This is a current event with an <b>{disaster.fields.status}</b> status. This disaster took place on the {moment(disaster.fields.date.event).utc().format('DD/MM/YYYY')}.</hitem>
                                                } else {
                                                    return <hitem className='hitem'> This is a current event with an <b>{disaster.fields.status}</b> status. This disaster took place on the {moment(disaster.fields.date.event).utc().format('DD/MM/YYYY')}.</hitem>
                                                }
                                            } else {
                                                return <hitem className='hitem'> This is a <b>past</b> event that took place on the {moment(disaster.fields.date.event).utc().format('DD/MM/YYYY')}.</hitem>
                                            }

                                        })()
                                    }
                                    <div className="hitem">{disaster.fields.name}</div>
                                </div></div>

                                {(() => {
                                    if (disaster.fields.country.length !== 1) {
                                        return (
                                            <p> There are {disaster.fields.country.length} countries that this disaster affected.
                                                These were: {
                                                    disaster.fields.country.map((d, index) => (
                                                        <span>
                                                            {(() => {
                                                                if (disaster.fields.country.length === (index + 1)) {
                                                                    return <span>{"and "}<b>{d.name}.</b></span>
                                                                } else if (disaster.fields.country.length === 1) {
                                                                    return <span><b> {d.name}. </b> </span>
                                                                } else {
                                                                    return <span><b>{d.name}</b>{", "}</span>
                                                                }

                                                            })()}

                                                        </span>
                                                    ))
                                                }
                                            </p>
                                        )
                                    } else {
                                        return
                                    }

                                })()}

                                <div className='container'>

                                    <div className="">
                                        <div className="">
                                            
                                            {onselect.admin && (
                                                <ul className="census-info">
                                                    {displayDisasters(onselect.admin)}
                                                </ul>

                                            )}
                                            <div className='relief-map'>
                                            <MapContainer id="map" 
                                                style={mapStyle} 
                                                center={[parseInt(disaster.fields.country[0].location.lat), parseInt(disaster.fields.country[0].location.lon)]} 
                                                zoom={(() => {
                                                    if (disaster.fields.country.length === 1) {
                                                        return 4
                                                    } else if (disaster.fields.country.length === 1) {
                                                        return 3
                                                    } else {
                                                        return 2.5
                                                    }

                                                })()} 
                                                scrollWheelZoom={true}>
                                                    <TileLayer
                                                        attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                                                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                                                    />
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

                                {(() => {
                                    if (disaster.fields["description-html"] === undefined) {
                                        return
                                    } else {
                                        return (
                                            <div>
                                                <h2> Disaster Description</h2>
                                                <Markup content={disaster.fields["description-html"]} />
                                            </div>
                                        )
                                    }
                                })()}
                            </div>
                        );
                    })()}
                </div>
            }
        </div>
    )
}
