import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

import 'leaflet/dist/leaflet.css';
// import emdatData from "./data/emdat.json"
// import dataJson from "./data/data.json"


const Home = () => {

  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [disaster, setDisaster] = useState();
  // const [id, setID] = useState("");
  // const [country, setCountry] = useState("");
  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");
  // // const NewsAPI = require('newsapi');
  // // const newsapi = new NewsAPI('500ec8098c64411db5e5df6826eb5a71');

  // const [earthquakeList, setEarthquakeList] = useState([]);
  // const earthquakes = [];
  // const [disasterList, setDisasterList] = useState([]);
  // const disasters = [];

  useEffect(() => {
  //   // axios.get("https://api.reliefweb.int/v1/disasters?apikey=500ec8098c64411db5e5df6826eb5a71").then((res) => {
  //   //   setCountry(res.data.country);
  //   // });

  //   axios.get("https://api.reliefweb.int/v1/disasters?appname=disasterproject&limit=10&preset=latest&profile=full&query[value]=earthquake")
  //     .then((res) => {

  //       for (let i = 0; i < res.data.data.length; i++) {
  //         var item = res.data.data[i].fields.name;
  //         earthquakes.push(item + "\n");
  //         // <Point lat={res.data.data[i].fields.country[0].location.lat} long={res.data.data[i].fields.country[0].location.lon}/>
  //       }
  //       setEarthquakeList(earthquakes);

  //       // earthquakes.map((item, key) => (
  //       //   item = res.data.data[key].fields.name
  //       // ))
  //       setID(res.data.data[0].id);
  //       setTitle(res.data.data[0].fields.name);
  //       setCountry(res.data.data[0].fields.country[0].name);
  //       setLat(res.data.data[0].fields.country[0].location.lat);
  //       setLong(res.data.data[0].fields.country[0].location.lon);
  //       setDate(res.data.data[0].fields.date.event);
  //       setDisaster(res.data.data[0].fields["description-html"]);
  //       console.log(res.data);
  //     })

      axios.get("mongodb+srv://jemmorris403:v3Qxz3fPnkIlPmLB@disastercluster.t6bwvnt.mongodb.net/disaster")
      .then((res) => {
        console.log(res.data);
        // console.log(res.data.data[9].fields.image.url);
      });

      // axios.get("https://api.reliefweb.int/v1/disasters?appname=disasterproject&limit=1000&filter[field]=date.created&filter[value][from]=1980-01-01T00:00:00%2B00:00&profile=full")
      // .then((res) => {
      //   for (let i = 0; i < res.data.data.length; i++) {
      //     var item = res.data.data[i].fields.name;
      //     disasters.push(item + "\n");
      //   }
      //   setDisasterList(disasters);
      //   console.log(res.data);
      // });

  }, []);
    

  // fetch("https://api.reliefweb.int/v1/disasters?apikey=500ec8098c64411db5e5df6826eb5a71")
  //       .then((res) => res.json())
  //       .then(data => {
  //           console.log(data);
  //       });
  return (
    <div className="App">
      {/* <User name="Jem" age={21} email="jemmorris403@gmail.com" /> */}
      {/* <p> {country} </p> */}
      {/* <h1>Disaster Project</h1>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Country: {country}</p>
      <p>Co-ordinates: Latitude: {lat} , Longitude: {long}</p>
      <p>Date: {date}</p>
      {disaster}
      <div>{earthquakeList}</div>
      {/* {disasterList.map((disaster, key) => {
        return <h1 key = {key}>{disaster}</h1>
      })} */}
      {/* <div>Disaster List {disasterList}</div> */} 
    </div>
  );
}

// import {MapContainer, Popup, Marker, TileLayer} from "react-leaflet";
// import { MarkerLayer } from "react-leaflet-marker";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import 'leaflet/dist/leaflet.css';
// // import emdatData from "./data/emdat.json"
// // import dataJson from "./data/data.json"
// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });


// const Home = () => {

//     const navigate = useNavigate();
//     // console.log(emdatData);
//     const [data, setData] = useState([]);
//     const disasterList = [];
//     const latList = [];
//     const lonList = [];
//     const [title, setTitle] = useState("");
//     const [date, setDate] = useState("");
//     const [disaster, setDisaster] = useState();
//     const [id, setID] = useState("");
//     const [country, setCountry] = useState("");
//     const [lat, setLat] = useState("");
//     const [long, setLong] = useState("");

//     const Disaster = (props) => {
//       return (
//         <div>
//           <h1> {props.name} </h1>
//           <p> ({props.lat},{props.lon})</p>
//           <p> {props.country} </p>
//           <p> {props.description} </p> 
//         </div>
//       );
//     }
        

{/* //           <MarkerLayer>
//                 <Marker position={[props.lat, props.lon]}>
//                       <Popup>
//                         <h1 class = "HeadingPopUp">{props.name}</h1>  
//                           <div class = "TextPopUp">
                          
//                           </div>
//                           <div class ="DivButton">
//                               <button class="DisasterButton" onClick={() => { */}
{/* //                                 // let path = json.DisNo;
//                                 // navigate(path);
//                             }}> Show More </button> */}
//                         </div>
//                     </Popup>
//                 </Marker>
//           </MarkerLayer> 

//         </div>
//       );
//     }


//     // useEffect(() => {
//     //     setData(dataJson)
//     // }, []);

    // useEffect(() => {
    //   axios.get("https://api.reliefweb.int/v1/disasters?appname=disasterproject&limit=1000&filter[field]=date.created&filter[value][from]=2022-01-01T00:00:00%2B00:00").then((res) => {
    //     // setData(res.data);
    //     console.log(res.data);
    //     // setData(res.data.data[0].fields.name)

    //     for (let i = 0; i < res.data.data.length; i++) {
    //       var name = res.data.data[i].fields.name
    //       disasterList.push(name + "\n");
    //       // var lat = res.data.data[i].fields.country[0].location.lat;
    //       // latList.push(lat);
    //       // var lon = res.data.data[i].fields.country[0].location.lon;
    //       // lonList.push(lon);
    //       // <Point lat={res.data.data[i].fields.country[0].location.lat} long={res.data.data[i].fields.country[0].location.lon}/>
    //     }

    //     setData(disasterList);
    //     setLong(lonList);
    //     setLat(latList);

    //   });
    // }, []);

    // return (
    //   <div>
    //     {/* {
    //       (() => {
    //         for (var i = 0; i < data.data.length; i++) {
    //           return <Disaster name={data[i]} lon={long[i]} lat={lat[i]} />
    //         }
          
    //       })()
    //     } */}
    //     {data}

    //   </div>
        
    // );

    

//     return (
//       <div className="Map">
//             <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {
//                   () => {
//                     for (var i = 0; i < data.data.length; i++) {
//                       <Disaster name={data[i]} lon={long[i]} lat={lat[i]} />
//                     }
//                   }
//                 }
//             </MapContainer>
      
//         {/* // <div> 
//         //   <Disaster name={data} /> 
//         // </div>  */}
      
        
//       </div>
//     );
//   }

export default Home;