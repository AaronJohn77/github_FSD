import React from 'react'

function Contactus() {
  return (
    <div className='container'>
      
      <h1 className='titleheader' style={{ color: "black", textAlign: "center" }}>Contact Us:</h1>
        <div className= 'textcontainer'>
        <blockquote>
          <p >Thank you for reaching out to us. We value your feedback and inquiries. Please use the following information to get in touch with us:
          </p>

          <p >Email : aaronjohnkong@gmail.com
          </p>
          <p >Phone: 0109829065
          </p>
          <p >Address: 500A, Bukit Orang Park, Jalan Sultan Isakandar, Bintulu, Sarawak
          </p>
          <p >Business Hours: Monday - Friday: 9:00 AM - 5:00 PM 
          </p>
          </blockquote>
        </div>

      

      <iframe width="600" height="500" className='gmap_canvas' src="https://maps.google.com/maps?q=bintulu%20bukit%20orang&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">


      </iframe>


    </div>



  )
}

export default Contactus