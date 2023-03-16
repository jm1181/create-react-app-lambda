
/* Create functions to work out the stats from the backend 
   Also add charts as images maybe?
   Display worst disaster per country / get feedback from end users to 
   know what data they would want to see
*/

import React, { useState } from 'react';

function Statistics() {

  const [viewMode, setViewMode] = useState('bar');

  const handleBar = () => {
    setViewMode('bar')
  }

  const handleMap = () => {
    setViewMode('map')
  }

  const handleTable = () => {
    setViewMode('table')
  }

  return (
    <div className='Statistics'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Disaster List</h2>
          </div>
        </div>
        Filter by: <select
          className='dropdown-container'
          style={{ width: 200 + 'px', height: 30 + 'px', fontSize: 'medium' }}
          onChange={(e) => {
              // handleChange(e);
          }}
        >
          <option value="death"> Total Deaths </option>
          <option value="injured">Total Injured</option>
          <option value="affected">Total Affected</option>
          <option value="homeless">Total Homeless</option>
          <option value="economic">Total Economic Damage</option>
        </select> 
        <div className='death-stats'>
          <div className="btn-group">
            <button onClick={handleBar}>Chart</button>
            <button onClick={handleMap}>Map</button>
            <button onClick={handleTable}>Table</button>
          </div>
          <div className='death'>
            {viewMode === 'bar' && <iframe title="totaldeaths-bar" className="chart" width="90%" height="480" src="https://charts.mongodb.com/charts-project-0-eqccy/embed/charts?id=640499b9-9d2d-402b-8dac-02e6c35678cd&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>}
            {viewMode === 'map' && <iframe title="totaldeaths-map" className="chart" width="90%" height="480" src="https://charts.mongodb.com/charts-project-0-eqccy/embed/charts?id=640c7619-7b98-40a1-81e5-22764c6d7d32&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>}
            {viewMode === 'table' && <iframe title="totaldeaths-table" className='chart' width="90%" height="480" src="https://charts.mongodb.com/charts-project-0-eqccy/embed/charts?id=640cae06-554b-4132-875c-0508f9df2401&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;