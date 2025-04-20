import React, { useEffect, useState } from 'react'

function Navbar() {



    const Navitems = (<>
  <li><a href="/" class="font-bold">Home</a></li>
<li><a href="/chef" class="font-bold">Menu</a></li>
<li><a href="/contact" class="font-bold">Contact</a></li>
<li><a href="/about" class="font-bold">About Us</a></li>
    </>)
    return (
        <>
            <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4  ">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                                </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {Navitems}
                            </ul>
                        </div>
                        <a className=" text-3xl flex items-center font-bold cursor-pointer">
                            <img src="logo.png" className="h-10 w-10 mr-2" />
                            NxtFoods
                        </a>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {Navitems}
                            </ul>
                        </div>
                        <div className="hidden md:block">  
                        <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                        </div>





                        <label className="swap swap-rotate">

 
</label>

                        <div>
                            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Download</a>
                        </div>
                    </div>

                </div>
            </div>

        </>



    )
}

export default Navbar