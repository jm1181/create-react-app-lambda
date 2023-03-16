import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";

const News = () => {

    const [reports, getReports] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [isFilter10Checked, setisFilter10Checked] = useState(true);
    const [isFilter20Checked, setisFilter20Checked] = useState(false);
    const [isFilter30Checked, setisFilter30Checked] = useState(false);
    const [query, setQuery] = useState('');

    useEffect (() => {
        const getAllReports = () => {
            axios.get(`https://api.reliefweb.int/v1/reports?appname=disasterproject&limit=${query}&preset=latest&profile=full&query[fields][]=country&query[value]=UK`)
                .then((res) => {
                    const allReports = res.data.data;
                    console.log(allReports);
                    getReports(allReports);
                    setLoading(false);
    
                }).catch(error => {
                    console.error(`Error: ${error}`);
                })
        }

        if (isFilter10Checked || isFilter20Checked || isFilter30Checked) {
            getAllReports();
        } else {
            setQuery(10);
            getAllReports();
        }
        
    }, [isFilter10Checked, isFilter30Checked, query]);

    const handleFilter30 = () => {
        setQuery('30');
        setisFilter30Checked(!isFilter30Checked);
        setisFilter20Checked(false);
        setisFilter10Checked(false);
    }

    const handleFilter20 = () => {
        setQuery('20');
        setisFilter20Checked(!isFilter20Checked);
        setisFilter10Checked(false);
        setisFilter30Checked(false);
    }

    const handleFilter10 = () => {
        setQuery('10');
        setisFilter30Checked(false);
        setisFilter20Checked(false);
        setisFilter10Checked(!isFilter10Checked);

    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="reports">
            <h4>Filter by:</h4>
            <label>
                <input type="checkbox" checked={isFilter10Checked} onChange={handleFilter10} />
                    10 Reports
            </label>
            <label>
                <input type="checkbox" checked={isFilter20Checked} onChange={handleFilter20} />
                    20 Reports
            </label>
            <label>
                <input type="checkbox" checked={isFilter30Checked} onChange={handleFilter30} />
                    30 Reports
            </label>

            {
                reports.map(report => (
                    <div>
                        <div>
                            <a href={report.fields.url}>
                                <h3 className="newsheader">{report.fields.title}</h3>
                            </a>
                            <p className="summary"> {report.fields.body} </p>
                            <p className="theme">
                                { 
                                    (() => {
                                        const themeList = [];
                                        console.log(report.fields);
                                        
                                        var length;
                                        if (report.fields.theme.length === undefined) {
                                            return " ";
                                        } else {
                                            length = report.fields.theme.length;
                                        }
                                        var item;
                                        for (let i = 0; i < length; i++) {
                                            if (i !== length - 1) {
                                                item = report.fields.theme[i].name;
                                                themeList.push(item + ',\n');
                                            } else {
                                                item = report.fields.theme[i].name;
                                                themeList.push(item + '\n');
                                            }
                                        }
                                        return themeList;
                                    })()
                                }
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    );

}

export default News;