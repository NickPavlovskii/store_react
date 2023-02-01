import React from 'react'
import './Map.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
const Maps = () => {
    const defaultState = {
        center: [38.917358, -76.980125],
        zoom: 8,
      };
    
      return (
        <section className="d_flex">
          <div className="panel">

          
            <div className='panel-head' >
              <h4> Contact us</h4>
                
            </div>
            <div className='panel-details'>
           
          <p><FaMapMarkerAlt/>  70 Washington Square South, New York, NY 10012, United States</p>
         <p><AiOutlineMail/>  Email: o_oniklado_o@list.ru </p>
         <p><FaPhoneAlt/> Phone: +79883620722 </p>
</div>
            </div>
        <div className='maps' >


        <YMaps className='map'>
          <Map defaultState={defaultState} width='500px' height='300px' >
            <Placemark 
         geometry={[38.917358, -76.980125]}
          
              
             
            />
            
          </Map>
        </YMaps>
        </div>
        </section>
      );
    }


export default Maps

