import {IoEarth} from 'react-icons/io5';

export default function Footer() {
    return (
        <div className="Footer">
            <div className="box">
                {/* <IoEarth className='blah' size={40}/> */}
                <a href="/create-form">CONTACT</a>
                <a href="/terms-and-conditions">TERMS</a>
                <hr className='dotted'></hr>
                <div className='para-big'> 
                    <h4 style={{textAlign:'center',fontSize:'larger', padding:'none'}}>Disclaimer:</h4>
                    <p>
                        While we try everything to ensure accuracy, this information is purely indicative and should not be used for any decision making without alternate sources of information.
                        We are not responsible for any damage or loss resulting from use of the information presented on this website.
                    </p>
                </div>
                <hr className='dotted'></hr>
                
            </div>
        </div>
    )
}