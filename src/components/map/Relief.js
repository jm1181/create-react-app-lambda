import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayDisaster from './DisplayDisaster'
import MultiRangeSlider from "multi-range-slider-react";
import moment from "moment";
import Map from './emdat/HeatMap';
import { useNavigate } from 'react-router-dom';

export default function Relief() {
    const [disasters, setDisasters] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [minValue, set_minValue] = useState(2022);
    const [maxValue, set_maxValue] = useState(2023);
    const [query, setQuery] = useState("");
    const [viewMode, setViewMode] = useState('map');
    var [returnDis, setReturnDis] = useState('');

    const navigate = useNavigate()

    useEffect(() => {

        const getDisasters = () => {
            axios.get(`https://api.reliefweb.int/v1/disasters?appname=disasterproject&limit=1000&preset=latest&profile=full&query[value]=${query}&filter[field]=date.event&filter[value][from]=${minValue}-01-01T00:00:00%2B00:00&filter[value][to]=${maxValue}-12-31T00:00:00%2B00:00`)
                .then((res) => {
                    const allDisasters = res.data.data;
                    console.log(allDisasters);
                    setDisasters(allDisasters);
                    setLoading(false);
                }).catch(error => {
                    console.error(`Error: ${error}`);
                })
        }

        getDisasters();

    }, [minValue, maxValue, query]);

    if (isLoading) {
        return (
            <div class="loading">
                <p>Loading...</p>
            </div>
        )
    }

    const handleMap = () => {
        setViewMode('map')
    }

    const handleHeatMap = () => {
        setViewMode('heatMap')
    }

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const handleChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value);
    };

    const handleClick = (dis) => {
        setReturnDis(returnDis = dis);
        navigate("/relief", { state: { returnDis } }, { replace: true })
    }

    return (
        <div>
            <div className='breaking-news'>
                <div className="mainwrap"><div className="mainmove">
                    {
                        disasters.map((disaster, index) => {

                            if (index === 0) {
                                return (
                                    <div>
                                        <div className="mainitem">

                                            <span style={{ fontSize: 'larger' }}> <b> LATEST NEWS:
                                            </b> <button className='breaking-button'
                                                onClick={() => {
                                                    handleClick(disaster)
                                                }} > A {disaster.fields.primary_type.name} occurred in {
                                                        disaster.fields.country.map((d, i) => (
                                                            <span>
                                                                {(() => {
                                                                    if (disaster.fields.country.length === (i)) {
                                                                        return <span>{"and "}{d.name}</span>
                                                                    } else if (disaster.fields.country.length === 1) {
                                                                        return <span> {d.name}</span>
                                                                    } else {
                                                                        return <span>{d.name}{", "}</span>
                                                                    }

                                                                })()}

                                                            </span>
                                                        ))
                                                    } on the {moment(disaster.fields.date.event).utc().format('DD/MM/YYYY')} </button>
                                            </span>

                                        </div>

                                    </div>
                                )
                            }

                        })
                    }
                </div></div>
            </div>
            <div className="btn-group">
                <button onClick={handleMap}>Marked Map</button>
                <button onClick={handleHeatMap}>Heat Map</button>
            </div>

            {viewMode === 'map' && <DisplayDisaster disasterList={disasters} />}
            {viewMode === 'heatMap' && <Map disasters={disasters} />}
            <section className="map-filter">
                <span>
                    Displaying results between: <b>{minValue}</b> and <b>{maxValue}</b>
                </span>
                <br />
                <MultiRangeSlider
                    min={1985}
                    max={2023}
                    step={1}
                    style={{ border: 'none', boxShadow: 'none' }}
                    ruler='false'
                    barInnerColor='black'
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <br />
                <span>Filter by disaster type:</span>
                <br />
                <br />
                <div>
                    <select
                        className='dropdown-container'
                        style={{ width: 200 + 'px', height: 30 + 'px', fontSize: 'medium' }}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    >
                        <option value=""> All Disasters </option>
                        <option value="avalanche">Avalanche</option>
                        <option value="cold-wave">Cold Wave</option>
                        <option value="cyclone">Cyclone</option>
                        <option value="drought">Drought</option>
                        <option value="earthquake">Earthquake</option>
                        <option value="epidemic">Epidemic</option>
                        <option value="fire">Fire</option>
                        <option value="flash-flood">Flash Flood</option>
                        <option value="flood">Flood</option>
                        <option value="insect-infestation">Insect Infestation</option>
                        <option value="landslide">Land Slide</option>
                        <option value="storm">Storm</option>
                        <option value="ac">Technological Disaster</option>
                        <option value="tsunami">Tsunami</option>
                        <option value="volcano">Volcano</option>
                        <option value="wild-fire">Wild Fire</option>
                    </select>
                </div>
                <div style={{ fontSize: 'xx-small', paddingTop: '12px', paddingLeft: '25%' }}>This filter returns at most 1000 disasters.</div>
            </section>

        </div>
    )

}



