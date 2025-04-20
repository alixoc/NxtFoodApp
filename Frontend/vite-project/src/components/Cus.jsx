import React from 'react';

function Cus() {
  return (
    <>
      {/* Contact Banner Section */}
      <div className="relative w-full h-[400px] md:h-[480px]">
        <img
          src="back2.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center px-10">
          <h1 className="text-white text-5xl font-bold">Contact us</h1>
        </div>
      </div>




      {/* Contact Form Section */}
      <div className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Form */}
          <form className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact form</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700">
                  Name <span className="text-pink-500">*</span>
                </label>
                <input type="text" placeholder="First" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block font-medium text-gray-700 invisible">Last</label>
                <input type="text" placeholder="Last" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Email <span className="text-pink-500">*</span>
              </label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Your message <span className="text-pink-500">*</span>
              </label>
              <textarea className="w-full h-32 border border-gray-300 p-2 rounded-md"></textarea>
            </div>

            <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full hover:bg-pink-600 transition duration-200">
              Submit
            </button>
          </form>

          {/* Mascot Image */}
          <div className="flex justify-center items-center">
            <img
              src="cati.png"
              alt="Mascot"
              className="max-w-xs w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cus;
