import React from 'react'

function Landingpage() {
    return (
        <>
            <div className="order-2 max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:mt-32">
                   <div className="space-y-4">
                  <div>
                  <h1 className="font-bold text-4xl ">Freshness Perfected </h1>
                  <h1 className=" font-bold text-4xl text-orange-500" >Delivered Right to Your Door</h1>
                  </div>
                    <p className="font-thin">Discover a new standard in meal delivery with NxtFoods. Our carefully curated dishes are prepared with the freshest ingredients and delivered swiftly to satisfy your cravings. Elevate your dining experience—because you deserve nothing less.</p>
                   </div>
                   <div className="flex">
                
                   <button className="btn btn-success text-orange-500 btn-wide mt-8 background-green-300">Download App</button>
                   </div>
                </div>

                
<div className=" order-1 md:w-1/2 flex justify-center">
    <img src="mpio.png" alt="Burger Combo" className=" order-1 max-w-6xl max-h-6xl" />
  </div>
            </div>
        </>
    )
}

export default Landingpage