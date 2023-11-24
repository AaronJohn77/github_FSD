import React from 'react'

function Product() {
  return (

    <div className='container'>
            <h1 style={{ color: "darkblue", textAlign: "center", justifyContent: "center" }}>Product List </h1>

<div className='Product_container'>

     

          <div class="card">

          <img src="pic6.jpeg" alt="Sourdough Bread" style={{ width: "30%" }}></img>
          <h1> Artisan Sourdough Bread</h1>
          <p class="price">RM 10</p>
          <p>Made with a century-old starter for that perfect tangy flavor.</p>

        </div>
     

     
        <div class="card">

          <img src="pic7.jpg" alt="Honey Wheat Loaf " style={{ width: "30%" }}></img>
          <h1> Honey Wheat Loaf </h1>
          <p class="price">RM 4.50</p>
          <p>AA wholesome blend of whole wheat and sweet honey.</p>

        </div>
     

        
     
        <div class="card">

          <img src="pic8.jpeg" alt="Multigrain loaf" style={{ width: "30%" }}></img>
          <h1>     Seeded Multigrain </h1>
          <p class="price">RM 4.50</p>
          <p>A loaf bread with  Seeded Multigrain</p>

        </div>
     

       
  

    </div>
    </div>


  )
}

export default Product