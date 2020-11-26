import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { databaseUrl } from '../../shared/databaseUrl';
import { Loading } from '../UtilComp/LoadingComponent';
 
function MainCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
 
    let Example = props.medicine.map(item => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={databaseUrl + item.image}
            alt="First slide"
            width="400"
            height="200"
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
    ))

    if (props.isLoading){
        return(
            <Loading/>
        )
    }

    else if (props.errMess){
        return(
            <h4>{props.errMess}</h4>
        );
    }

    else {
        return (
        <Carousel activeIndex={index} onSelect={handleSelect}  className="mt-1 mycaro"
            interval="1000"  keyboard="true" indicator="true"
        >
            {Example}
        </Carousel>
        );
    }
  }
  
export default MainCarousel;
