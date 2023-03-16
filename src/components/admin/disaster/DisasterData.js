
// /* Create functions to work out the stats from the backend 
//    Also add charts as images maybe?
//    Display worst disaster per country / get feedback from end users to 
//    know what data they would want to see
// */

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShowDisaster from './ShowDisaster';

// function DisasterData() {
//   const [disasters, setDisasters] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/disasters')
//       .then((res) => {
//         setDisasters(res.data);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.log('Error from DisasterData');
//       });
//   }, []);

//   if (isLoading) {
//     return <div className="App">Please wait ... a lot of data is trying to load</div>;
//   }

//   const disasterList =
//     disasters.length === 0
//       ? 'there is no disaster record!'
//       : disasters.map((disaster, k) => <ShowDisaster disaster={disaster} key={k} />);

//   return (
//     <div className='DisasterData'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-12'>
//             <br />
//             <h2 className='display-4 text-center'>Disaster List</h2>
//           </div>
//         </div>
        
//         <div className='list'>{disasterList}</div>
//         {/* <div className='list'>{<ShowDisaster disaster={disasters} />}</div> */}
//       </div>
//     </div>
//   );
// }

// export default DisasterData;