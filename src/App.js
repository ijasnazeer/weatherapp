// import './App.css';
// import React,{useEffect,useState} from "react"
// import axios from 'axios';
// function App() {
//   const[weatherdata,setweatherdata] = useState({
//     main: {},
//     weather:[{}]
//   })
//   useEffect (()=>{
//     axios.get("https://api.openweathermap.org/data/2.5/weather?appid=3e633f1bdd3e5cd998c1b7c91af67a7d&q=Alappuzha,India&units=metric")
//     .then(response=>{
//       // console.log(response.data)
//       setweatherdata(response.data)
//     })
//   })
//   return (
//     <div className="container">
//       <div className='main'>
//         <div className='box'>
//           <h1>{weatherdata.name}</h1>
//           <h2>{weatherdata.main.temp}&deg;c</h2>
//           <h2>{weatherdata.weather[0].main}</h2>
//           <h3>{weatherdata.weather[0].description}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import './App.css';
function App() {
  return (
    <div className="container">
      <div className='box'>
        <div className='section'>
          <h1>Alappuzha</h1>
          <h2>20&deg;c</h2>
          <h2>name of weather</h2>
          <h3>this is the description</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
