import React, { useEffect, useState } from 'react';

function Cheflist() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setScrollX(value * 2.5); //more increased speed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4  ">

        
        <h1 className="font-bold text-4xl mt-20 text-center">
          We are delighted to have you <span className="text-orange-400">Here!</span>
        </h1>

        <h2 className="font-bold text-2xl text-orange-400 mt-6 text-center px-4">
          Dive into our delicious menu — from energizing breakfasts to hearty lunches and satisfying dinners, we've got every craving covered!
        </h2>

        {/* Scroll Image */}
        <div className="relative h-[42vh] mt-4">
          <img
            src="/logo.png"
           
            className="absolute top-10 transition-all duration-300"
            style={{
              right: `${scrollX}px`,
              width: '250px',
            }}
          />
        </div>






   </div>
    </>
  );
}

export default Cheflist;
