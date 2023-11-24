import React from 'react'

function Aboutus() {
    return (
        <div className='container'>
            <h1 className='titleheader' style={{ color: "black", textAlign: "center" }}>About Us</h1>
            <div className= 'textcontainer'>
             <blockquote>
                <p style={{ color: "black" }}>
                Welcome to the Home Make Bread House, where the delightful aroma of freshly baked bread wafts through the air, creating a warm and inviting atmosphere. Our artisanal breads are crafted with care and expertise, ensuring a taste that transcends expectations. 
                </p>

                <p>
                Whether you're a child with a penchant for soft, pillowy slices or an adult with a discerning palate, our diverse range of bread caters to all age groups. What sets us apart is our commitment to inclusivity—our selection includes options that cater to various health conditions, ensuring that everyone can indulge in the simple pleasure of freshly baked bread. 
                </p>

                <p>
                Step into our cozy establishment, where each loaf is a testament to our passion for baking and our dedication to providing a delightful experience for every customer, regardless of their dietary needs or age.
                
                </p>
                </blockquote>
                 </div>
            
            <img src='pic1.jpeg'  className='imageholder' />
        </div>
    )
}

export default Aboutus