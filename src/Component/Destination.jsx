import React from 'react';
import data from '../data';
import moon from '../images/moon.png';
import mars from '../images/mars.png';
import europa from '../images/europa.png';
import titan from '../images/titan.png';

const Destination = () => {
  const [planetNumber, setPlanetNumber] = React.useState(0);

  let planetImages = [moon, mars, europa, titan];

  return (
    <div className='Destination'>
      <div className='destination-content'>
        <>
          <h1 className='destination-content-subtitle'>
            <span>01</span> Pick your destination
          </h1>

          <div className='destination-content-moon'>
            <img src={planetImages[planetNumber]} alt='' />
          </div>

          <div className='destination-tab'>
            {data.destinations.map((destination, index) => (
              <div
                key={index}
                className={destination.name.toUpperCase() === 'MOON' ? 'tab tab-active' : 'tab'}
                onClick={() => setPlanetNumber(index)}
              >
                {destination.name.toLowerCase()}
              </div>
            ))}
          </div>

          <h1 className='destination-title'>
            {data.destinations[planetNumber].name}
          </h1>
          <p className='destination-content-body'>
            {data.destinations[planetNumber].description}
          </p>


          <div className='destination-info'>
            <div className='distance'>
              <p>AVG. DISTANCE</p>
              <h1>{data.destinations[planetNumber].distance}</h1>
            </div>

            <div className='time'>
              <p>Est. travel time</p>
              <h1>{data.destinations[planetNumber].travel}</h1>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Destination;
