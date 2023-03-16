import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function DisplayRelief(props) {
    const navigate = useNavigate()
    var [returnDis, setReturnDis] = useState({fields:"notworking"})

    const display = (props) => {
        const {disaster, disasterList} = props;

        const handleClick = (dis) => {
            setReturnDis(returnDis=dis);
            navigate("/relief", {state:{returnDis}}, {replace:true})
        }

        if (props.disaster) {
            return (
                <div>
                    {disasterList.map (d => (
                        <div>
                            {(() => {
                                if (d.fields.primary_country.name === disaster.fields.primary_country.name) {
                                    console.log("d", d)
                                    // setCounter(counter + 1)
                                    return (
                                        <div className='container'>
                                            <button
                                                className='disaster-button'
                                                onClick={() => {
                                                    setReturnDis(d)
                                                    console.log("in onclick", d)
                                                    handleClick(d)
                                
                                                }}
                                            >
                                                <h4>{d.fields.name}</h4>
                                            </button>
                                        </div>
                                    )
                                }
                            })()}
                            
                        </div>
                                
                        
                        
                    ))}
                    {console.log("disaster",disaster)}
                    
                </div>
            )
        }
    }

    return (
        <div>
            {display(props)}
        </div>
    );
}