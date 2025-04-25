import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Downpage() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const kitchenData = [
    {
      id: 1,
      name: "Zalmis Kitchen",
      title: "Authentic homemade flavors from Peshawar",
      image: "zalmikitchen.jpg",
    },
    {
      id: 2,
      name: "Aishas Kitchen",
      title: "Delicious family meals made with love",
      image: "aishakitchn.png",
    },
    {
      id: 3,
      name: "Grandmas Kitchen",
      title: "Classic recipes just like grandma made",
      image: "grandmaskitchen.jpg",
    },
    {
      id: 4,
      name: "Yumas Kitchenette",
      title: "Tasty treats fresh from the stove",
      image: "yumaskithcen.png",
    },
    {
      id: 5,
      name: "Yummy Yard",
      title: "Serving joy with every single bite",
      image: "yummyyard.jpg",
    },
    {
      id: 6,
      name: "Mamas Kitchen",
      title: "Wholesome comfort food made daily",
      image: "mamasktichen.jpg",
    },
  ];
  
  return (
    <div className="pl-20 pt-32 px-4 py-8 h-full">
      <div className="pb-20">
        <h1 className="font-bold text-2xl ">Our Home Chefs</h1>
        <p className="font-semibold text-xl">
          NxtFoods partners with top homechefs to bring you fresh, healthy, and delicious meals every day. Enjoy the taste of home with nutrition you can trust.
        </p>
      </div>

      <Slider {...settings}>
        {kitchenData.map((kitchen) => (
          <div key={kitchen.id} className="px-2">
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                  src={`/images/${kitchen.image}`}  
                  alt={kitchen.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-orange-500">
                  {kitchen.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{kitchen.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Downpage;
