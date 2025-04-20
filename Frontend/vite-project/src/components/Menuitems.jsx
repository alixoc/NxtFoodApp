import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// breaakfast data
const breakfastData = [
    {
      id: 1,
      name: "Classic Pancakes",
      title: "Fluffy pancakes with maple syrup and fresh berries",
      image: "pancake.jpg",
      price: 450,
    },
    {
      id: 2,
      name: "Scrambled Eggs",
      title: "Creamy scrambled eggs with a side of toast",
      image: "eggs.jpg",
      price: 350,
    },
    {
      id: 3,
      name: "French Toast",
      title: "Golden French toast with powdered sugar and butter",
      image: "frenchtoast.jpg",
      price: 400,
    },
    {
      id: 4,
      name: "Omelette",
      title: "Egg omelette with veggies and cheese",
      image: "omelette.jpg",
      price: 300,
    },
    {
      id: 5,
      name: "Chicken Channay",
      title: "Traditional Lahori-style chicken channay with naan",
      image: "channay.jpg",
      price: 480,
    },
    {
      id: 6,
      name: "Aloo ki Bhujia",
      title: "Spiced mashed potato bhujia served hot with paratha",
      image: "bhujia.jpg",
      price: 300,
    },
    {
      id: 7,
      name: "Chicken Paratha",
      title: "Stuffed chicken paratha with chutney on the side",
      image: "chicparatha.jpg",
      price: 420,
    },
    {
      id: 8,
      name: "Gur Walay Chawal",
      title: "Sweet and sticky jaggery rice, Punjabi style",
      image: "gurchawal.jpg",
      price: 390,
    },
    {
      id: 9,
      name: "Jam Slice",
      title: "Simple breakfast with jam spread on buttered toast",
      image: "jamslice.jpg",
      price: 200,
    },
    {
      id: 10,
      name: "Tea Rusk",
      title: "Crispy rusks perfect with a hot cup of chai",
      image: "tearusk.jpg",
      price: 150,
    },
  ];
  

//lunch data
const lunchData = [
    {
      id: 1,
      name: "Chicken Karahi",
      title: "Spicy and flavorful traditional dish",
      image: "karahi.jpg",
      price: "400"
    },
    {
      id: 2,
      name: "Palak Chicken",
      title: "Healthy spinach with tender chicken",
      image: "palak.jpg",
      price: "380"
    },
    {
      id: 3,
      name: "Yakhni Pulao",
      title: "Aromatic rice cooked in chicken broth",
      image: "pulao.jpg",
      price: "350"
    },
    {
      id: 4,
      name: "Anday Kofte",
      title: "Egg meatballs in rich curry",
      image: "kofte.jpg",
      price: "370"
    },
    {
      id: 5,
      name: "Biryani",
      title: "Spicy layered rice with meat",
      image: "biryani.jpg",
      price: "390"
    },
    {
      id: 6,
      name: "Daal Chawal",
      title: "Comforting lentils and rice combo",
      image: "dalchawal.jpg",
      price: "280"
    },
    {
      id: 7,
      name: "Daal Mash",
      title: "Creamy mash daal with spices",
      image: "daal.jpg",
      price: "300"
    },
    {
      id: 8,
      name: "Spaghetti",
      title: "Desi-style spaghetti with masala",
      image: "spaghetti.jpg",
      price: "360"
    },
    {
      id: 9,
      name: "Aloo Parathay",
      title: "Crispy potato-filled flatbread",
      image: "alooparatha.jpg",
      price: "220"
    },
    {
      id: 10,
      name: "Kari Pakora",
      title: "Tangy curry with fritters",
      image: "kari.jpg",
      price: "330"
    }
  ];


//dinner data
const dinnerData = [
    {
      id: 1,
      name: "Chapli Kabab",
      title: "Juicy minced meat patties fried to perfection",
      image: "kabab.jpg",
      price: "400"
    },
    {
      id: 2,
      name: "Bhindi",
      title: "Stir-fried okra with desi spices",
      image: "bhindi.jpg",
      price: "320"
    },
    {
      id: 3,
      name: "Torian",
      title: "Traditional bottle gourd dish full of flavor",
      image: "toria.jpg",
      price: "310"
    },
    {
      id: 4,
      name: "Biryani",
      title: "Spicy layered rice with meat",
      image: "biryani.jpg",
      price: "390"
    },
    {
      id: 5,
      name: "Palak Chicken",
      title: "Healthy spinach with tender chicken",
      image: "palak.jpg",
      price: "380"
    },
    {
      id: 6,
      name: "Yakhni Pulao",
      title: "Aromatic rice cooked in chicken broth",
      image: "pulao.jpg",
      price: "350"
    },
    {
      id: 7,
      name: "Anday Kofte",
      title: "Egg meatballs in rich curry",
      image: "kofte.jpg",
      price: "370"
    },
    {
      id: 8,
      name: "Spaghetti",
      title: "Desi-style spaghetti with masala",
      image: "spaghetti.jpg",
      price: "360"
    },
    {
      id: 9,
      name: "Kari Pakora",
      title: "Tangy curry with fritters",
      image: "kari.jpg",
      price: "330"
    },
    {
      id: 10,
      name: "Chicken Karahi",
      title: "Spicy and flavorful traditional dish",
      image: "karahi.jpg",
      price: "400"
    }
  ];



function Menuitems() {

//settings defined for the sliders
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,  // Updated from 3 to 4
    slidesToScroll: 4,  // Updated from 3 to 4
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,  // Updated from 3 to 4
          slidesToScroll: 4,  // Updated from 3 to 4
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
//

  return (
   <>
   
   <div className="pl-20 pt-32 px-4 py-8 h-full">


 {/* this code will be for the breakfast  */}
 <div className=" px-4 pb-4">
    <h1 className="font-bold text-4xl text-green-500">
        BreakFast
    </h1>
    <p  className="font-bold text-2xl text-orange-500">
    Kickstart your day with a wholesome breakfast—fresh, healthy, and delicious!
    </p>
   </div>
   
   <Slider {...settings}>
        {breakfastData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                  src={`/breakfast/${item.image}`}  
                  alt={item.name}
                  className="h-60 w-full object-cover"

                  
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-orange-500">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.title}</p>
                <p className="font-bold text-xl text-orange-500">{item.price} PKR</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
{/* breakfast code ends here */}



{/* lunch code starts here */}
      <h1 className="font-bold text-4xl text-green-500 pt-20 px-4">Lunch</h1>
      <p className="font-bold text-2xl text-orange-500 pb-4 px-4">
        Power through your afternoon with our hearty and flavorful lunch combos!
      </p>

      <Slider {...settings}>
        {lunchData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                   src={`/lunch/${item.image}`}  
                  alt={item.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-orange-500">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.title}</p>
                <p className="font-bold text-xl text-orange-500">{item.price} PKR</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
{/* lunch code ends */}


{/* code for dinner starts here */}
<h1 className="font-bold text-4xl text-green-500 pt-20 px-4">Dinner</h1>
      <p className="font-bold text-2xl text-orange-500 pb-4 px-4">
        End your day with a fulfilling dinner — warm, rich, and packed with taste!
      </p>

      <Slider {...settings}>
        {dinnerData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                 src={`/dinner/${item.image}`}  
                  alt={item.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-orange-500">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.title}</p>
                <p className="font-bold text-xl text-orange-500">{item.price} PKR</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
{/* dinner code ends */}




   </div> 
   
   
   
   </>
  )
}

export default Menuitems