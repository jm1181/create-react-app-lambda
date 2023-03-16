import React from 'react';
import useCollapse from 'react-collapsed';
import { AiOutlineClose } from 'react-icons/ai'
import { BiExpandAlt } from 'react-icons/bi'

const Key = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <section className='key-section'>
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {(() => {
                    if (isExpanded) {
                        return (
                            <div className='collapse'>
                                 <AiOutlineClose size={15}/>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <span className='key-collapse'> Key </span>
                                <div className='collapse'>
                                    <BiExpandAlt size={15}/>
                                </div>
                            </div>
                        )
                    }

                })()}
            </div>
            <div {...getCollapseProps()}>
                <div className="key" style={{color:'black'}}>
                <span className='key-collapse'> Key </span>
                    <br/>
                    <br/>
                    <div style={{ "--color": '#ffffff' }}>: Avalanche</div>
                    <div style={{ "--color": '#0c0c88' }}>: Cold Wave</div>
                    <div style={{ "--color": '#aadc8b' }}>: Cyclone</div>
                    <div style={{ "--color": '#9c5c0c' }}>: Drought</div>
                    <div style={{ "--color": '#8c8c8c' }}>: Earthquake</div>
                    <div style={{ "--color": '#fcf45c' }}>: Epidemic</div>
                    <div style={{ "--color": '#fca40c' }}>: Fire</div>
                    <div style={{ "--color": '#5cc4fc' }}>: Flood</div>
                    <div style={{ "--color": '#f43090' }}>: Insect Infestation</div>
                    <div style={{ "--color": '#3c9c3c'}}>: Land/Mud Slide</div>
                    <div style={{ "--color": '#000000' }}>: Other</div>
                    <div style={{ "--color": '#a421ec' }}>: Storm</div>
                    <div style={{ "--color": '#dcdcdc' }}>: Technological Disaster</div>
                    <div style={{ "--color": '#4c70f4' }}>: Tsunami</div>
                    <div style={{ "--color": '#dc3c04' }}>: Volcano</div>
                            
                </div>
            </div>
        </div>
        
            
        </section>
    );
}
export default Key;