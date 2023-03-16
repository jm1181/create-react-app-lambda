import React from 'react';

const Legend = () => {
    return (
        <div className="legend">
            # of Disasters 
            <br/>
            <br/>
            <div style={{ "--color": '#a50f15' }}>10+</div>
            <div style={{ "--color": '#de2d26' }}>5-10</div>
            <div style={{ "--color": '#fb6a4a' }}>3-4</div>
            <div style={{ "--color": '#fc9272' }}>2</div>
            <div style={{ "--color": '#fcbba1'}}>1</div>
            <div style={{ "--color": '#fee5d9' }}>0</div>
        </div>
    );
}
export default Legend;