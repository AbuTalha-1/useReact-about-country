import { useEffect, useState } from "react"
import Coun from "./Coun";
import './Random.css'

function Random() {
   const [xy, setXy] = useState([]);

   useEffect (()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json() )
    .then (data => setXy(data));

   },[])
 
  return (
    <div> 
      
      <h2>Random: {xy.length}  </h2>
    
   <div className="country-container">
   {
      xy.map( country => <Coun
      key={Random.id}
      country={country}
      ></Coun>)
    }
   </div>
    
    </div>

    
  )
}

export default Random