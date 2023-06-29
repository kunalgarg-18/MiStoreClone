import {Carousel}  from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({start}) => {
  return (
    <Carousel fade>
        
        {start.map((item) =>(
            <Carousel.Item>
            <img 
                className='d-block w-100'
                src = {item}
                alt = "first slide"
            />
            </Carousel.Item>
        ))}
        
    </Carousel>
  )
}

export default Slider

