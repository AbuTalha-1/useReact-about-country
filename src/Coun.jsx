import { useState } from 'react';
import './Coun.css'
const Coun = ({country}) => {
    const {name,flags,region,area}=country;

  const [visited, setVisited] =  useState (false);
  const handlevisit = () => {
      setVisited (true);
  }

    return (
        <div className= {`box ${visited ? `after` : `before`}`}>
            <h2>
                Name: {name.common}
            </h2>
            <h2>
                Region: {region}
            </h2>
            <h4>
                Area : {area}
            </h4>
            <img src= {flags.png} alt="" />
            <button onClick={handlevisit}> Visited</button>
            {visited ? '  I have visited this Country' : ' I want to visit'}
               
            
        </div>
        
        
        
    );
};

export default Coun;