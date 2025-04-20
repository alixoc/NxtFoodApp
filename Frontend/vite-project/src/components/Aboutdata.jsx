import React from 'react'

function Aboutdata() {
  return (
    <>
    <div className="relative w-full h-[400px] md:h-[480px]">
        <img
          src="aboutus.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center px-10">
          <h1 className="text-white text-5xl font-bold">About us</h1>
        </div>
      </div>

      <section className="flex items-center justify-center py-16 bg-white-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - About Us Information */}
          <div className="md:w-1/2 text-center md:text-left mb-8  md:mb-0 pl-40">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg font-semibold text-black-600 mb-6">
            At NxtFoods, we’re redefining the way people experience food delivery. Born from a desire to promote health, convenience, and affordability, our mission is to bring nutritious, well-balanced meals right to your doorstep—whether you're a student burning the midnight oil or a busy professional trying to juggle life on the go.

We’re not just another food delivery service. We’re a technology-driven platform that connects health-conscious consumers with cloud kitchens, local restaurants, and home chefs to deliver daily, weekly, and monthly meal plans that are delicious, affordable, and packed with nourishment.

With food delivery costs rising and more than 60% of outlets offering low-nutrient fast food, NxtFoods stands as a solution. We empower users to pre-plan meals, access healthy recipes, and pay easily through integrated digital payments—all from a clean, easy-to-use mobile and web app.
            </p>
          
          </div>
          {/* Right Side - Image */}
          <div className="md:w-1/2 ml-80">
            <img 
              src="cati2.png" 
              alt="About Us" 
              className="max-w-xs w-150px h-150px object-contain ml-30"
            />
          </div>
        </div>
      </div>
    </section>


    
    
    </>
  )
}

export default Aboutdata