import React from 'react'

function Home() {
  return (
    <div className='container'>
      <div className='textcontainer'>
        <h1 className='titleheader' style={{ color: "black", textAlign: "center" }}>Welcome to Home Make Bread House </h1>
        <br></br>
        <blockquote>
          <p >🍞 Our Daily Specials</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Artisan Sourdough :
            </span> Made with a century-old starter for that perfect tangy flavor.</p>

          <p><span style={{ fontWeight: "bold" }}>Honey Wheat Loaf :  </span>A wholesome blend of whole wheat and sweet honey.</p>

          <p><span style={{ fontWeight: "bold" }}>Seeded Multigrain: </span>  A loaf bread with  Seeded Multigrain</p>
        </blockquote>

        <blockquote>
        <p >🌟 Why Choose Home Make Bread House ?</p>
        <p >
          <span style={{ fontWeight: "bold" }}>Quality Ingredients:
          </span> We source only the finest, locally-sourced ingredients.</p>

        <p ><span style={{ fontWeight: "bold" }}>Handcrafted Goodness:  </span>Each loaf is carefully crafted by our skilled bakers.</p>

        <p ><span style={{ fontWeight: "bold" }}>Variety: </span>  From classic baguettes to unique specialty loaves, we have something for everyone.</p>

        <p ><span style={{ fontWeight: "bold" }}>Fresh Daily : </span>  Enjoy the aroma of freshly baked bread every day.
        </p>
        </blockquote>
      </div>
      <img src='pic2.jpg' className='imageholder' />
    </div>
  )
}

export default Home