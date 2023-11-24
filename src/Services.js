import React from 'react'

function Services() {
  return (
    <div className='container'>
      <div className= 'textcontainer'>
                <h1 style={{color:"darkblue",textAlign:"center",justifyContent:"center"}}>Services provided from us</h1>
                <blockquote>
                <p ><span style={{fontWeight:"bold"}}>Fresh Bread Sales:</span>Fresh Bread Sales: The primary service would be the sale of freshly baked bread, featuring a diverse range of flavors and types, from classic sourdough and whole grain to specialty options like olive or rosemary-infused loaves.</p>
                <br/>
                <p ><span style={{fontWeight:"bold"}}>Custom Orders: </span>The Home Make Bread House could take custom orders for special occasions, allowing customers to personalize their bread choices, shapes, and sizes for events such as birthdays, weddings, or celebrations.</p>

                <br/>
                <p ><span style={{fontWeight:"bold"}}>Tasting Events: </span> Periodic tasting events could be organized, allowing customers to sample and discover new flavors. This can be an excellent way to introduce customers to different bread varieties and gather feedback.</p>
                <br/>
                </blockquote>
         </div>
        <img src='pic9.jpeg'  className='imageholder'/>


    </div>
  )
}

export default Services